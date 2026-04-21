import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ProductContext } from '../contexts/ProductContext';
import { Link, useNavigate } from 'react-router-dom';
import { Package, LayoutDashboard, Tag, Trash2, Clock, MapPin, Eye, ShoppingBag, User, ShieldCheck, ChevronRight } from 'lucide-react';
import Swal from 'sweetalert2';

export default function UserDashboard() {
  const { currentUser } = useContext(AuthContext);
  const { products, deleteProduct, orders } = useContext(ProductContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ads');

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  const myAds = products.filter(p => p.userId === currentUser.uid);
  const myOrders = orders.filter(o => o.userId === currentUser.uid);

  const handleDeleteAd = (id) => {
    Swal.fire({
      title: 'Delete this listing?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#002f34',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your ad has been successfully removed.',
          icon: 'success',
          confirmButtonColor: '#002f34'
        });
      }
    });
  };

  return (
    <div className="bg-[#f8f9fb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Summary */}
        <div className="bg-[#002f34] rounded-[2rem] p-8 sm:p-12 mb-12 text-white relative overflow-hidden shadow-2xl shadow-[#002f34]/20 animate-fade-in">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-3xl font-black border-4 border-white/20 shadow-xl">
                 {currentUser.name.charAt(0).toUpperCase()}
              </div>
              <div className="text-center md:text-left flex-grow">
                 <h1 className="text-3xl font-black tracking-tight mb-2 uppercase">{currentUser.name}</h1>
                 <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <span className="flex items-center text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                       <ShieldCheck className="h-3 w-3 mr-2 text-khareedo-accent" /> Verified Member
                    </span>
                    <span className="flex items-center text-[10px] font-black uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10 opacity-70">
                       {currentUser.email}
                    </span>
                 </div>
              </div>
              <div className="flex gap-4">
                  <div className="text-center px-6 py-3 bg-white/5 rounded-2xl border border-white/10">
                     <p className="text-2xl font-black tracking-tighter">{myAds.length}</p>
                     <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Active Ads</p>
                  </div>
                  <div className="text-center px-6 py-3 bg-white/10 rounded-2xl border border-khareedo-accent/20">
                     <p className="text-2xl font-black tracking-tighter text-khareedo-accent">{myOrders.length}</p>
                     <p className="text-[9px] font-black uppercase tracking-widest text-khareedo-accent">Orders</p>
                  </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-72 flex-shrink-0 sticky top-28">
             <div className="bg-white rounded-3xl shadow-[0_22px_70px_4px_rgba(0,47,52,0.05)] border border-gray-100 p-6">
                <nav className="space-y-3">
                   <button 
                     onClick={() => setActiveTab('ads')}
                     className={`w-full flex items-center justify-between p-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'ads' ? 'bg-[#002f34] text-white shadow-xl shadow-[#002f34]/20' : 'text-gray-400 hover:bg-gray-50'}`}
                   >
                     <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-3" /> Managed Ads
                     </div>
                     {activeTab === 'ads' && <ChevronRight className="h-4 w-4" />}
                   </button>
                   <button 
                     onClick={() => setActiveTab('orders')}
                     className={`w-full flex items-center justify-between p-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === 'orders' ? 'bg-[#002f34] text-white shadow-xl shadow-[#002f34]/20' : 'text-gray-400 hover:bg-gray-50'}`}
                   >
                     <div className="flex items-center">
                        <ShoppingBag className="h-4 w-4 mr-3" /> Transaction History
                     </div>
                     {activeTab === 'orders' && <ChevronRight className="h-4 w-4" />}
                   </button>
                   
                   <div className="pt-6 mt-6 border-t border-gray-50">
                      <Link to="/post-ad" className="khareedo-btn w-full py-4 text-[10px] tracking-widest bg-gradient-to-r from-[#002f34] to-[#004f56]">
                         <Tag className="h-4 w-4 mr-2" /> SELL ANYTHING
                      </Link>
                   </div>
                </nav>
             </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            {activeTab === 'ads' ? (
              <div className="animate-fade-in">
                <div className="mb-8 flex justify-between items-end border-b border-gray-200 pb-6">
                   <div>
                      <h2 className="text-2xl font-black text-[#002f34] tracking-tight">Manage Active Listings</h2>
                      <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-[0.2em] italic">Keep your store details fresh</p>
                   </div>
                </div>
                
                {myAds.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {myAds.map(ad => (
                      <div key={ad.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                        <div className="h-48 relative overflow-hidden bg-gray-50">
                          <img src={ad.image} alt={ad.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute top-4 left-4 bg-[#002f34]/80 backdrop-blur-sm text-white text-[9px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-widest">{ad.category}</div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-bold text-[#002f34] line-clamp-1 mb-2 tracking-tight">{ad.title}</h4>
                          <p className="text-[#002f34] font-black text-2xl mb-6 flex items-baseline">
                             <span className="text-xs mr-1 opacity-40 uppercase tracking-widest font-black">Rs</span>
                             {ad.price.toLocaleString()}
                          </p>
                          
                          <div className="flex gap-3">
                             <Link to={`/product/${ad.id}`} className="flex-grow bg-[#002f34] text-white py-3 rounded-xl flex items-center justify-center text-[10px] font-black uppercase tracking-widest hover:bg-[#003f44] transition-all hover:scale-[1.02] shadow-lg shadow-[#002f34]/10">
                                <Eye className="h-4 w-4 mr-2" /> PREVIEW
                             </Link>
                             <button 
                              onClick={() => handleDeleteAd(ad.id)}
                              className="bg-red-50 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm flex items-center justify-center"
                             >
                               <Trash2 className="h-4 w-4" />
                             </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-20 rounded-[2.5rem] shadow-sm border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
                     <div className="bg-gray-50 h-24 w-24 rounded-full flex items-center justify-center mb-8">
                        <Tag className="h-12 w-12 text-gray-200" />
                     </div>
                     <h4 className="text-2xl font-black text-[#002f34] mb-4 tracking-tight">Your store is empty</h4>
                     <p className="text-gray-400 mb-10 max-w-sm mx-auto font-medium">Turn your unused items into cash. Thousands of buyers are waiting!</p>
                     <Link to="/post-ad" className="khareedo-btn text-[10px] tracking-widest px-12 py-5 bg-[#002f34]">Post Your First Ad</Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="animate-fade-in">
                <div className="mb-8 flex justify-between items-end border-b border-gray-200 pb-6">
                   <div>
                      <h2 className="text-2xl font-black text-[#002f34] tracking-tight">Your Transaction Records</h2>
                      <p className="text-[10px] font-bold text-gray-400 mt-2 uppercase tracking-[0.2em] italic">Full history of your premium purchases</p>
                   </div>
                </div>

                {myOrders.length > 0 ? (
                  <div className="space-y-6">
                    {myOrders.map(order => (
                      <div key={order.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group hover:shadow-xl transition-all duration-500">
                         <div className="flex items-center gap-8">
                            <div className="h-20 w-20 bg-[#f8f9fb] rounded-2xl flex items-center justify-center text-[#002f34] border border-gray-100 group-hover:scale-105 transition-transform">
                               <ShoppingBag className="h-10 w-10 opacity-20" />
                            </div>
                            <div>
                              <div className="flex items-center gap-4 mb-2">
                                 <h4 className="font-black text-[#002f34] text-lg tracking-tight uppercase">ORD-{order.id.slice(-6).toUpperCase()}</h4>
                                 <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${order.status === 'Pending' ? 'bg-[#002f34]/10 text-[#002f34]' : 'bg-green-100 text-green-600'}`}>
                                    {order.status}
                                 </span>
                              </div>
                              <div className="flex items-center text-[10px] font-black text-gray-400 uppercase tracking-widest opacity-60">
                                 <Clock className="h-4 w-4 mr-2" />
                                 <span>Processed: {new Date(order.createdAt).toLocaleDateString()}</span>
                              </div>
                              <p className="text-[10px] font-black text-khareedo-accent mt-3 uppercase tracking-widest italic">{order.items.length} items verified in delivery</p>
                            </div>
                         </div>
                         
                         <div className="flex items-center gap-10 w-full md:w-auto border-t md:border-t-0 pt-8 md:pt-0">
                            <div className="text-right">
                               <p className="text-[9px] text-gray-300 font-black uppercase tracking-[0.2em] mb-1">Settlement</p>
                               <p className="text-3xl font-black text-[#002f34] tracking-tighter italic">Rs {order.total.toLocaleString()}</p>
                            </div>
                            <button className="bg-gray-50 text-gray-300 p-4 rounded-2xl hover:bg-[#002f34] hover:text-white transition-all shadow-sm">
                               <Eye className="h-5 w-5" />
                            </button>
                         </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white p-20 rounded-[2.5rem] shadow-sm border border-dashed border-gray-200 flex flex-col items-center justify-center text-center">
                     <div className="bg-gray-50 h-24 w-24 rounded-full flex items-center justify-center mb-8">
                        <ShoppingBag className="h-12 w-12 text-gray-200" />
                     </div>
                     <h4 className="text-2xl font-black text-[#002f34] mb-2 tracking-tight">No purchases recorded</h4>
                     <p className="text-gray-400 mb-8 max-w-sm mx-auto font-medium">You haven't bought anything premium yet. Your favorites are waiting!</p>
                     <Link to="/home" className="khareedo-btn text-[10px] tracking-widest px-12 py-5 bg-[#002f34]">Start Shopping</Link>
                  </div>
                )}
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
