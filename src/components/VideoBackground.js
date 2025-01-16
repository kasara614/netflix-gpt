import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  {/* one way to make a state variable and set trailer.key and use trailerId whenever we want but but but instead of this we use Redux Store for convenience
  const [trailerId, setTrailerId] = useState(null);
  setTrailerId(trailer.key); */}
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video object-cover"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  );
};

export default VideoBackground;