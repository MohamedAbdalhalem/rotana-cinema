import Slider from "react-slick";
import SliderItem1 from "./SliderItem1";
import LoudingISlider from "./LoudingSlider";

import useMovieTrending from './../Hooks/useMovieTrending';

export default function MovieTrendingSection() {
  const {resluts,isLoading,setIsDay} = useMovieTrending()
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
      initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="p-5 mb-4">
        <div className="flex gap-2 flex-wrap mb-4">
          <h3 className="text-gray-800 dark:text-white text-2xl font-bold">Trending Movie</h3>
          <select onChange={(e) => setIsDay(e.target.value as "day" | "week")} className="block cursor-pointer appearance-none rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 pr-10 text-sm text-gray-700 dark:text-gray-200 font-bold  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:border-gray-600 dark:focus:border-indigo-400 dark:focus:ring-indigo-400">
        <option value='day' className="font-bold">Today</option>
        <option value='week' className="font-bold">This  Week</option>
      </select>
      </div>
      {isLoading && <LoudingISlider/>}
        <div className="slider-container">
        <Slider {...settings} >
          {resluts && resluts.map(movie => <SliderItem1 key={movie.id} movieData={ movie } />)}
      </Slider>
    </div>
      </div>
    
  );
}

