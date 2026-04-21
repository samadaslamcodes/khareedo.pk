import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Globe, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      {/* Header */}
      <div className="bg-[#002f34] py-32 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-khareedo-accent opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
           <h1 className="text-5xl lg:text-7xl font-black tracking-tight uppercase leading-none mb-6">
              Connect With <br />
              <span className="text-khareedo-accent text-transparent bg-clip-text bg-gradient-to-r from-khareedo-accent to-white">The Elite</span>
           </h1>
           <p className="text-white/50 text-lg font-medium italic">Our global support team is ready to assist your premium trading experience.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Info Cards */}
           <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-10 rounded-[4px] shadow-xl border border-gray-50 group hover:bg-[#002f34] transition-all duration-500">
                 <div className="h-16 w-16 bg-[#002f34] rounded-[4px] flex items-center justify-center text-khareedo-accent mb-8 group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-xl">
                    <Mail className="h-7 w-7" />
                 </div>
                 <h3 className="text-[10px] font-black text-gray-400 group-hover:text-khareedo-accent uppercase tracking-[0.3em] mb-2 transition-colors">Electronic Mail</h3>
                 <p className="text-xl font-black text-[#002f34] group-hover:text-white transition-colors">support@khareedo.pk</p>
                 <p className="text-xs font-bold text-gray-400 group-hover:text-white/60 mt-4 uppercase tracking-widest transition-colors">Avg. Response Time: 45 Minutes</p>
              </div>

              <div className="bg-white p-10 rounded-[4px] shadow-xl border border-gray-50 group hover:bg-[#002f34] transition-all duration-500">
                 <div className="h-16 w-16 bg-[#002f34] rounded-[4px] flex items-center justify-center text-khareedo-accent mb-8 group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-xl">
                    <Phone className="h-7 w-7" />
                 </div>
                 <h3 className="text-[10px] font-black text-gray-400 group-hover:text-khareedo-accent uppercase tracking-[0.3em] mb-2 transition-colors">Priority Helpline</h3>
                 <p className="text-xl font-black text-[#002f34] group-hover:text-white transition-colors">+92 21 345-67890</p>
                 <p className="text-xs font-bold text-gray-400 group-hover:text-white/60 mt-4 uppercase tracking-widest transition-colors">Available 24/7/365</p>
              </div>

              <div className="bg-white p-10 rounded-[4px] shadow-xl border border-gray-50 group hover:bg-[#002f34] transition-all duration-500">
                 <div className="h-16 w-16 bg-[#002f34] rounded-[4px] flex items-center justify-center text-khareedo-accent mb-8 group-hover:bg-white/10 group-hover:scale-110 transition-all shadow-xl">
                    <MapPin className="h-7 w-7" />
                 </div>
                 <h3 className="text-[10px] font-black text-gray-400 group-hover:text-khareedo-accent uppercase tracking-[0.3em] mb-2 transition-colors">Headquarters</h3>
                 <p className="text-xl font-black text-[#002f34] group-hover:text-white transition-colors italic">DHA Phase 6, Karachi PA</p>
                 <p className="text-xs font-bold text-gray-400 group-hover:text-white/60 mt-4 uppercase tracking-widest transition-colors flex items-center">
                    <Globe className="h-4 w-4 mr-2" /> Global Operations
                 </p>
              </div>
           </div>

           {/* Contact Form */}
           <div className="lg:col-span-7">
              <div className="bg-white p-12 lg:p-16 rounded-[4px] shadow-2xl border border-gray-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <MessageSquare className="h-48 w-48 text-[#002f34]" />
                 </div>
                 
                 <div className="relative z-10">
                    <h2 className="text-3xl font-black text-[#002f34] tracking-tight uppercase mb-4">Send a Dispatch</h2>
                    <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-12">Submit your inquiry to our specialized departments</p>
                    
                    <form className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Legal Identity</label>
                             <input type="text" placeholder="Full Name" className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl p-5 outline-none focus:border-khareedo-accent focus:bg-white transition-all font-bold" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Terminal</label>
                             <input type="email" placeholder="name@company.com" className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl p-5 outline-none focus:border-khareedo-accent focus:bg-white transition-all font-bold" />
                          </div>
                       </div>
                       
                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Issue Category</label>
                          <select className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl p-5 outline-none focus:border-khareedo-accent focus:bg-white transition-all font-bold appearance-none cursor-pointer">
                             <option>Technical Assistance</option>
                             <option>Account Verification</option>
                             <option>Business Partnership</option>
                             <option>Safety Concerns</option>
                          </select>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Message Content</label>
                          <textarea rows="5" placeholder="Describe your requirement in detail..." className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-2xl p-5 outline-none focus:border-khareedo-accent focus:bg-white transition-all font-bold"></textarea>
                       </div>

                       <div className="pt-6">
                          <button type="button" className="khareedo-btn w-full py-6 text-sm uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(0,47,52,0.25)]">
                             Transmit Message <ArrowRight className="h-5 w-5 ml-4" />
                          </button>
                       </div>

                       <div className="flex items-center justify-center gap-2 pt-8 opacity-40">
                          <ShieldCheck className="h-5 w-5 text-khareedo-accent" />
                          <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">Encrypted Connection Verified</span>
                       </div>
                    </form>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
