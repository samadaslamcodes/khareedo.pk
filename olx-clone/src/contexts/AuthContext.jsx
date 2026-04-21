import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch additional user info (name, role) from Firestore
          const userDoc = await getDoc(doc(db, "users", user.uid));
          
          if (userDoc.exists()) {
            setCurrentUser({ 
              uid: user.uid, 
              email: user.email, 
              name: userDoc.data().name || 'User',
              role: userDoc.data().role || 'user',
              ...userDoc.data() 
            });
          } else {
            console.error("Firestore document for user is missing!");
            setCurrentUser({ uid: user.uid, email: user.email, name: 'User', role: 'user' });
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw getFirebaseErrorMessage(error);
    }
  };

  const signup = async (email, password, name) => {
    try {
      // 1. Create User in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Save additional user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role: 'user', // Default role for new signups
        createdAt: new Date().toISOString()
      });

      return user;
    } catch (error) {
      throw getFirebaseErrorMessage(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  // Helper to translate Firebase codes to human readable strings
  const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
      case 'auth/invalid-credential':
      case 'auth/user-not-found':
      case 'auth/wrong-password':
        return new Error('Invalid email or password.');
      case 'auth/email-already-in-use':
        return new Error('This email is already registered.');
      case 'auth/weak-password':
        return new Error('Password should be at least 6 characters.');
      default:
        return new Error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
