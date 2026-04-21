import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ProductCard({ product }) {
  const { id, title, price, location, createdAt, image } = product;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  // Safe date formatting for both ISO strings and Firestore Timestamps
  const formatDate = (date) => {
    if (!date) return "";
    const d = date?.toDate ? date.toDate() : new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formattedDate = formatDate(createdAt);

  // Formatting price to Lac style if needed (or just simple large number)
  const formatPrice = (p) => {
    if (p >= 100000) {
      return `Rs ${(p / 100000).toFixed(2)} Lac`;
    }
    return `Rs ${p.toLocaleString()}`;
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="bg-white border border-gray-200 rounded-[4px] overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full cursor-pointer relative"
    >
      <div className="block h-48 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-3 flex flex-grow flex-col">
        <div className="flex justify-between items-start mb-1">
          <span className="text-[17px] font-bold text-[#002f34]">
            {formatPrice(price)}
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className="p-1 hover:bg-gray-50 rounded-[4px] transition-colors"
          >
            <Heart className={`h-6 w-6 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-[#002f34]'}`} />
          </button>
        </div>

        <div className="block flex-grow mb-4">
          <p className="text-[#002f34] text-[16px] font-normal line-clamp-1 leading-snug">
            {title}
          </p>
        </div>
        
        <div className="flex justify-between items-center text-[12px] text-gray-500 uppercase font-normal">
          <span className="truncate max-w-[120px]">{location}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </div>
  );
}
