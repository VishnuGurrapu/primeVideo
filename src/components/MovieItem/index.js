import {Popup} from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = ({movie}) => (
  <Popup
    modal
    trigger={
      <img
        src={movie.thumbnailUrl}
        alt="thumbnail"
        className="thumbnail-image"
      />
    }
    className="popup-content"
  >
    {close => (
      <div className="popup-video-container">
        <button
          className="close-button"
          type="button"
          onClick={() => close()}
          data-testid="closeButton"
        >
          <IoMdClose size={20} color="#231f20" />
        </button>
        <div className="video-player-container">
          <ReactPlayer url={movie.videoUrl} controls width="100%" />
        </div>
      </div>
    )}
  </Popup>
)

export default MovieItem
