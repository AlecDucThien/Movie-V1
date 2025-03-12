import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieContext";

function App() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const handleSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const response = await fetch(url, options);
      const data = await response.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };
        const url1 =
          "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
        const url2 =
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

        const [res1, res2] = await Promise.all([
          fetch(url1, options),
          fetch(url2, options),
        ]);

        if (!res1 || !res2) {
          throw new Error("Lỗi khi lấy dữ liệu");
        }

        const data1 = await res1.json();
        const data2 = await res2.json();

        setMovies(data1.results);
        setTopMovies(data2.results);
      } catch (error) {
        console.error("Lỗi Fetch API:", error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <div className="bg-black">
          <Header onSearch={handleSearch} />
          <Banner />
          {movieSearch.length > 0 ? (
            <MovieSearch title={"Kết quả tìm kiếm"} data={movieSearch} />
          ) : (
            <>
              <MovieList title={"Phim Hot"} data={movies} />
              <MovieList title={"Phim Đề Cử"} data={topMovies} />
            </>
          )}
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
