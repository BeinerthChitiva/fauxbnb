import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ListingCard({ listing }) {
  const {
    listingId,
    images,
    location,
    rating,
    distance,
    availability,
    price,
    popular,
    favorite,
  } = listing;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleHeartClick = (e) => {
    e.stopPropagation();
    if (!isLoggedIn) return navigate('/login');
    setIsFavorite((prev) => !prev);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev > 0 ? prev - 1 : prev
    );
  };

  const goToListing = () => {
    navigate(`/listing/${listingId}`);
  };

  return (
    <div
      onClick={goToListing}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full max-w-sm cursor-pointer"
    >
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <img
          src={images[currentImageIndex]}
          alt={location}
          className="object-cover w-full h-full"
        />

        {popular && (
          <div className="absolute top-2 left-2 bg-white text-xs font-semibold px-3 py-2 rounded-full shadow">
            Favorite among guests
          </div>
        )}

        <div
          className="absolute top-2 right-2 p-1 bg-white rounded-full shadow"
          onClick={handleHeartClick}
        >
          <Heart
            size={20}
            className={`transition-colors duration-200 ${
                isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-700'
            }`}
        />
        </div>

        {isHovered && currentImageIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-1 bg-white rounded-full shadow"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {isHovered && currentImageIndex < images.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 bg-white rounded-full shadow"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      <div className="mt-3 space-y-1 text-sm text-gray-800">
        <div className="flex justify-between font-medium">
          <span className='font-bold'>{location}</span>
          <span>⭐ {rating}</span>
        </div>
        <div>{distance}</div>
        <div className="text-gray-500">{availability}</div>
        <div>
            <span className="font-semibold underline">{price}</span>
            <span> / 5 nights</span>
        </div>
      </div>
    </div>
  );
}
