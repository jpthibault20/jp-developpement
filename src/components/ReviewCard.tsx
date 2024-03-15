// components/ReviewCard.jsx
import Image from 'next/image';
import PropTypes from 'prop-types';

const ReviewCard = ({ name, rating, review, imageUrl }:{name:string, rating:number, review:string, imageUrl:string}) => {
    const maxRating = 5;

    return (
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image src={imageUrl} alt={name} width={48} height={48} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <div className="flex items-center mb-2">
              {Array.from({ length: maxRating }, (_, i) => (
                <span
                  key={i}
                  className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-gray-600">&lsquo;&lsquo;{review}&lsquo;&lsquo;</p>
          </div>
        </div>
      );
};


export default ReviewCard;