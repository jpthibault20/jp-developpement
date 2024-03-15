import ReviewCard from '@/components/ReviewCard';
import profile1 from '../../public/image/picture profile1.svg'
import profile2 from "../../public/image/picture profile2.svg"
import profile3 from "../../public/image/picture profile3.svg"

const reviews = [
  {
    name: 'Clotilde PAUDOT',
    rating: 5,
    review: 'Excellente qualité et disponible, je recomande vivement !',
    imageUrl: profile1,
  },
  {
    name: 'Eric JACQUOT',
    rating: 5,
    review: 'Merci pour votre super travail !',
    imageUrl: profile2,
  },
  {
    name: 'Liam WAYLEN',
    rating: 4,
    review: 'Très réactif',
    imageUrl: profile3,
  },
];

const Home = () => {
  return (

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
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