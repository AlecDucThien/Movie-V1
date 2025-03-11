
import imageRating from "../assets/rating.png";
import imageRatingHalf from "../assets/rating-half.png";
import imageBanner from "../assets/temp-1.jpeg";
import imagePlayButton from "../assets/play-button.png";

const Banner = () => {
  
  return (
    <div className="w-full h-[600px] bg-banner bg-cover bg-no-repeat bg-center mt-[80px] relative">
      <div className="w-full h-full top-0 left-0 bg-black opacity-35 absolute" />
      <div className="w-full h-full flex justify-between items-center space-x-[30px] p-[50px] absolute z-5">
        <div className="flex flex-1 flex-col space-y-8 items-baseline">
          <div className="text-white bg-gradient-to-r from-red-600 to-red-100 px-4 py-1 text-lg">
            TV Show
          </div>
          <div className="flex flex-col space-y-6">
            <h2 className="text-white font-bold text-4xl">
              Nghe nói em thích tôi
            </h2>
            <div className="flex space-x-3">
              <img src={imageRating} alt="Rating" className="w-8 h-8" />
              <img src={imageRating} alt="Rating" className="w-8 h-8" />
              <img src={imageRating} alt="Rating" className="w-8 h-8" />
              <img src={imageRating} alt="Rating" className="w-8 h-8" />
              <img src={imageRatingHalf} alt="Rating" className="w-8 h-8" />
            </div>
            <p className="text-white text-[16px] opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              perspiciatis, ea maiores voluptatibus quibusdam eligendi. Quisquam
              aperiam fuga facere, beatae ratione, id voluptatem consectetur,
              error dignissimos omnis cupiditate minus iste!
            </p>
          </div>
          <div className="flex">
            <button className="text-white bg-black p-2 rounded-sm mr-4 hover:bg-gray-800">
              Chi tiết
            </button>
            <button className="text-white bg-red-600 p-2 rounded-sm hover:bg-red-400">
              Xem phim
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center ">
          <div
            className="w-[250px] h-[350px] ml-[50px] relative group"
          >
            <img
              src={imageBanner}
              alt="Image banner"
              className={`w-full h-full object-cover`}

            />
            <div className="w-full h-full top-0 left-0 flex justify-center items-center absolute 
              backdrop-blur-[2px] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity 
              duration-500 ease-in-out">
                <img
                  src={imagePlayButton}
                  alt="Play button"
                  className="w-[60px] h-[60px]"
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
