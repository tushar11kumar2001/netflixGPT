import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { logo, trailer } from '../../utils/getMoviesData';

const PrimaryContainer = ({ lang }) => {
  const [idx, setIdx] = useState(null);
  const [image, setImage] = useState(null);
  const [mainMovie, setMainMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const movies = useSelector(store => store.MoviesList?.now_playing_movies);

  useEffect(() => {
    if (!movies || movies.length === 0) return;
    if (!idx) setIdx(Math.floor(Math.random() * movies.length));
    setMainMovie(movies[idx]);
    if (mainMovie) {
      logo(mainMovie.id).then((data) => { setImage(data) })
      trailer(mainMovie?.id).then((data) => setTrailerKey(data))
    }
  })
  if (!movies || movies.length === 0) return;

  return (
    <div className='relative overflow-x-hidden '>
      {mainMovie && <VideoTitle title={mainMovie?.original_title} description={mainMovie?.overview} img={image} lang={lang} trailerKey={trailerKey} />}
      {mainMovie && <VideoBackground trailerKey={trailerKey} />}
    </div>
  )
}

export default PrimaryContainer;
