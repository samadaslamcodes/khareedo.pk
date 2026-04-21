import React from 'react';
import { Calendar, User, ArrowRight, Share2, MessageSquare, Tag, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOGS = [
  {
    id: 1,
    title: "The Rise of Digital Marketplaces in Pakistan",
    excerpt: "How Khareedo.pk is leading the transformation of traditional commerce into a high-performance digital network.",
    author: "Ziad Ahmed",
    date: "April 18, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    category: "INSIGHTS"
  },
  {
    id: 2,
    title: "Securing Your Transactions: The Verification Protocol",
    excerpt: "Learn how to utilize our elite verification tiers to ensure 100% security in your trading journey.",
    author: "Sara Khan",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    category: "SECURITY"
  },
  {
    id: 3,
    title: "5 Tips for Sellers: Maximize Your Premium Listing",
    excerpt: "From high-resolution media to technical specifications—how to make your ad stand out to elite buyers.",
    author: "Omar Ali",
    date: "April 12, 2024",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop",
    category: "STRATEGY"
  }
];

export default function Blog() {
  return (
    <div className="bg-[#f8f9fb] min-h-screen">
      {/* Editorial Header */}
      <div className="bg-[#002f34] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-khareedo-accent opacity-5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tight uppercase leading-none mb-8">
              Khareedo <br />
              <span className="text-khareedo-accent">Editorial</span>
           </h1>
           <p className="text-white/50 text-xl font-medium italic max-w-2xl mx-auto leading-relaxed">
             Advanced insights into the future of commerce, security, and the Pakistan marketplace ecosystem.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20 pb-32">
        {/* Featured Post */}
        <div className="bg-white rounded-[4px] shadow-2xl border border-gray-100 overflow-hidden mb-20 group flex flex-col lg:flex-row animate-fade-in">
           <div className="lg:w-1/2 overflow-hidden relative">
              <img src={BLOGS[0].image} alt="Featured" className="w-full h-[400px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute top-8 left-8 bg-[#002f34]/80 backdrop-blur-md text-khareedo-accent text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
                 FEATURED INSIGHT
              </div>
           </div>
           <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-6 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-8">
                 <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {BLOGS[0].date}</span>
                 <span className="flex items-center gap-2"><User className="h-4 w-4" /> {BLOGS[0].author}</span>
              </div>
              <h2 className="text-4xl font-black text-[#002f34] tracking-tight leading-tight mb-6 uppercase group-hover:text-khareedo-accent transition-colors">
                 {BLOGS[0].title}
              </h2>
              <p className="text-gray-500 font-medium text-lg leading-relaxed mb-10">
                 {BLOGS[0].excerpt}
              </p>
              <div className="flex items-center gap-6">
                  <button className="khareedo-btn px-10 py-5 text-xs tracking-widest uppercase rounded-[4px]">
                     Read Expansion <ArrowRight className="h-5 w-5 ml-4" />
                  </button>
                  <button className="h-14 w-14 rounded-[4px] bg-gray-50 flex items-center justify-center text-gray-300 hover:bg-[#002f34] hover:text-white transition-all">
                     <Share2 className="h-5 w-5" />
                  </button>
              </div>
           </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {BLOGS.slice(1).map(blog => (
             <div key={blog.id} className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <div className="h-72 overflow-hidden relative">
                   <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#002f34] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {blog.category}
                   </div>
                </div>
                <div className="p-10">
                   <div className="flex items-center gap-4 text-[9px] font-black text-gray-300 uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {blog.date}</span>
                      <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" /> 5 Min Read</span>
                   </div>
                   <h3 className="text-2xl font-black text-[#002f34] tracking-tight uppercase mb-6 group-hover:text-khareedo-accent transition-colors leading-tight">
                      {blog.title}
                   </h3>
                   <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8 line-clamp-2">
                      {blog.excerpt}
                   </p>
                   <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                      <button className="flex items-center text-[10px] font-black text-[#002f34] uppercase tracking-widest hover:text-khareedo-accent transition-colors">
                         Open Dispatch <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                      <div className="flex gap-4 opacity-20">
                         <MessageSquare className="h-4 w-4" />
                         <Share2 className="h-4 w-4" />
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 bg-[#002f34] rounded-[4px] p-16 text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-khareedo-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <ShieldCheck className="h-40 w-40 text-white" />
           </div>
           <div className="relative z-10 max-w-xl mx-auto">
              <h4 className="text-3xl font-black text-white tracking-tight uppercase mb-4">The Khareedo Dispatch</h4>
              <p className="text-white/40 text-sm font-medium mb-10 italic">Subscribe to our secure editorial line for bi-weekly insights.</p>
              <div className="flex p-2 bg-white/5 border border-white/10 rounded-[4px]">
                 <input type="email" placeholder="Your Terminal Address" className="flex-grow bg-transparent border-none outline-none text-white px-4 font-bold placeholder:text-white/20" />
                 <button className="khareedo-btn py-4 px-8 text-[10px] tracking-widest">SUBSCRIBE</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
