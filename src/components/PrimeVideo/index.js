import MoviesSlider from '../MoviesSlider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PrimeVideo = ({moviesList}) => {
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  console.log('Action Movies:', actionMovies)
  console.log('Comedy Movies:', comedyMovies)

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-category-container">
        <h1 className="movies-category-title">Action Movies</h1>
        <MoviesSlider movies={actionMovies} />
      </div>

      <div className="movies-category-container">
        <h1 className="movies-category-title">Comedy Movies</h1>
        <MoviesSlider movies={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
