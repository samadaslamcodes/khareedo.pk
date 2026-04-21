import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { Trash2, ShoppingBag, ArrowLeft, CreditCard, ShieldCheck } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart } = useContext(ProductContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="bg-white p-16 rounded-[2.5rem] shadow-[0_22px_70px_4px_rgba(0,47,52,0.05)] border border-gray-100 inline-block animate-fade-in">
          <div className="bg-gray-50 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="h-12 w-12 text-gray-200" />
          </div>
          <h2 className="text-3xl font-black text-[#002f34] mb-4 tracking-tight">Your cart is feeling light</h2>
          <p className="text-gray-400 mb-10 max-w-sm mx-auto font-medium">Discover millions of incredible deals and add some life to your cart today.</p>
          <Link to="/" className="khareedo-btn text-xs px-10 py-5 uppercase tracking-widest bg-[#002f34]">
             Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
           <div>
              <h1 className="text-4xl font-black text-[#002f34] tracking-tight">Shopping Cart</h1>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2">You have {cart.length} verified items</p>
           </div>
           <button onClick={() => navigate('/home')} className="hidden sm:flex items-center text-[10px] font-black text-[#002f34] uppercase tracking-widest hover:text-khareedo-accent transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Keep Browsing
           </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-8 group animate-fade-in relative overflow-hidden">
                <div className="h-32 w-32 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 border border-gray-50">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                     <div>
                        <Link to={`/product/${item.id}`} className="text-lg font-black text-[#002f34] hover:text-khareedo-accent transition-colors line-clamp-1">{item.title}</Link>
                        <span className="inline-block mt-1 text-[9px] font-black bg-gray-100 text-gray-400 px-2 py-0.5 rounded uppercase tracking-widest">{item.category}</span>
                     </div>
                     <p className="text-2xl font-black text-[#002f34] tracking-tight">Rs {item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-50">
                     <div className="flex items-center text-[10px] text-green-600 font-black uppercase tracking-widest">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Buyer Protection Applied
                     </div>
                     <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-all flex items-center text-[10px] font-black uppercase tracking-widest"
                    >
                      <Trash2 className="h-4 w-4 mr-2" /> REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white p-10 rounded-[4px] shadow-[0_22px_70px_4px_rgba(0,47,52,0.05)] border border-gray-100 sticky top-28 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <ShoppingBag className="h-24 w-24 text-[#002f34]" />
              </div>
              
              <h2 className="text-xl font-black text-[#002f34] mb-10 tracking-tight uppercase tracking-[0.1em]">Total Summary</h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <span>Cart Items ({cart.length})</span>
                  <span className="text-[#002f34]">Rs {total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <span>Delivery Charge</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
                  <span>Protection Tax</span>
                  <span className="text-[#002f34]">Rs 0</span>
                </div>
                
                <div className="pt-8 border-t border-gray-100 flex justify-between items-end">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Grand Total</span>
                  <span className="text-4xl font-black text-[#002f34] tracking-tighter italic">Rs {total.toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="khareedo-btn w-full py-6 shadow-[0_20px_40px_rgba(0,47,52,0.2)] bg-gradient-to-r from-[#002f34] to-[#004f56]"
              >
                <span className="text-xs uppercase font-black tracking-[0.2em]">Secure Checkout</span>
              </button>
              
              <div className="mt-8 flex items-center justify-center gap-2 text-[9px] font-black text-gray-300 uppercase tracking-widest">
                 <ShieldCheck className="h-4 w-4" />
                 Encrypted Transaction
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
