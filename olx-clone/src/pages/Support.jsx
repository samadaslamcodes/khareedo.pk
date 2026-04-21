import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ShieldCheck, Mail, Phone, MapPin, Globe, 
  MessageSquare, Users, Briefcase, FileText, 
  ChevronRight, ArrowLeft 
} from 'lucide-react';

const CONTENT = {
  'about': {
    title: 'About Khareedo Group',
    subtitle: 'Redefining the Classifieds Landscape in Pakistan',
    body: (
      <div className="space-y-8">
        <p className="text-gray-600 leading-relaxed font-medium">
          Khareedo.pk is Pakistan's premier online marketplace, dedicated to connecting millions of buyers and sellers across the nation. Founded on the principles of trust, transparency, and technological excellence, we provide a high-performance platform for trading everything from real estate to mobile phones.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all hover:shadow-xl group">
              <Users className="h-10 w-10 text-khareedo-accent mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-black text-[#002f34] mb-3 uppercase tracking-tight">Our Community</h4>
              <p className="text-xs text-gray-400 font-bold leading-relaxed uppercase tracking-widest">Empowering over 1.2 million monthly active users to trade with confidence.</p>
           </div>
           <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 transition-all hover:shadow-xl group">
              <Briefcase className="h-10 w-10 text-khareedo-accent mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-black text-[#002f34] mb-3 uppercase tracking-tight">Enterprise Solutions</h4>
              <p className="text-xs text-gray-400 font-bold leading-relaxed uppercase tracking-widest">Providing robust tools for businesses to scale their reaching across Pakistan.</p>
           </div>
        </div>
      </div>
    )
  },
  'contact': {
    title: 'Contact Our Support',
    subtitle: 'We are here to assist your elite trading journey',
    body: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-[#002f34] rounded-2xl flex items-center justify-center text-[#00d5f5] shadow-xl">
                 <Mail className="h-6 w-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Official Support Email</p>
                 <p className="text-lg font-black text-[#002f34]">support@khareedo.pk</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-[#002f34] rounded-[4px] flex items-center justify-center text-[#00d5f5] shadow-xl">
                 <Phone className="h-6 w-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Priority Helpline</p>
                 <p className="text-lg font-black text-[#002f34]">+92 21 111-KHAREEDO</p>
              </div>
           </div>
           <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-[#002f34] rounded-[4px] flex items-center justify-center text-[#00d5f5] shadow-xl">
                 <MapPin className="h-6 w-6" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Headquarters</p>
                 <p className="text-lg font-black text-[#002f34]">Phase 6, DHA Karachi, Pakistan</p>
              </div>
           </div>
        </div>
        <form className="bg-gray-50 p-10 rounded-[4px] border border-gray-100 space-y-6">
           <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Your Name</label>
              <input type="text" className="w-full bg-white border-2 border-gray-100 rounded-[4px] p-4 font-bold outline-none focus:border-khareedo-accent" />
           </div>
           <div>
              <label className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Message Segment</label>
              <textarea rows="4" className="w-full bg-white border-2 border-gray-100 rounded-[4px] p-4 font-bold outline-none focus:border-khareedo-accent"></textarea>
           </div>
           <button type="button" className="khareedo-btn w-full py-4 text-xs tracking-widest uppercase">Dispatch Inquiry</button>
        </form>
      </div>
    )
  },
  'privacy': {
    title: 'Privacy Protocol',
    subtitle: 'Data Security and User Transparency',
    body: (
      <div className="space-y-8 font-medium text-gray-600">
        <section>
          <h4 className="text-[#002f34] font-black uppercase tracking-widest text-sm mb-4">1. Data Sovereignty</h4>
          <p className="leading-relaxed">At Khareedo.pk, your data remains your personal property. We implement 256-bit SSL encryption across our entire network to ensure your transaction history and personal communications remain strictly confidential.</p>
        </section>
        <section>
          <h4 className="text-[#002f34] font-black uppercase tracking-widest text-sm mb-4">2. Interaction Usage</h4>
          <p className="leading-relaxed">We utilize data points solely to optimize your trading experience and filter relevant listings. We never export your credentials to third-party marketing entities without explicit credential verification.</p>
        </section>
      </div>
    )
  },
  'terms': {
    title: 'Terms of Utilization',
    subtitle: 'Elite Trading Standards and Guidelines',
    body: (
      <div className="space-y-8 font-medium text-gray-600">
        <section>
          <h4 className="text-[#002f34] font-black uppercase tracking-widest text-sm mb-4">Agreement of Use</h4>
          <p className="leading-relaxed">By accessing the Khareedo.pk network, you agree to uphold our community standards of honesty and professional conduct. Duplicate listings, deceptive pricing, or unauthorized media usage represent a violation of our protocol and will result in immediate account termination.</p>
        </section>
        <section>
          <h4 className="text-[#002f34] font-black uppercase tracking-widest text-sm mb-4">Seller Compliance</h4>
          <p className="leading-relaxed">All verified sellers are required to provide accurate descriptions and high-resolution media for every advertisement. Our safety team audits all premium listings within 24 hours of publication.</p>
        </section>
      </div>
    )
  }
};

export default function Support() {
  const { type } = useParams();
  const content = CONTENT[type] || CONTENT['about'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  return (
    <div className="bg-[#f8f9fb] min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <Link to="/" className="inline-flex items-center text-[10px] font-black text-gray-400 hover:text-[#002f34] mb-12 uppercase tracking-widest group">
           <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
           Exit Support Portal
        </Link>

        <div className="bg-white rounded-2xl shadow-[0_22px_70px_4px_rgba(0,47,52,0.08)] border border-gray-100 overflow-hidden animate-fade-in">
           
           <div className="bg-[#002f34] p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                 <ShieldCheck className="h-48 w-48" />
              </div>
              <div className="relative z-10">
                 <h1 className="text-4xl font-black tracking-tight mb-4 uppercase leading-none">
                    {content.title}
                 </h1>
                 <p className="text-[10px] font-black text-khareedo-accent uppercase tracking-[0.3em] mb-4 italic">Official Internal Document</p>
                 <p className="text-lg text-white/60 font-medium max-w-lg">{content.subtitle}</p>
              </div>
           </div>

           <div className="p-16">
              {content.body}
           </div>

           <div className="px-16 py-10 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest italic flex items-center gap-2">
                 <ShieldCheck className="h-4 w-4 text-khareedo-accent" />
                 Last Modified: April 2024 . Khareedo Group Standards Office
              </p>
              <div className="flex gap-6">
                 {Object.keys(CONTENT).map(key => (
                   <Link key={key} to={`/support/${key}`} className={`text-[10px] font-black uppercase tracking-widest hover:text-[#002f34] transition-colors ${type === key ? 'text-khareedo-accent' : 'text-gray-300'}`}>
                      {key}
                   </Link>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </div>
  );
}
