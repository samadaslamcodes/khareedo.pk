import React from 'react';
import { Target, Users, ShieldCheck, Zap, Globe, Award, Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();
  
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#002f34] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-khareedo-accent/5 rotate-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-md text-khareedo-accent px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-white/10">
              <ShieldCheck className="h-4 w-4" /> Established 2006
           </div>
           <h1 className="text-5xl lg:text-8xl font-black text-white mb-6 tracking-tight uppercase leading-none">
             Future of <br />
             <span className="text-khareedo-accent">Classifieds</span>
           </h1>
           <p className="text-lg lg:text-xl text-white/50 max-w-2xl mx-auto font-medium italic">
             Khareedo.pk is Pakistan's largest and most trusted marketplace, where millions connect to trade with purpose.
           </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '1.2M', label: 'Monthly Users', icon: Users },
              { val: '500K', label: 'Active Listings', icon: Target },
              { val: '100+', label: 'Cities Covered', icon: Globe },
              { val: '24/7', label: 'Elite Support', icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[4px] shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500">
                 <div className="h-12 w-12 bg-gray-50 rounded-[4px] flex items-center justify-center text-khareedo-accent mb-6 group-hover:bg-[#002f34] group-hover:text-white transition-colors">
                    <stat.icon className="h-6 w-6" />
                 </div>
                 <h3 className="text-3xl font-black text-[#002f34] tracking-tighter mb-1">{stat.val}</h3>
                 <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-32 flex flex-col lg:flex-row gap-24 items-center">
         <div className="lg:w-1/2">
            <h2 className="text-[10px] font-black text-khareedo-accent uppercase tracking-[0.3em] mb-4 italic">Our Core Philosophy</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-[#002f34] tracking-tight uppercase leading-tight mb-8">
               Empowering The <br />
               Pakistan Economy
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed mb-10 text-lg">
               At Khareedo.pk, we believe that commerce is more than just transaction; it's about trust and empowerment. Our mission is to provide a seamless, secure, and delightful experience for Pakistanis to trade goods, grow businesses, and find exactly what they need.
            </p>
            <div className="space-y-6">
               <div className="flex gap-6 group">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex flex-shrink-0 items-center justify-center text-khareedo-accent group-hover:bg-[#002f34] group-hover:text-white transition-colors">
                     <Award className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-black text-[#002f34] uppercase tracking-tight mb-1">Elite Standards</h4>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">We maintain the highest level of verification in the market.</p>
                  </div>
               </div>
               <div className="flex gap-6 group">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex flex-shrink-0 items-center justify-center text-khareedo-accent group-hover:bg-[#002f34] group-hover:text-white transition-colors">
                     <Heart className="h-6 w-6" />
                  </div>
                  <div>
                     <h4 className="font-black text-[#002f34] uppercase tracking-tight mb-1">Community First</h4>
                     <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Every feature we build is designed to protect our users.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-khareedo-accent rounded-[4px] opacity-10 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="Our Workspace" 
              className="relative rounded-[4px] shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700"
            />
         </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 pb-32">
         <div className="bg-[#002f34] rounded-[4px] p-12 lg:p-24 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-khareedo-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
               <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase mb-8">Ready to start trading?</h2>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button onClick={() => navigate('/signup')} className="khareedo-btn px-12 py-5 text-sm uppercase tracking-[0.2em] shadow-2xl shadow-[#002f34]/40">
                     Join The Network
                  </button>
                  <button onClick={() => navigate('/')} className="bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-[#002f34] px-12 py-5 rounded-[4px] font-black text-sm uppercase tracking-[0.2em] transition-all">
                     View Listings
                  </button>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
}
