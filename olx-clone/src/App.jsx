import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { ProductProvider } from './contexts/ProductContext';

// Components
import Navbar from './components/Navbar';

// Pages
import Landing from './pages/Landing';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PostAd from './pages/PostAd';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import UserDashboard from './pages/UserDashboard';
import AdminPanel from './pages/AdminPanel';
import Footer from './components/Footer';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Safety from './pages/Safety';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Support from './pages/Support';

// Protected Route Component
const ProtectedRoute = ({ children, role }) => {
  const { currentUser, loading } = React.useContext(AuthContext);

  if (loading) return null;
  if (!currentUser) return <Navigate to="/login" />;
  if (role && currentUser.role !== role) return <Navigate to="/" />;

  return children;
};

// Category Wrapper component
function CategoryPage() {
    return <Home />;
}

function AppContent() {
  const location = useLocation();
  const hideNav = ['/', '/login', '/signup'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNav && <Navbar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/post-ad" element={
            <ProtectedRoute>
              <PostAd />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } />
          
          <Route path="/admin" element={
            <ProtectedRoute role="admin">
              <AdminPanel />
            </ProtectedRoute>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support/:type" element={<Support />} />
        </Routes>
      </div>
      {!hideNav && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Router>
          <AppContent />
        </Router>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
