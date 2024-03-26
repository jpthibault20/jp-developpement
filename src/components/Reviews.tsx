import ReviewCard from '@/components/ReviewCard';
import {Reviews} from '@/app/lib/data/homePage'

const Home = () => {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            rating={review.rating}
            review={review.review}
            imageUrl={review.imageUrl}
          />
        ))}
      </div>

  );
};

export default Home;