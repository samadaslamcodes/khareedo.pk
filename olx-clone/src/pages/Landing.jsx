import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Mail, Lock, User, ArrowRight, ShoppingBag, ShieldCheck, Globe, Star } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Landing() {
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup, currentUser, loading: authLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (currentUser && !authLoading) {
      navigate('/');
    }
  }, [currentUser, authLoading, navigate]);

  if (authLoading) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const categories = ['dream Car', 'next Mobile', 'ideal Home', 'perfect Gear'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
        Swal.fire({ 
          icon: 'success', 
          title: 'Welcome Back!', 
          timer: 1500, 
          showConfirmButton: false,
          confirmButtonColor: '#002f34'
        });
        navigate('/home');
      } else {
        if (formData.password !== formData.confirmPassword) {
          throw new Error('Passwords do not match');
        }
        await signup(formData.email, formData.password, formData.name);
        Swal.fire({ 
          icon: 'success', 
          title: 'Account Created!', 
          timer: 1500, 
          showConfirmButton: false,
          confirmButtonColor: '#002f34'
        });
        navigate('/home');
      }
    } catch (error) {
      Swal.fire({ 
        icon: 'error', 
        title: 'Authentication Failed', 
        text: error.message,
        confirmButtonColor: '#002f34'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fb] overflow-hidden relative">
      
      {/* Background Abstract Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-khareedo-accent rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#002f34] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 py-12">
        
        {/* Left Marketing Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
           <div className="inline-flex items-center gap-2 mb-8 bg-white/80 backdrop-blur-md text-[#002f34] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-gray-100 shadow-sm animate-fade-in">
              <ShieldCheck className="h-4 w-4 text-khareedo-accent" /> Secured Marketplace
           </div>
           
           <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#002f34] tracking-tight leading-[1.1] mb-6 lg:mb-8">
              Find your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002f34] to-khareedo-accent inline-block min-w-[200px] animate-pulse-soft transition-all duration-500">
                {categories[currentWord]}
              </span>
           </h1>
           
           <p className="text-lg text-gray-500 font-medium mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed">
             Join the largest community of buyers and sellers in Pakistan. Trade with confidence on our high-performance classifieds platform.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-8 lg:pt-12 border-t border-gray-200">
              <div className="group cursor-default">
                 <div className="flex items-center gap-2 mb-1">
                    <Globe className="h-4 w-4 text-khareedo-accent" />
                    <h3 className="text-3xl font-black text-[#002f34] tracking-tighter">80+</h3>
                 </div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#002f34] transition-colors">Premium Listings</p>
              </div>
              <div className="group cursor-default">
                 <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-khareedo-accent" />
                    <h3 className="text-3xl font-black text-[#002f34] tracking-tighter">1.2M</h3>
                 </div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#002f34] transition-colors">Monthly Users</p>
              </div>
              <div className="group cursor-default">
                 <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="h-4 w-4 text-khareedo-accent" />
                    <h3 className="text-3xl font-black text-[#002f34] tracking-tighter">100%</h3>
                 </div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:text-[#002f34] transition-colors">Verified Sellers</p>
              </div>
           </div>
        </div>

        {/* Right Auth Side */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
           <div className="bg-white rounded-lg shadow-[0_22px_70px_4px_rgba(0,47,52,0.1)] overflow-hidden border border-gray-100 p-8 sm:p-12 relative animate-fade-in">
              
              <div className="flex gap-4 mb-10 bg-gray-50 p-2 rounded-lg border border-gray-100">
                 <button 
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 text-[10px] font-black rounded-lg transition-all tracking-widest ${isLogin ? 'bg-[#002f34] shadow-lg text-white' : 'text-gray-400 hover:text-gray-600'}`}
                 >
                   LOGIN
                 </button>
                 <button 
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 text-[10px] font-black rounded-lg transition-all tracking-widest ${!isLogin ? 'bg-[#002f34] shadow-lg text-white' : 'text-gray-400 hover:text-gray-600'}`}
                 >
                   SIGN UP
                 </button>
              </div>

              <h2 className="text-3xl font-black text-[#002f34] mb-3 tracking-tight">
                {isLogin ? 'Welcome Back' : 'Join Khareedo'}
              </h2>
              <p className="text-sm font-medium text-gray-400 mb-10 leading-relaxed">
                Connect with the best traders in the country. Secure your next deal today.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {!isLogin && (
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-khareedo-accent transition-colors">
                      <User className="h-5 w-5" />
                    </div>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your Full Name"
                      onChange={handleChange}
                      className="w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-gray-50 focus:border-khareedo-accent focus:bg-white rounded-lg outline-none font-bold text-gray-900 transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>
                )}

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-khareedo-accent transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    onChange={handleChange}
                    className="w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-gray-50 focus:border-khareedo-accent focus:bg-white rounded-lg outline-none font-bold text-gray-900 transition-all text-sm placeholder:text-gray-400"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-khareedo-accent transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                   <input
                    name="password"
                    type="password"
                    required
                    placeholder="Security Password"
                    onChange={handleChange}
                    className="w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-gray-50 focus:border-khareedo-accent focus:bg-white rounded-lg outline-none font-bold text-gray-900 transition-all text-sm placeholder:text-gray-400"
                  />
                </div>

                {!isLogin && (
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-khareedo-accent transition-colors">
                      <Lock className="h-5 w-5" />
                    </div>
                     <input
                      name="confirmPassword"
                      type="password"
                      required
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      className="w-full pl-14 pr-4 py-4 bg-gray-50 border-2 border-gray-50 focus:border-khareedo-accent focus:bg-white rounded-lg outline-none font-bold text-gray-900 transition-all text-sm placeholder:text-gray-400"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center py-4 bg-[#002f34] text-white rounded-lg font-black shadow-lg hover:bg-[#003f44] transition-all group mt-8 active:scale-95 space-x-2"
                >
                  <span className="tracking-widest uppercase text-xs">{loading ? 'AUTHENTICATING...' : (isLogin ? 'Sign In Now' : 'Create My Account')}</span>
                  {!loading && <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>

              {isLogin && (
                <div className="mt-8 text-center">
                  <button className="text-[10px] font-black text-gray-400 hover:text-khareedo-accent uppercase tracking-[0.2em] transition-colors">
                    Reset Forgotten Password
                  </button>
                </div>
              )}
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 hover:opacity-100 transition-opacity flex gap-8 items-center">
         <span className="text-[10px] font-black text-[#002f34] uppercase tracking-widest">© 2024 KHAREEDO.PK</span>
         <button onClick={() => navigate('/login')} className="text-[10px] font-black text-gray-400 hover:text-khareedo-accent uppercase tracking-widest">Global Access</button>
      </div>
    </div>
  );
}
