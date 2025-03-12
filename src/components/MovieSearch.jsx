import { useContext } from "react"
import { MovieContext } from "../context/MovieContext"

const MovieSearch = ({title, data}) => {
  const handleTrailer = useContext(MovieContext)
  return (
    <div className='text-white p-10'>
        <h2 className="text-xl uppercase mb-4">{title}</h2>
        <div className='grid grid-cols-5 gap-4'>
            {data && data.length > 0 && data.map((item) => (
            <div
                key={item.id}
                className="w-[200px] h-[300px] group cursor-pointer"
                onClick={() => handleTrailer(item.id)}
            >
                <div className="w-full h-full relative group-hover:scale-110 transform transition-transform duration-500 ease-in-out">
                <div className="absolute w-full h-full bg-black/40"></div>
                <img
                    src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path || item.backdrop_path}`}
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
        </div>
        
    </div>
  )
}

export default MovieSearch