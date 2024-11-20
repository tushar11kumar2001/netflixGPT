import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import { language } from "../../utils/language"
const SecondaryContainer = ({lang}) => {
  const nowPlayingMovies = useSelector(store => store.nowPlayingMoviesList)
  const popularMovies = useSelector(store => store.popularMoviesList)
  const topRatedMovies = useSelector(store => store.topRatedMoviesList)
  return (
    <div className="bg-black  text-white ">
      <div className="relative -mt-32 ">
        <MovieList title={language[lang].now_playing} movies={nowPlayingMovies.data} />
        <MovieList title={language[lang].top_rated}  movies={topRatedMovies.data} />
        <MovieList title={language[lang].popular} movies={popularMovies.data} />
        <MovieList title={language[lang].upcoming} movies={nowPlayingMovies.data} />
      </div>

    </div>
  )
}

export default SecondaryContainer
