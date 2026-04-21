import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#ebeeef] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 border-b border-gray-300 pb-12">
          
          {/* Popular Categories */}
          <div>
            <h4 className="text-[#002f34] font-bold text-[14px] uppercase mb-4">Popular Categories</h4>
            <ul className="space-y-2">
              {['Cars', 'Flats for rent', 'Mobile Phones', 'Jobs'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-600 hover:text-[#002f34] text-[12px] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trending Searches */}
          <div>
            <h4 className="text-[#002f34] font-bold text-[14px] uppercase mb-4">Trending Searches</h4>
            <ul className="space-y-2">
              {['Bikes', 'Watches', 'Books', 'Dogs'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-gray-600 hover:text-[#002f34] text-[12px] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Info */}
          <div>
            <h4 className="text-[#002f34] font-bold text-[14px] uppercase mb-4">About Us</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Khareedo Group', path: '/about' },
                { name: 'Khareedo Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Khareedo for Businesses', path: '/support/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-600 hover:text-[#002f34] text-[12px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#002f34] font-bold text-[14px] uppercase mb-4">Khareedo</h4>
            <ul className="space-y-2">
              {[
                { name: 'Help', path: '/support/contact' },
                { name: 'Sitemap', path: '/support/about' },
                { name: 'Terms of use', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-600 hover:text-[#002f34] text-[12px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[#002f34] font-bold text-[14px] uppercase mb-4">Follow Us</h4>
               <div className="flex flex-wrap gap-3">
                  <a href="#" className="bg-white/50 backdrop-blur-md text-[#002f34] px-4 py-2 rounded-[4px] font-black text-[10px] uppercase tracking-widest hover:bg-[#002f34] hover:text-white transition-all shadow-sm">iOS Store</a>
                  <a href="#" className="bg-white/50 backdrop-blur-md text-[#002f34] px-4 py-2 rounded-[4px] font-black text-[10px] uppercase tracking-widest hover:bg-[#002f34] hover:text-white transition-all shadow-sm">Android Play</a>
               </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-[12px] text-gray-600 font-bold">
             Free Classifieds in Pakistan <span className="font-normal text-gray-400 ml-2">. © 2006-{new Date().getFullYear()} Khareedo.pk</span>
           </p>
           <div className="flex items-center gap-6">
              {/* Optional region/language pickers */}
           </div>
        </div>
        
      </div>
    </footer>
  );
}
