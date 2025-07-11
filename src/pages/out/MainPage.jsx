import ListingCard from '../../components/organisms/ListingCard';
import { listings } from '../../localContent';

export default function MainPage() {
  return (
    <main className="p-4 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </main>
  );
}