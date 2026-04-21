import React, { useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { MapPin, Calendar, ShieldCheck, Phone, MessageSquare, ShoppingCart, ArrowLeft, Heart, Share2, Info, ArrowRight } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, loading } = useContext(ProductContext);

  const product = useMemo(() => {
    return products.find(p => p.id === id);
  }, [products, id, loading]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#002f34]"></div>
        <p className="mt-4 text-gray-500 font-black uppercase tracking-widest text-[10px]">Loading Listing Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-black text-[#002f34]">Product Not Found</h2>
        <button onClick={() => navigate('/home')} className="mt-4 khareedo-btn">Back to Home</button>
      </div>
    );
  }

  const handleMessage = () => {
    Swal.fire({
      title: 'Chat started!',
      text: `Connecting you with ${product.sellerName}...`,
      icon: 'info',
      confirmButtonColor: '#002f34'
    });
  };

  const handleCall = () => {
    Swal.fire({
      title: 'Seller Contact',
      text: '+92 300 1234567',
      icon: 'success',
      confirmButtonColor: '#002f34'
    });
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-[#f8f9fb] min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumbs / Back */}
        <button onClick={() => navigate(-1)} className="flex items-center text-[#002f34] hover:text-khareedo-accent mb-8 font-black uppercase tracking-widest text-[10px] transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to browsing
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Media & Description */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden relative">
               {/* Image Gallery Main */}
               <div className="aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-black flex items-center justify-center group overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                     <button className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
                        <Heart className="h-5 w-5 text-gray-500" />
                     </button>
                     <button className="p-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition-transform">
                        <Share2 className="h-5 w-5 text-gray-500" />
                     </button>
                  </div>
               </div>

               {/* Meta Details Bar */}
               <div className="p-4 lg:p-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex items-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <Calendar className="h-4 w-4 mr-2 text-khareedo-accent" />
                        Added on {product.createdAt?.toDate ? product.createdAt.toDate().toLocaleDateString() : new Date(product.createdAt).toLocaleDateString()}
                     </div>
                  </div>
                  <span className="bg-gray-100 text-[#002f34] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{product.category}</span>
               </div>
            </div>

            {/* Description Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
               <h2 className="text-xs font-black text-[#002f34] uppercase tracking-[0.3em] mb-6 flex items-center">
                 <Info className="h-4 w-4 mr-2 text-khareedo-accent" />
                 Item Description
               </h2>
               <p className="text-gray-600 leading-relaxed whitespace-pre-wrap font-medium">
                 {product.description}
               </p>
               
               <div className="mt-10 pt-10 border-t border-gray-50 grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Condition</span>
                    <span className="text-sm font-bold text-[#002f34] uppercase">{product.condition}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Category</span>
                    <span className="text-sm font-bold text-[#002f34] uppercase">{product.category}</span>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Pricing & Seller */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Price Card */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 border-t-4 border-khareedo-accent">
               <div className="flex justify-between items-start mb-2">
                 <h1 className="text-4xl font-black text-[#002f34] tracking-tight">Rs {product.price.toLocaleString()}</h1>
               </div>
               <p className="text-gray-500 font-bold text-sm mb-6 pb-6 border-b border-gray-50 truncate">{product.title}</p>
               
               <div className="flex items-center text-gray-400 text-xs font-bold gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-khareedo-accent" />
                    {product.location}
                  </div>
               </div>
            </div>

            {/* Seller Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 rounded-full bg-[#002f34] text-white flex items-center justify-center text-xl font-black shadow-lg">
                    {product.sellerName.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-black text-[#002f34] text-lg leading-none mb-1">{product.sellerName}</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Member since 2022</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <button 
                    onClick={handleCall}
                    className="w-full khareedo-btn bg-[#002f34] text-white py-3 shadow-md"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    SHOW PHONE NUMBER
                  </button>
                  <button 
                    onClick={handleMessage}
                    className="w-full khareedo-btn-secondary py-3"
                  >
                    <MessageSquare className="h-5 w-5 mr-3" />
                    CHAT WITH SELLER
                  </button>
               </div>
            </div>

            {/* Add to Cart & Buy Now Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border-2 border-[#002f34] text-[#002f34] font-black rounded-lg hover:bg-gray-50 transition-all uppercase text-xs tracking-widest"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    ADD TO CART
                  </button>
                  <button 
                    onClick={() => navigate('/checkout')}
                    className="w-full flex items-center justify-center gap-3 py-3.5 khareedo-btn bg-gradient-to-r from-[#002f34] to-[#004f56] text-white font-black rounded-lg transition-all shadow-md uppercase text-xs tracking-widest"
                  >
                    BUY NOW <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-[#002f34] p-6 rounded-lg text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck className="h-16 w-16" />
               </div>
               <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-khareedo-accent">Safe Trading Tips</h4>
               <ul className="text-xs font-bold space-y-3 opacity-90 relative z-10">
                  <li className="flex gap-2"><span>•</span> Meet in a safe, public place</li>
                  <li className="flex gap-2"><span>•</span> Inspection before payment</li>
                  <li className="flex gap-2"><span>•</span> Avoid advance payments</li>
               </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
