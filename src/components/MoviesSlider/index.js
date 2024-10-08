import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import './index.css'

const MoviesSlider = ({movies}) => {
  console.log('Movies in Slider:', movies)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  )
}

const SampleNextArrow = props => {
  const {className, style, onClick} = props
  return (
    <div
      className={`${className} next-arrow`}
      style={{...style}}
      onClick={onClick}
      role="button" // Indicating that this div acts like a button
      tabIndex="0" // Making it focusable via keyboard
      aria-label="next"
    >
      {/* Optional: Add inner content here */}
    </div>
  )
}

const SamplePrevArrow = props => {
  const {className, style, onClick} = props
  return (
    <div
      className={`${className} prev-arrow`}
      style={{...style}}
      onClick={onClick}
      role="button" // Indicating that this div acts like a button
      tabIndex="0" // Making it focusable via keyboard
      aria-label="previous"
    >
      {/* Optional: Add inner content here */}
    </div>
  )
}
export default MoviesSlider
