import Slider from "react-slick";

import LoudingISlider from "./LoudingSlider";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import SliderItem3 from "./SliderItem3";

export default function UpcomingMoviesSection() {
    const {isLoading,resluts} = useUpcomingMovies()
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
      initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <div className='upComing p-5 mb-4'>
          <h3 className="text-gray-800 dark:text-white text-3xl mb-4 font-bold">UpComing Movie</h3>
          {isLoading && <LoudingISlider/>}
      <div className="slider-container">
              <Slider {...settings} >
                  {resluts && resluts.map(movie => <SliderItem3 key={movie.id} movieData={movie}/>)}
      </Slider>
    </div>
    </div>
  )
}
