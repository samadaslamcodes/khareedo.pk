import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
import { Users, Package, AlertTriangle, Trash2, CheckCircle, ShieldAlert, BarChart3, Search } from 'lucide-react';
import Swal from 'sweetalert2';

export default function AdminPanel() {
  const { currentUser } = useContext(AuthContext);
  const { products, deleteProduct, orders } = useContext(ProductContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('products');
  const [searchTerm, setSearchTerm] = useState('');

  if (!currentUser || currentUser.role !== 'admin') {
    navigate('/');
    return null;
  }

  const handleDelete = (id, type) => {
    Swal.fire({
      title: 'Admin Action: Delete?',
      text: `Are you sure you want to remove this ${type}? This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete Permanently'
    }).then((result) => {
      if (result.isConfirmed) {
        if (type === 'product') deleteProduct(id);
        Swal.fire('Removed!', `The ${type} has been deleted.`, 'success');
      }
    });
  };

  const filteredItems = (activeTab === 'products' ? products : orders).filter(item => {
    const searchString = activeTab === 'products' ? item.title : item.id;
    return searchString.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gray-900 text-white py-12 mb-8 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
           <div>
              <h1 className="text-4xl font-extrabold tracking-tighter flex items-center mb-1">
                 <ShieldAlert className="h-10 w-10 mr-4 text-red-500" />
                 KHAREEDO.PK CONTROL PANEL
              </h1>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">System Overview & Management</p>
           </div>
           
           <div className="flex gap-4">
              <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                 <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mb-1">Total Marketplace Revenue</p>
                 <p className="text-2xl font-extrabold text-green-400 tracking-tighter">Rs. {totalRevenue.toLocaleString()}</p>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                 <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mb-1">Platform Listings</p>
                 <p className="text-2xl font-extrabold text-amber-500 tracking-tighter">{products.length}</p>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Admin Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 bg-white p-2 rounded-2xl shadow-sm border inline-flex">
           <button 
            onClick={() => {setActiveTab('products'); setSearchTerm('');}}
            className={`flex items-center px-8 py-3 rounded-xl font-extrabold text-sm transition-all uppercase tracking-widest h-14 ${activeTab === 'products' ? 'bg-amber-500 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
           >
             <AlertTriangle className="h-5 w-5 mr-3" /> Listings
           </button>
           <button 
            onClick={() => {setActiveTab('orders'); setSearchTerm('');}}
            className={`flex items-center px-8 py-3 rounded-xl font-extrabold text-sm transition-all uppercase tracking-widest h-14 ${activeTab === 'orders' ? 'bg-amber-500 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}
           >
             <Package className="h-5 w-5 mr-3" /> All Orders
           </button>
        </div>

        {/* Search Bar for Admin */}
        <div className="mb-8 relative max-w-md">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
           <input 
            type="text" 
            placeholder={`Search ${activeTab}...`} 
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-sm focus:ring-amber-500 font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>

        {/* Dynamic Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
           <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b">
                   <th className="px-8 py-6 text-[10px] font-extrabold text-gray-500 uppercase tracking-widest">Details</th>
                   <th className="px-8 py-6 text-[10px] font-extrabold text-gray-500 uppercase tracking-widest">Status/User</th>
                   <th className="px-8 py-6 text-[10px] font-extrabold text-gray-500 uppercase tracking-widest">Value</th>
                   <th className="px-8 py-6 text-[10px] font-extrabold text-gray-500 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map(item => (
                  <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                       <div className="flex items-center gap-4">
                          {activeTab === 'products' && (
                            <img src={item.image} alt="" className="h-12 w-12 rounded-lg object-cover bg-gray-100 border shadow-sm" />
                          )}
                          <div className={activeTab === 'orders' ? 'w-full' : ''}>
                             <p className="font-extrabold text-gray-900 group-hover:text-amber-600 transition-colors leading-tight">
                                {activeTab === 'products' ? item.title : `Order #${item.id.slice(-8).toUpperCase()}`}
                             </p>
                             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-1 italic">
                                {activeTab === 'products' ? `${item.category} • ${item.condition}` : `${item.items.length} items • ${item.date.split('T')[0]}`}
                             </p>
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                        <div className="flex flex-col">
                           <span className="text-xs font-bold text-gray-900 italic flex items-center mb-1">
                              <Users className="h-3 w-3 mr-1 text-gray-400" /> {activeTab === 'products' ? item.sellerName : (item.shippingAddress?.fullName || 'Guest')}
                           </span>
                           <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full inline-block max-w-fit uppercase tracking-widest ${item.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-green-100 text-green-600'}`}>
                             {item.status || 'Active'}
                           </span>
                        </div>
                    </td>
                    <td className="px-8 py-6">
                       <p className="text-xl font-extrabold text-gray-900 tracking-tighter">Rs. {(activeTab === 'products' ? item.price : item.total).toLocaleString()}</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <div className="flex gap-2 justify-end">
                          {activeTab === 'products' ? (
                            <button 
                             onClick={() => handleDelete(item.id, 'product')}
                             className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white mb-1 transition-all border border-red-100 shadow-sm"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          ) : (
                            <button className="p-3 bg-blue-50 text-blue-500 rounded-xl hover:bg-blue-500 hover:text-white transition-all border border-blue-100 shadow-sm">
                               <CheckCircle className="h-5 w-5" />
                            </button>
                          )}
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
           
           {filteredItems.length === 0 && (
             <div className="p-20 text-center flex flex-col items-center">
                <BarChart3 className="h-16 w-16 text-gray-200 mb-4" />
                <h4 className="text-xl font-bold text-gray-400 italic">No matching records found in system.</h4>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
