import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ProductContext } from '../contexts/ProductContext';
import { CATEGORIES } from '../data/mockData';
import { Camera, MapPin, Tag, Info, UploadCloud, Loader2, CheckCircle, Smartphone, ShieldCheck } from 'lucide-react';
import Swal from 'sweetalert2';

export default function PostAd() {
  const { currentUser } = useContext(AuthContext);
  const { addProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (!currentUser) {
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'You need an account to post an ad.',
        confirmButtonColor: '#002f34'
      });
      navigate('/login');
    }
  }, [currentUser, navigate]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: 'used',
    location: '',
    imageFile: null,
    imagePreview: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ 
        ...formData, 
        imageFile: file,
        imagePreview: URL.createObjectURL(file) 
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category || !formData.imageFile) {
      return Swal.fire({ 
        icon: 'warning', 
        title: 'Action Required', 
        text: 'Please complete the form and upload a photo.',
        confirmButtonColor: '#002f34'
      });
    }

    setIsSubmitting(true);
    
    try {
      const reader = new FileReader();
      
      await new Promise((resolve, reject) => {
        reader.onload = async () => {
          try {
            const downloadURL = reader.result;
            setUploadProgress(100);

            await addProduct({
              title: formData.title,
              description: formData.description,
              price: parseFloat(formData.price),
              category: formData.category,
              condition: formData.condition,
              location: formData.location,
              image: downloadURL
            });
            resolve();
          } catch (err) {
            reject(err);
          }
        };
        reader.onerror = (error) => {
          console.error("FileReader error:", error);
          reject(error);
        };
        reader.readAsDataURL(formData.imageFile);
      });

      navigate('/home');

    } catch (error) {
       console.error("Submission error:", error);
       Swal.fire({ 
         icon: 'error', 
         title: 'Upload Failed', 
         text: 'There was an error processing your image or saving to database.',
         confirmButtonColor: '#002f34'
       });
       setIsSubmitting(false);
       setUploadProgress(0);
    }
  };

  return (
    <div className="bg-[#f8f9fb] min-h-screen py-12">
      <div className="min-h-screen flex items-center justify-center py-16 px-4 bg-[#f8f9fb]">
      
      <div className="max-w-4xl w-full bg-white rounded shadow-sm border border-gray-100 overflow-hidden animate-fade-in">
          
          <div className="bg-[#002f34] py-12 px-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-white uppercase tracking-tight flex items-center">
                <UploadCloud className="h-8 w-8 mr-4 text-khareedo-accent" />
                Post your ad
              </h1>
              <p className="text-gray-400 text-[10px] mt-2 font-black uppercase tracking-[0.2em]">Become part of Pakistan's elite marketplace</p>
            </div>
            <div className="hidden lg:flex items-center gap-3 bg-white/5 px-5 py-3 rounded-lg border border-white/10 backdrop-blur-md">
               <CheckCircle className="h-5 w-5 text-khareedo-accent" />
               <span className="text-white text-[10px] font-black uppercase tracking-widest leading-none">Verified Seller Channel</span>
            </div>
          </div>

          <form className="p-10 space-y-12" onSubmit={handleSubmit}>
            
            {/* Section: Details */}
            <section>
              <h3 className="text-[10px] font-black border-b border-gray-50 pb-4 mb-10 flex items-center text-gray-400 uppercase tracking-[0.3em]">
                <Info className="h-4 w-4 mr-2 text-khareedo-accent" />
                Primary Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Listing Title</label>
                  <input
                    name="title"
                    type="text"
                    required
                    placeholder="e.g. Samsung S23 Ultra - Phantom Black"
                    className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-5 font-bold text-[#002f34] transition-all outline-none shadow-sm placeholder:text-gray-300"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Item Description</label>
                  <textarea
                    name="description"
                    required
                    rows="6"
                    placeholder="Describe what you are selling. Include key features, condition, and reason for selling."
                    className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-5 font-bold text-[#002f34] transition-all outline-none shadow-sm placeholder:text-gray-300"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                   <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Select Category</label>
                   <div className="relative group">
                      <select 
                        name="category"
                        required
                        className="w-full border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white p-5 font-bold text-[#002f34] transition-all outline-none appearance-none cursor-pointer capitalize shadow-sm"
                        value={formData.category}
                        onChange={handleChange}
                      >
                        <option value="">Categories</option>
                        {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-gray-400">
                        <Tag className="h-5 w-5" />
                      </div>
                   </div>
                </div>
                
                <div>
                   <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Usage History</label>
                   <div className="flex flex-col sm:flex-row gap-4 sm:p-2 bg-gray-50 rounded-lg border-2 border-gray-50">
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, condition: 'new'})}
                        className={`flex-1 py-3.5 px-4 rounded-xl text-[10px] font-black transition-all tracking-widest uppercase ${formData.condition === 'new' ? 'bg-[#002f34] shadow-xl text-white' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        Brand New
                      </button>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, condition: 'used'})}
                        className={`flex-1 py-3.5 px-4 rounded-xl text-[10px] font-black transition-all tracking-widest uppercase ${formData.condition === 'used' ? 'bg-[#002f34] shadow-xl text-white' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        Pre-Owned
                      </button>
                   </div>
                </div>
              </div>
            </section>

            {/* Section: Pricing & Location */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-gray-50">
                <div>
                   <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Expected Price (PKR)</label>
                   <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                        <span className="text-[#002f34] font-black text-sm">Rs</span>
                      </div>
                      <input
                        name="price"
                        type="number"
                        required
                        className="block w-full pl-14 pr-6 py-5 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-black text-[#002f34] transition-all outline-none shadow-sm text-lg"
                        placeholder="00"
                        value={formData.price}
                        onChange={handleChange}
                      />
                   </div>
                </div>
                <div>
                   <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-widest">Your Location</label>
                   <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-khareedo-accent" />
                      </div>
                      <input
                        name="location"
                        type="text"
                        required
                        className="block w-full pl-14 pr-6 py-5 border-2 border-gray-50 bg-gray-50/50 rounded-lg focus:border-khareedo-accent focus:bg-white font-black text-[#002f34] transition-all outline-none shadow-sm text-lg"
                        placeholder="City, Area"
                        value={formData.location}
                        onChange={handleChange}
                      />
                   </div>
                </div>
            </section>

            {/* Section: Media */}
            <section className="pt-10 border-t border-gray-50">
               <h3 className="text-[10px] font-black flex items-center text-gray-400 uppercase tracking-[0.3em] mb-8">
                  <Camera className="h-4 w-4 mr-2 text-khareedo-accent" />
                  Media Gallery
               </h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  {formData.imagePreview ? (
                    <div className="relative h-48 w-full rounded-lg overflow-hidden border-4 border-khareedo-accent group shadow-2xl">
                       <img src={formData.imagePreview} alt="Preview" className="h-full w-full object-cover" />
                       <button 
                        type="button"
                        onClick={() => setFormData({...formData, imageFile: null, imagePreview: null})}
                        className="absolute top-4 right-4 bg-red-500 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg hover:scale-110"
                       >
                          <Tag className="h-4 w-4" />
                       </button>
                      {isSubmitting && (
                        <div className="absolute inset-0 bg-[#002f34]/80 flex flex-col items-center justify-center p-6 text-center">
                           <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mb-3">
                              <div className="bg-khareedo-accent h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                           </div>
                           <span className="text-[10px] text-white font-black tracking-widest">{Math.round(uploadProgress)}% UPLOADED</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <label className="h-48 w-full flex flex-col items-center justify-center border-4 border-dashed border-gray-100 rounded-lg cursor-pointer hover:border-khareedo-accent hover:bg-khareedo-accent/5 transition-all bg-gray-50/50 group relative overflow-hidden">
                      <Camera className="h-10 w-10 text-gray-200 group-hover:text-khareedo-accent mb-3 transition-colors" />
                      <span className="text-[10px] font-black text-gray-300 group-hover:text-[#002f34] uppercase tracking-widest">Main Photo</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                    </label>
                  )}
               </div>
            </section>

            <div className="pt-12 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-8">
               <div className="flex items-center gap-4 text-gray-400 text-[10px] font-black uppercase tracking-widest max-w-sm italic opacity-60">
                  <ShieldCheck className="h-6 w-6 text-khareedo-accent flex-shrink-0" />
                  Your listing will be verified by our safety team within 24 hours.
               </div>
               <button
                type="submit"
                disabled={isSubmitting}
                className="khareedo-btn w-full sm:w-auto px-16 py-6 text-sm shadow-[0_20px_40px_rgba(0,47,52,0.3)] bg-gradient-to-r from-[#002f34] to-[#004f56]"
               >
                 {isSubmitting ? (
                   <>
                     <Loader2 className="animate-spin mr-3 h-5 w-5" />
                     <span className="tracking-widest">PUBLISHING...</span>
                   </>
                 ) : (
                   <span className="tracking-widest">PUBLISH NOW</span>
                 )}
               </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
