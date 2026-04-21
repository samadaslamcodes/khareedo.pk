import React from 'react';
import { FileText, ShieldCheck, Gavel, Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen py-12 lg:py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        
        <Link to="/" className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-[#002f34] mb-12 uppercase tracking-widest transition-colors group">
           <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
           Exit Protocol
        </Link>
        
        <div className="bg-white rounded-[4px] shadow-[0_22px_70px_4px_rgba(0,47,52,0.08)] border border-gray-100 overflow-hidden animate-fade-in">
           
           <div className="bg-[#002f34] p-12 lg:p-16 rounded-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <Scale className="h-48 w-48" />
              </div>
              <div className="relative z-10">
                 <h1 className="text-4xl lg:text-5xl font-black tracking-tight mb-4 uppercase leading-none">Terms of <br /><span className="text-khareedo-accent">Utilization</span></h1>
                 <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-8 italic">Legal Framework v2.4.0</p>
                 <div className="flex gap-4">
                    <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-khareedo-accent flex items-center gap-2">
                       <Gavel className="h-3.5 w-3.5" /> Enforced Strictly
                    </div>
                    <div className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-[#00d5f5] flex items-center gap-2">
                       <ShieldCheck className="h-3.5 w-3.5" /> Verified Only
                    </div>
                 </div>
              </div>
           </div>

           <div className="p-10 lg:p-20">
              <div className="prose prose-slate max-w-none">
                 <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center text-khareedo-accent border border-gray-100">
                          <FileText className="h-5 w-5" />
                       </div>
                       <h2 className="text-xl font-black text-[#002f34] tracking-tight uppercase">Trading Covenant</h2>
                    </div>
                    <div className="space-y-6 text-gray-600 font-medium leading-relaxed ml-14">
                       <p>By accessing the Khareedo.pk elite network, you formally agree to the standards of transparency and integrity outlined in this protocol. Khareedo.pk provides a neutral interface for peer-to-peer commerce and does not assume responsibility for the physical verification of goods beyond our premium verified tier.</p>
                    </div>
                 </section>

                 <section className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center text-khareedo-accent border border-gray-100">
                          <Gavel className="h-5 w-5" />
                       </div>
                       <h2 className="text-xl font-black text-[#002f34] tracking-tight uppercase">Seller Integrity</h2>
                    </div>
                    <div className="space-y-6 text-gray-600 font-medium leading-relaxed ml-14">
                       <p>Listing publications must adhere to the following standards:</p>
                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            'High-resolution original media',
                            'Accurate technical specifications',
                            'Market-verified pricing',
                            'Prompt response to inquiries',
                            'Zero-tolerance for replicas',
                            'Verified physical location'
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-[10px] font-black text-[#002f34] uppercase tracking-widest">
                               <ShieldCheck className="h-4 w-4 text-khareedo-accent" />
                               {item}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </section>

                 <section>
                    <div className="flex items-center gap-4 mb-8">
                       <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center text-khareedo-accent border border-gray-100">
                          <Scale className="h-5 w-5" />
                       </div>
                       <h2 className="text-xl font-black text-[#002f34] tracking-tight uppercase">Account Governance</h2>
                    </div>
                    <div className="space-y-6 text-gray-600 font-medium leading-relaxed ml-14">
                       <p>Khareedo.pk reserves the right to terminate access to any terminal found in violation of our core trading philosophy. Deceptive interaction patterns, unauthorized harvesting of user credentials, or systematic manipulation of listing rankings will result in immediate and permanent exclusion from the network.</p>
                    </div>
                 </section>
              </div>
           </div>

           <div className="px-10 lg:px-20 py-10 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic">Document Authenticity Verified . Board of Khareedo</p>
              <Link to="/contact" className="text-[10px] font-black text-khareedo-accent hover:underline uppercase tracking-tighter">Submit Legal Dispute</Link>
           </div>
        </div>
      </div>
    </div>
  );
}
