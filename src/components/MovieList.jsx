import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieContext";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieList = ({ title, data }) => {
  const handleTrailer = useContext(MovieContext)
  return (
    <div className="text-white p-10">
      <h2 className="text-xl uppercase mb-4">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data && data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-[300px] group cursor-pointer"
            onClick={() => handleTrailer(item.id)}
          >
            <div className="w-full h-full relative group-hover:scale-110 transform transition-transform duration-500 ease-in-out">
              <div className="absolute w-full h-full bg-black/40"></div>
              <img
                src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-3 pr-3">
                <p className="uppercase text-[18px]">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieList;
