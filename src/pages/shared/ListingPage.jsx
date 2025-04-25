import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { listings } from '../../localContent'

export default function ListingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = listings.find(item => item.listingId === id);

  if (!listing) return <div className="p-4">Listing not found.</div>;

  function goHome(){
    navigate('/login')
  }

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-4">{listing.title}</h1>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
      {/* Left column - Main image */}
      <div className="w-full h-full">
        <img
          src={listing.images[0]}
          alt="Main"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* Right column - 4 smaller images */}
      <div className="hidden sm:grid grid-cols-2 grid-rows-2 gap-2">
        {listing.images.slice(1, 5).map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Preview ${i + 1}`}
            className="object-cover w-full h-full rounded-xl"
          />
        ))}
      </div>
    </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-4">
          <h2 className="text-[22px]">{listing.subtitle}</h2>

          <div className="text-[18px]">
            {listing.guests} guests · {listing.rooms} rooms · {listing.beds} beds · {listing.bathrooms} bathrooms
          </div>

          {listing.popular && (
            <div className="text-rose-500 font-semibold">Favorite among guests</div>
          )}

          <div className="text-[18px]">
            Rating: {listing.rating} · {listing.reviews} reviews
          </div>

          <div className="text-[18px]">
            Hosted by {listing.host} · {listing.hostYears} years hosting
          </div>

        </div>

        {/* Right Column - Sticky Booking Box */}
        <div className="w-full lg:w-[300px] h-fit sticky top-24 border border-gray-200 p-4 rounded-xl shadow-sm">
          <div className="text-xl font-semibold mb-2">{listing.price}</div>
          <button onClick={goHome} className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded-lg w-full">
            Book
          </button>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center border-t pt-6 text-[18px]">
        <div className='flex flex-col items-start'>
          <h2 className='font-semibold my-6'>Rules of the house</h2>
          <ul className='flex flex-col items-start'>
            <li>Check-in available from 4:00p.m.</li>
            <li>Check-out from 3:00p.m.</li>
            <li>Pet-friendly</li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='font-semibold my-6'>Safety and property</h2>
          <ul className='flex flex-col items-start'>
            <li>No CO2 alarm</li>
            <li>No smoke detectors</li>
            <li>Pool & Jacuzzi</li>
          </ul>
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='font-semibold my-6'>Cancellation policy</h2>
          <ul className='flex flex-col items-start'>
            <li>This booking is not refundable.</li>
            <li>Check our policy before booking.</li>
            <li>No do-overs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}