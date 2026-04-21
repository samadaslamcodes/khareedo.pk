import React, { useContext, useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import ProductCard from '../components/ProductCard';
import { 
  Smartphone, Car, Home as HomeIcon, Building2, 
  Cpu, Bike, Briefcase, Settings, BriefcaseIcon 
} from 'lucide-react';

export default function Home() {
  const { products, searchQuery } = useContext(ProductContext);
  const { categoryName } = useParams();
  const [visibleItems, setVisibleItems] = useState(12);
  
  // Filter logic
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = !searchQuery || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !categoryName || p.category === categoryName;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, categoryName]);

  // Categorized products for the sections (Bikes are inside vehicles in mockData)
  const bikes = products.filter(p => p.category === 'vehicles' && (p.title.toLowerCase().includes('bike') || p.title.toLowerCase().includes('yamaha') || p.title.toLowerCase().includes('honda'))).slice(0, 4);
  const cars = products.filter(p => p.category === 'vehicles' && !p.title.toLowerCase().includes('bike')).slice(0, 4);
  const property = products.filter(p => p.category === 'property').slice(0, 4);

  const categories = [
    { name: 'Mobiles', slug: 'phones', Icon: Smartphone },
    { name: 'Vehicles', slug: 'vehicles', Icon: Car },
    { name: 'Property For Sale', slug: 'property', Icon: HomeIcon },
    { name: 'Property For Rent', slug: 'property', Icon: Building2 },
    { name: 'Electronics', slug: 'electronics', Icon: Cpu },
    { name: 'Bikes', slug: 'vehicles', Icon: Bike },
    { name: 'Business', slug: 'electronics', Icon: Briefcase },
    { name: 'Services', slug: 'services', Icon: Settings },
    { name: 'Jobs', slug: 'jobs', Icon: BriefcaseIcon },
  ];

  const handleLoadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* Brand Influence Banner */}
      <div className="max-w-7xl mx-auto px-4 py-8">
         <div className="w-full h-[200px] md:h-[260px] overflow-hidden rounded-[8px] shadow-lg border border-gray-100 group bg-[#002f34]">
            <img 
              src="/brand-banner.png" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Khareedo Influence" 
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <h1 className="text-white text-3xl font-black opacity-10">KHAREEDO.PK</h1>
            </div>
         </div>
      </div>

      {searchQuery || categoryName ? (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-[24px] font-bold text-[#002f34] mb-8">
              {categoryName ? `Results in ${categoryName}` : `Search results for "${searchQuery}"`}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
               {filteredProducts.slice(0, visibleItems).map(p => (
                  <ProductCard key={p.id} product={p} />
               ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                 <h3 className="text-xl text-gray-400 font-bold">No results found for your search.</h3>
              </div>
            )}
            {visibleItems < filteredProducts.length && (
              <div className="text-center mt-12">
                 <button onClick={handleLoadMore} className="bg-white border-2 border-[#002f34] text-[#002f34] px-10 py-3 rounded-[4px] font-bold hover:bg-[#002f34] hover:text-white transition-all">Load More</button>
              </div>
            )}
        </div>
      ) : (
        <>
          {/* Categories Grid */}
          <div className="max-w-7xl mx-auto px-4 py-8">
             <h2 className="text-[24px] font-bold text-[#002f34] mb-8">All Categories</h2>
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6 text-center">
                {categories.map((cat, i) => (
                   <Link key={i} to={`/category/${cat.slug}`} className="group flex flex-col items-center">
                      <div className="w-20 h-20 bg-gray-50 rounded-[4px] flex items-center justify-center mb-3 group-hover:bg-[#002f34] transition-all border border-transparent group-hover:border-[#002f34] overflow-hidden">
                         <cat.Icon className="h-8 w-8 text-[#002f34] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[14px] font-bold text-[#002f34] leading-tight group-hover:text-khareedo-accent line-clamp-1">{cat.name}</span>
                   </Link>
                ))}
             </div>
          </div>

          {/* Section: Mobile Phones */}
          <div className="max-w-7xl mx-auto px-4 py-12">
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-[24px] font-bold text-[#002f34]">Mobile Phones</h2>
                <Link to="/category/phones" className="text-blue-600 font-bold text-[16px] underline">View More</Link>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {products.filter(p => p.category === 'phones').slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
             </div>
          </div>

          {/* Section: Bikes */}
          <div className="max-w-7xl mx-auto px-4 py-12">
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-[24px] font-bold text-[#002f34]">Bikes & Motorcycles</h2>
                <Link to="/category/vehicles" className="text-blue-600 font-bold text-[16px] underline">View More</Link>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {bikes.map(p => <ProductCard key={p.id} product={p} />)}
             </div>
          </div>

          {/* Section: Cars */}
          <div className="max-w-7xl mx-auto px-4 py-12">
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-[24px] font-bold text-[#002f34]">Cars & Vehicles</h2>
                <Link to="/category/vehicles" className="text-blue-600 font-bold text-[16px] underline">View More</Link>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {cars.map(p => <ProductCard key={p.id} product={p} />)}
             </div>
          </div>

          {/* Section: Property */}
          <div className="max-w-7xl mx-auto px-4 py-12">
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-[24px] font-bold text-[#002f34]">Property</h2>
                <Link to="/category/property" className="text-blue-600 font-bold text-[16px] underline">View More</Link>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                {property.map(p => <ProductCard key={p.id} product={p} />)}
             </div>
          </div>

          {/* Fresh recommendations */}
          <div className="bg-[#f2f4f5] py-16">
            <div className="max-w-7xl mx-auto px-4">
               <h2 className="text-[24px] font-bold text-[#002f34] mb-8">Fresh recommendations</h2>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                  {products.slice(0, visibleItems).map(p => <ProductCard key={p.id} product={p} />)}
               </div>
               {visibleItems < products.length && (
                 <div className="text-center mt-16">
                    <button onClick={handleLoadMore} className="bg-white border-2 border-[#002f34] text-[#002f34] px-12 py-3.5 rounded-[4px] font-bold text-[16px] hover:bg-[#002f34] hover:text-white transition-all shadow-sm">
                       Load More
                    </button>
                 </div>
               )}
            </div>
          </div>

          {/* Get Our App Promotion */}
          <div className="bg-[#f7f8f8] border-t border-gray-200 overflow-hidden">
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-4 gap-12">
                <div className="md:w-1/2">
                   <div className="relative group">
                      <img 
                        src="/app-promo.png" 
                        alt="Khareedo App" 
                        className="w-full max-w-[500px] rounded-[4px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#002f34]/10 to-transparent rounded-[4px] pointer-events-none"></div>
                   </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                   <h2 className="text-4xl font-black text-[#002f34] uppercase tracking-tight leading-tight">Try the Khareedo.pk app</h2>
                   <p className="text-xl text-gray-500 font-medium">Buy, sell and find anything on the go. Faster, safer and literally in your pocket.</p>
                   
                   <div className="pt-6 border-t border-gray-200">
                      <p className="text-[#002f34] font-bold text-sm uppercase mb-4">Get your app today</p>
                      <div className="flex flex-wrap gap-4">
                         <a href="#" className="bg-[#002f34] text-white px-6 py-3 rounded-[4px] font-black text-xs uppercase tracking-widest hover:bg-[#003f44] transition-all hover:scale-105">App Store</a>
                         <a href="#" className="bg-[#002f34] text-white px-6 py-3 rounded-[4px] font-black text-xs uppercase tracking-widest hover:bg-[#003f44] transition-all hover:scale-105">Google Play</a>
                         <a href="#" className="bg-[#002f34] text-white px-6 py-3 rounded-[4px] font-black text-xs uppercase tracking-widest hover:bg-[#003f44] transition-all hover:scale-105">App Gallery</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </>
      )}
    </div>
  );
}
