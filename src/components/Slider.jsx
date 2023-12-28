import { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Image_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.trendingMovies.then((res) => {
      console.log(res);
      setMovieList(res.data.results);
    });
  };

  const screenWidth = window.innerWidth;
  const elementRef = useRef();
  function slideLeft() {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
  }

  function slideRight() {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 110;
    }
  }

  return (
    <div>
      <HiChevronLeft
        className="text-primaryLight absolute text-[40px] mt-[157px] text-6xl cursor-pointer"
        onClick={() => slideLeft(elementRef.current)}
      />

      <HiChevronRight
        className="text-primaryLight absolute text-[40px] mt-[157px] right-0 text-6xl cursor-pointer"
        onClick={() => slideRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto px-16 py-5 w-full scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <img
            className="min-w-full h-[380px] object-cover  object-left-top  mt-3 mr-5 hover:border-[3px] rounded-sm border-secondaryColor transition-all duration-150 ease-in-out   "
            key={item.id}
            src={Image_URL + item.backdrop_path}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
