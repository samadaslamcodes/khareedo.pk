import React from 'react';
import { ShieldCheck, Lock, Eye, AlertTriangle, CheckCircle, ArrowLeft, ShieldAlert, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Safety() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link to="/" className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-[#002f34] mb-12 uppercase tracking-widest group">
           <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
           Back to Terminal
        </Link>
        
        <div className="bg-white rounded-[4px] shadow-[0_22px_70px_4px_rgba(0,47,52,0.08)] border border-gray-100 overflow-hidden animate-fade-in">
           
           <div className="bg-[#002f34] p-16 text-white relative">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <ShieldAlert className="h-48 w-48" />
              </div>
              <div className="relative z-10">
                 <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 uppercase leading-none">Security <br /><span className="text-khareedo-accent">Operations</span></h1>
                 <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-8 italic">Trading Safety Standards & Protocols</p>
                 <div className="flex gap-4">
                    <div className="px-5 py-2 bg-khareedo-accent text-[#002f34] rounded-[4px] text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                       <UserCheck className="h-3.5 w-3.5" /> ID Verified Sellers
                    </div>
                    <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-[4px] text-[9px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                       <Lock className="h-3.5 w-3.5" /> Secured Terminal
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-10 lg:p-20 space-y-16">
              
              <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="bg-gray-50 p-10 rounded-[4px] border border-gray-100 group transition-all hover:bg-[#002f34]">
                    <div className="h-14 w-14 bg-[#002f34] rounded-[4px] flex items-center justify-center text-khareedo-accent mb-8 group-hover:bg-white/10 shadow-xl transition-all">
                       <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#002f34] group-hover:text-white uppercase tracking-tight mb-4 transition-colors">Safety for Buyers</h3>
                    <ul className="space-y-4">
                       {[
                         'Meet in public, daylight locations',
                         'Always verify items before payment',
                         'Never share OTP or secure codes',
                         'Utilize Khareedo verified sellers'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-[10px] font-black text-gray-400 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                            <div className="h-1.5 w-1.5 rounded-full bg-khareedo-accent"></div>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
                 <div className="bg-gray-50 p-10 rounded-[4px] border border-gray-100 group transition-all hover:bg-[#002f34]">
                    <div className="h-14 w-14 bg-[#002f34] rounded-[4px] flex items-center justify-center text-khareedo-accent mb-8 group-hover:bg-white/10 shadow-xl transition-all">
                       <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#002f34] group-hover:text-white uppercase tracking-tight mb-4 transition-colors">Safety for Sellers</h3>
                    <ul className="space-y-4">
                       {[
                         'Avoid digital payments before delivery',
                         'Record serial numbers of high-value items',
                         'Wait for payment clearance before release',
                         'Process inquiries through internal terminal'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-3 text-[10px] font-black text-gray-400 group-hover:text-white/60 uppercase tracking-widest transition-colors">
                            <div className="h-1.5 w-1.5 rounded-full bg-khareedo-accent"></div>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </section>

              <div className="bg-[#002f34] p-12 lg:p-16 rounded-[4px] text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <ShieldCheck className="h-40 w-40 text-white" />
                 </div>
                 <div className="relative z-10 text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-black tracking-tight uppercase mb-4">Fraud Surveillance Active</h2>
                    <p className="text-white/50 font-medium text-sm leading-relaxed mb-10 italic">Our automated security protocols monitor every interaction within the Khareedo.pk network to protect you from unauthorized trading activities.</p>
                    <button className="khareedo-btn px-12 py-5 text-[10px] tracking-widest bg-white text-[#002f34] hover:bg-khareedo-accent hover:text-[#002f34]">
                       REPORT SUSPICIOUS TERMINAL
                    </button>
                 </div>
              </div>
           </div>

           <div className="px-10 lg:px-20 py-8 bg-gray-50 border-t border-gray-100 text-[9px] font-black text-gray-400 uppercase tracking-widest italic flex items-center gap-4">
              <ShieldCheck className="h-4 w-4 text-khareedo-accent" />
              Khareedo Group Security Division . All interactions logged for protocol audit
           </div>
        </div>
      </div>
    </div>
  );
}
