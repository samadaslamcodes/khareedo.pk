import React, { createContext, useState, useEffect, useContext } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { mockProducts } from '../data/mockData';
import { AuthContext } from './AuthContext';
import Swal from 'sweetalert2';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Handle User-Scoped Loading
  useEffect(() => {
    if (currentUser) {
      const savedCart = localStorage.getItem(`khareedo_cart_${currentUser.uid}`);
      const savedOrders = localStorage.getItem(`khareedo_orders_${currentUser.uid}`);
      setCart(savedCart ? JSON.parse(savedCart) : []);
      setOrders(savedOrders ? JSON.parse(savedOrders) : []);
    } else {
      setCart([]);
      setOrders([]);
    }
  }, [currentUser]);

  // Listen to products in Firestore
  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, 
      (querySnapshot) => {
        const prods = [];
        querySnapshot.forEach((doc) => {
          prods.push({ id: doc.id, ...doc.data() });
        });
        
        setProducts([...prods, ...mockProducts]);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore error:", error);
        setProducts(mockProducts);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Save changes to user-specific storage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`khareedo_cart_${currentUser.uid}`, JSON.stringify(cart));
    }
  }, [cart, currentUser]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`khareedo_orders_${currentUser.uid}`, JSON.stringify(orders));
    }
  }, [orders, currentUser]);

  const addProduct = async (productData) => {
    try {
      const docData = {
        ...productData,
        createdAt: new Date().toISOString(),
        userId: currentUser?.uid || "guest",
        sellerName: currentUser?.name || 'Anonymous',
        status: 'active'
      };
      
      await addDoc(collection(db, "products"), docData);
      
      Swal.fire({
        icon: 'success',
        title: 'Ad Posted!',
        text: 'Your listing is now live in Firestore.',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      console.error("Error adding product: ", error);
      Swal.fire({ icon: 'error', title: 'Upload Failed', text: error.message });
    }
  };

  const deleteProduct = async (id) => {
    try {
      // Check if it's a mock product (all mock IDs start with 'ph', 'lp', etc.)
      const isMock = products.find(p => p.id === id && id.length < 10); 
      
      if (isMock) {
        setProducts(products.filter(p => p.id !== id));
      } else {
        await deleteDoc(doc(db, "products", id));
      }
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      Swal.fire({ icon: 'info', title: 'Already in cart' });
      return;
    }
    setCart([...cart, product]);
    Swal.fire({ icon: 'success', title: 'Added to Cart', timer: 1000, showConfirmButton: false });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const placeOrder = async (paymentDetails) => {
    const newOrder = {
      items: cart,
      userId: currentUser?.uid || "guest",
      total: cart.reduce((acc, item) => acc + item.price, 0),
      createdAt: new Date().toISOString(),
      status: 'Pending',
      ...paymentDetails
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), newOrder);
      setOrders([{ id: docRef.id, ...newOrder }, ...orders]);
      setCart([]);
      Swal.fire({
        icon: 'success',
        title: 'Order Placed!',
        text: 'Your order has been recorded in our database.',
      });
    } catch (error) {
      console.error("Order placement error:", error);
      // Fallback to local state if Firestore fails
      setOrders([{ id: 'ORD' + Date.now(), ...newOrder }, ...orders]);
      setCart([]);
    }
  };

  return (
    <ProductContext.Provider value={{
      products, loading, addProduct, deleteProduct,
      cart, addToCart, removeFromCart,
      orders, placeOrder,
      searchQuery, setSearchQuery
    }}>
      {children}
    </ProductContext.Provider>
  );
};
