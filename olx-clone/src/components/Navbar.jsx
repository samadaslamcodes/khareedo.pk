import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ProductContext } from '../contexts/ProductContext';
import {
  Search, ShoppingCart, User, PlusCircle, LogOut,
  MapPin, ChevronDown, Bell, MessageCircle, ShoppingBag
} from 'lucide-react';

export default function Navbar() {
  const { currentUser, logout, loading: authLoading } = useContext(AuthContext);
  const { cart, searchQuery, setSearchQuery } = useContext(ProductContext);
  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    setSearchQuery(localSearch);
    navigate('/home');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Primary Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between lg:justify-start gap-2 lg:gap-4">
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-[#002f34] hover:bg-gray-100 rounded-lg"
        >
          {isMenuOpen ? <LogOut className="h-6 w-6 rotate-90" /> : <Search className="h-6 w-6" />}
        </button>

        {/* Brand/Logo */}
        <Link to={currentUser ? "/home" : "/"} className="flex-shrink-0 lg:mr-4 group" onClick={() => setSearchQuery('')}>
          <div className="flex items-center gap-2">
            <div className="bg-[#002f34] p-1.5 rounded-lg shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6 text-khareedo-accent" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg lg:text-xl font-black text-[#002f34] tracking-tighter uppercase">
                Khareedo<span className="text-khareedo-accent">.</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Location Selector - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-2.5 border-2 border-[#002f34] rounded-lg w-72 bg-white cursor-pointer group">
          <MapPin className="h-5 w-5 text-[#002f34]" />
          <input
            type="text"
            readOnly
            value="Pakistan"
            className="w-full outline-none text-[15px] font-normal text-[#002f34] cursor-pointer"
          />
          <ChevronDown className="h-6 w-6 text-[#002f34] group-hover:rotate-180 transition-transform" />
        </div>

        {/* Search Bar - Responsive */}
        <form onSubmit={handleSearch} className={`${isSearchVisible ? 'flex' : 'hidden lg:flex'} absolute lg:relative top-full left-0 w-full lg:w-auto flex-grow flex items-center border-b-2 lg:border-2 border-[#002f34] bg-white overflow-hidden shadow-xl lg:shadow-none lg:rounded-lg animate-fade-in lg:animate-none z-40`}>
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
            className="w-full px-4 py-3 lg:py-2.5 outline-none text-[15px] text-[#002f34]"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
          />
          <button type="submit" className="bg-[#002f34] text-white px-4 py-3 lg:py-2.5 flex items-center gap-2 hover:bg-[#004f56] transition-colors">
            <Search className="h-5 w-5 lg:h-6 lg:w-6" />
            <span className="hidden md:inline font-bold text-[15px]">Search</span>
          </button>
        </form>

        {/* User Actions */}
        <div className="flex items-center gap-2 lg:gap-6 ml-auto lg:ml-2">
          {/* Mobile Search Toggle */}
          <button 
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            className="lg:hidden p-2 text-[#002f34] hover:bg-gray-100 rounded-lg"
          >
            <Search className="h-6 w-6" />
          </button>

          {currentUser ? (
            <div className="flex items-center gap-3 lg:gap-6">
              <button className="hidden sm:block text-[#002f34] hover:bg-gray-100 p-2 rounded-lg transition-colors">
                <Bell className="h-6 w-6" />
              </button>
              
              <div className="relative group/user">
                <button className="flex items-center gap-1.5 focus:outline-none">
                  <div className="h-9 w-9 lg:h-10 lg:w-10 rounded-lg bg-gray-200 border-2 border-white shadow-sm flex items-center justify-center font-bold text-[#002f34]">
                    {currentUser.name ? currentUser.name.charAt(0) : <User className="h-5 w-5" />}
                  </div>
                  <ChevronDown className="hidden lg:block h-5 w-5 text-[#002f34]" />
                </button>
                
                {/* User Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 opacity-0 pointer-events-none group-hover/user:opacity-100 group-hover/user:pointer-events-auto transition-all translate-y-1 z-[60]">
                  <Link to="/dashboard" className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center">
                    <User className="h-4 w-4 mr-2" /> My Profile
                  </Link>
                  <Link to="/cart" className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-2" /> My Cart ({cart.length})
                  </Link>
                  <button onClick={handleLogout} className="w-full text-left px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 flex items-center">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </button>
                </div>
              </div>

              <Link to="/post-ad" className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full border-[4px] border-l-yellow-400 border-t-blue-400 border-r-blue-700 border-b-yellow-400 font-extrabold text-[#002f34] hover:scale-105 transition-all uppercase tracking-tighter text-sm shadow-md">
                <PlusCircle className="h-5 w-5" /> SELL
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 lg:gap-6">
              <Link to="/login" className="text-[#002f34] font-bold text-[15px] border-b-2 border-[#002f34]">Login</Link>
              <Link to="/post-ad" className="hidden sm:flex items-center gap-2 px-6 py-2 rounded-full border-[4px] border-l-yellow-400 border-t-blue-400 border-r-blue-700 border-b-yellow-400 font-extrabold text-[#002f34] hover:scale-105 transition-all uppercase tracking-tighter text-sm shadow-md">
                <PlusCircle className="h-5 w-5" /> SELL
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Secondary Categories Navbar - Scrollable on Mobile */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-6 text-[13px] lg:text-[14px] font-bold text-[#002f34] min-w-max lg:min-w-0">
          <button className="flex items-center gap-2 font-black uppercase tracking-tight hover:text-khareedo-accent transition-colors">
            All Categories <ChevronDown className="h-4 w-4 lg:h-5 lg:w-5" />
          </button>
          <nav className="flex items-center gap-4 lg:gap-6">
            <Link to="/category/phones" onClick={() => setSearchQuery('')} className="hover:text-khareedo-accent whitespace-nowrap">Mobile Phones</Link>
            <Link to="/category/vehicles" onClick={() => setSearchQuery('')} className="hover:text-khareedo-accent whitespace-nowrap">Cars</Link>
            <Link to="/category/motorcycles" onClick={() => setSearchQuery('')} className="hover:text-khareedo-accent whitespace-nowrap">Motorcycles</Link>
            <Link to="/category/property" onClick={() => setSearchQuery('')} className="hover:text-khareedo-accent whitespace-nowrap">Houses</Link>
            <Link to="/category/electronics" onClick={() => setSearchQuery('')} className="hover:text-khareedo-accent whitespace-nowrap">Video-Audios</Link>
            <Link to="/category/tablets" onClick={() => setSearchQuery('')} className="hover:text-khareedo-accent whitespace-nowrap">Tablets</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}
