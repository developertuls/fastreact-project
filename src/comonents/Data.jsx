
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';







export const Data = ({singeldata,addtoCart}) => {

 
  const { name, image, price, speed, details, model, rating = 4 } = singeldata;

    const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <div className='mt-[] hover:bg-gray-100 transition duration-200 h-[320px] flex flex-col justify-between rounded-sm  box bg-white border overflow-hidden p-4 text-left'>
      {/* Top Content */}

       <div className='flex-grow'>
        <h1 className='text-[15px] font-semibold mb-1'>{name}</h1>
        <img
          className='mt-4 hover:shadow-md hover:cursor-pointer bg-[#f6f6f6] rounded-         [10px] mx-auto mb-2 h-[100px] w-auto object-contain'
          src={image}
          alt={name}/>
        

         <div className='mt-4 font-medium'>
          <hr  className='mt-5'/>
          <h5 className='text-sm mb-2 mt-2'>Model: {model}</h5>

          {/* ⭐ Rating */}
   <div className='flex items-center space-x-[2px] text-yellow-400 text-[14px]   my-2'>
            {renderStars()}
  <span className='text-gray-500 text-[12px] ml-2'>({rating})</span>
          </div>

          <p className='text-sm mb-1'>Price: {price}</p>
        </div>
      </div>

      {/* Bottom Button */}
      <button onClick={()=>addtoCart(singeldata)}  className='mt-[-4px]   transition text-white font-semibold px-3 py-1 text-sm rounded bg-[#22a6b3] hover:py-2 hover:px-2 hover:underline underline-offset-2'>
        Shop New Car
      </button>
    </div>
  );
};
