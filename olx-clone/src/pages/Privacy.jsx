import React from 'react';
import { ShieldCheck, Lock, Eye, ArrowLeft, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link to="/" className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-[#002f34] mb-12 uppercase tracking-widest transition-colors group">
           <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
           Back to Marketplace
        </Link>
        
        <div className="bg-white rounded-[4px] shadow-[0_22px_70px_4px_rgba(0,47,52,0.08)] border border-gray-100 overflow-hidden animate-fade-in">
           
           {/* Header Section */}
           <div className="bg-[#002f34] p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <ShieldCheck className="h-48 w-48" />
              </div>
              <div className="relative z-10">
                 <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 uppercase">Privacy Protocol</h1>
                 <p className="text-[10px] font-black text-khareedo-accent uppercase tracking-[0.3em] mb-6 italic">Secure Data Governance Framework</p>
                 <div className="flex items-center gap-4 text-white/50 text-xs font-bold uppercase tracking-widest bg-white/5 py-4 px-6 rounded-2xl border border-white/10 w-fit">
                    <Lock className="h-4 w-4" /> 256-Bit SSL Active
                 </div>
              </div>
           </div>

           {/* Content Section */}
           <div className="p-10 lg:p-20 space-y-16">
              <section>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center text-khareedo-accent border border-gray-100">
                       <Eye className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-black text-[#002f34] tracking-tight uppercase">Data Sovereignty</h2>
                 </div>
                 <div className="space-y-6 text-gray-600 font-medium leading-relaxed ml-14">
                    <p>At Khareedo.pk, your data remains your personal property. We implement strict governance protocols to ensure that your legal identity, contact credentials, and transaction history are never exported to third-party entities without explicit cryptographic authorization.</p>
                    <p>Your primary data points are utilized solely to optimize your trading experience and calibrate our listing algorithms to your preference.</p>
                 </div>
              </section>

              <section>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center text-khareedo-accent border border-gray-100">
                       <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-black text-[#002f34] tracking-tight uppercase">Interaction Security</h2>
                 </div>
                 <div className="space-y-6 text-gray-600 font-medium leading-relaxed ml-14">
                    <p>All internal communications via our messaging terminal are end-to-end encrypted. We maintain zero-latency monitoring for deceptive patterns to protect our users from unauthorized interactions.</p>
                    <ul className="space-y-4">
                       {[
                         'Encrypted listing publication',
                         'Anonymized browser fingerprints',
                         'Verified seller verification tiers',
                         'Secure session management'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-4 text-xs font-black text-gray-400 uppercase tracking-widest">
                            <div className="h-1.5 w-1.5 rounded-full bg-khareedo-accent"></div>
                            {item}
                         </li>
                       ))}
                    </ul>
                 </div>
              </section>

              <div className="bg-gray-50 p-10 rounded-[4px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div>
                    <h4 className="font-black text-[#002f34] uppercase tracking-tight mb-1">Need clarification?</h4>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Contact our data protection office</p>
                 </div>
                 <Link to="/contact" className="khareedo-btn py-4 px-10 text-xs tracking-widest uppercase shadow-xl">
                    Inquire Now <ChevronRight className="h-4 w-4 ml-2" />
                 </Link>
              </div>
           </div>

           <div className="px-10 lg:px-20 py-8 bg-gray-50 border-t border-gray-100 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] italic">
              Last Revision: April 21, 2024 . Under Khareedo.pk Governance Board
           </div>

        </div>
      </div>
    </div>
  );
}
