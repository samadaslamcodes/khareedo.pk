import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { CreditCard, Truck, MapPin, CheckCircle, Loader2, ShieldCheck, ChevronRight } from 'lucide-react';
import Swal from 'sweetalert2';

export default function Checkout() {
  const { cart, placeOrder } = useContext(ProductContext);
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [address, setAddress] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: ''
  });

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API delay
    setTimeout(() => {
      placeOrder({
        shippingAddress: address,
        paymentMethod: 'Cash on Delivery'
      });
      setIsProcessing(false);
      navigate('/dashboard');
    }, 2000);
  };

  return (
    <div className="bg-[#f8f9fb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row items-center gap-4 mb-8 lg:mb-12 animate-fade-in text-center md:text-left">
           <div className="h-12 w-12 bg-[#002f34] rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0">
              <ShieldCheck className="h-6 w-6" />
           </div>
           <div>
              <h1 className="text-2xl lg:text-3xl font-black text-[#002f34] tracking-tight">Secure Checkout</h1>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-1 italic">Verified payment channel active</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-7 space-y-10">
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-10">
              
              {/* Delivery Details */}
              <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-slide-up">
                 <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 flex items-center">
                    <Truck className="h-4 w-4 mr-3 text-khareedo-accent" />
                    Shipping Protocol
                 </h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Recipient Name"
                        className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-4 font-bold text-[#002f34] transition-all outline-none shadow-sm"
                        value={address.fullName}
                        onChange={(e) => setAddress({...address, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="03xx xxxxxxx"
                        className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-4 font-bold text-[#002f34] transition-all outline-none shadow-sm"
                        value={address.phone}
                        onChange={(e) => setAddress({...address, phone: e.target.value})}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Delivery Address</label>
                      <textarea 
                        required
                        rows="3"
                        placeholder="House no, Street, Phase etc."
                        className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-4 font-bold text-[#002f34] transition-all outline-none shadow-sm"
                        value={address.address}
                        onChange={(e) => setAddress({...address, address: e.target.value})}
                      ></textarea>
                    </div>
                     <div>
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">City</label>
                      <div className="relative group">
                         <input 
                           required
                           type="text" 
                           placeholder="Current City"
                           className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-4 font-bold text-[#002f34] transition-all outline-none shadow-sm"
                           value={address.city}
                           onChange={(e) => setAddress({...address, city: e.target.value})}
                         />
                         <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-300">
                           <MapPin className="h-4 w-4" />
                         </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Postal Code</label>
                      <input 
                        type="text" 
                        placeholder="Optional"
                        className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-4 font-bold text-[#002f34] transition-all outline-none shadow-sm"
                      />
                    </div>
                 </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-slide-up">
                 <h3 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em] mb-8 flex items-center">
                    <CreditCard className="h-4 w-4 mr-3 text-khareedo-accent" />
                    Settlement Method
                 </h3>
                 <div className="space-y-4">
                    <label className="flex items-center p-5 border-2 border-[#002f34] bg-[#002f34]/5 rounded-xl cursor-pointer transition-all duration-300 group">
                      <div className="h-6 w-6 border-4 border-[#002f34] rounded-full flex items-center justify-center p-1">
                         <div className="h-full w-full bg-[#002f34] rounded-full"></div>
                      </div>
                      <div className="ml-6 flex-grow">
                         <span className="block text-sm font-black text-[#002f34] uppercase tracking-widest transition-colors mb-1">Cash on Delivery</span>
                         <span className="text-[10px] text-gray-400 font-bold italic tracking-tight opacity-70">Settle the invoice upon physical verification and delivery.</span>
                      </div>
                    </label>
                    <label className="flex items-center p-6 border-2 border-gray-50 bg-gray-50/50 rounded-3xl opacity-40 cursor-not-allowed">
                      <div className="h-6 w-6 border-4 border-gray-200 rounded-full"></div>
                      <div className="ml-6">
                         <span className="block text-sm font-black text-gray-300 uppercase tracking-widest mb-1">Digital Settlement</span>
                         <span className="text-[10px] text-gray-300 font-bold italic tracking-tight uppercase">Encryption channel offline for updates.</span>
                      </div>
                    </label>
                 </div>
              </section>
            </form>
          </div>

          <div className="lg:col-span-5">
             <div className="bg-[#002f34] text-white p-6 lg:p-8 rounded-lg shadow-xl sticky top-28 overflow-hidden animate-slide-up">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                   <ShieldCheck className="h-40 w-40 text-white" />
                </div>
                
                <h2 className="text-lg font-black mb-6 lg:mb-8 uppercase tracking-[0.2em] border-b border-white/10 pb-6 italic">Final Statement</h2>
                
                <div className="space-y-6 max-h-[350px] overflow-y-auto mb-10 pr-4 custom-scrollbar">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5 transition-all hover:bg-white/10">
                      <div className="flex items-center gap-4">
                         <img src={item.image} alt={item.title} className="h-12 w-12 rounded-xl object-cover shadow-lg" />
                         <div className="max-w-[180px]">
                            <span className="block text-[11px] font-black tracking-tight line-clamp-1 uppercase tracking-widest">{item.title}</span>
                            <span className="text-[9px] font-black text-khareedo-accent uppercase tracking-[0.1em]">{item.category}</span>
                         </div>
                      </div>
                      <div className="text-right">
                         <span className="block text-xs font-black tracking-tighter italic">Rs {item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-5 pt-8 border-t border-white/10">
                   <div className="flex justify-between text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                      <span>Items Total</span>
                      <span className="text-white">Rs {total.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                      <span>Carrier Fees</span>
                      <span className="text-green-400 italic">WAIVED</span>
                   </div>
                   <div className="flex justify-between items-end pt-6">
                      <div className="text-[10px] font-black text-[#00d5f5] uppercase tracking-[0.3em] mb-1 italic">Amount to Pay</div>
                      <div className="text-4xl font-black tracking-tighter italic text-white flex items-baseline leading-none">
                         <span className="text-sm mr-2 opacity-40 uppercase tracking-widest not-italic">Rs</span>
                         {total.toLocaleString()}
                      </div>
                   </div>
                </div>

                <button 
                  form="checkout-form"
                  disabled={isProcessing}
                  className="w-full mt-8 lg:mt-10 khareedo-btn py-4 shadow-lg bg-gradient-to-r from-white/10 to-white/20 border border-white/20 hover:bg-white hover:text-[#002f34] transition-all duration-500"
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                       <Loader2 className="h-5 w-5 animate-spin mr-3" />
                       <span className="uppercase font-black text-sm tracking-[0.2em]">Processing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                       <span className="uppercase font-black text-sm tracking-[0.2em]">Finalize Purchase</span>
                       <ChevronRight className="h-4 w-4 ml-3" />
                    </div>
                  )}
                </button>
                
                <div className="mt-10 flex items-center justify-center gap-2 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
                   <ShieldCheck className="h-4 w-4 text-khareedo-accent" />
                   End-to-End Encrypted Settlement
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
