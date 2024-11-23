import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import { language } from "../../utils/language"
const SecondaryContainer = ({lang}) => {

  const nowPlayingMovies = useSelector(store => store.MoviesList?.now_playing_movies);
  const popularMovies = useSelector(store => store.MoviesList?.popular_movies);
  const topRatedMovies = useSelector(store => store.MoviesList?.top_rated_movies);
  const upcomingMovies = useSelector(store => store.MoviesList?.up_coming_movies);

  return (
    <div className="bg-black  text-white ">
      <div className="relative -mt-32 ">
        <MovieList title={language[lang].now_playing} movies={nowPlayingMovies} />
        <MovieList title={language[lang].top_rated}  movies={topRatedMovies} />
        <MovieList title={language[lang].popular} movies={popularMovies} />
        <MovieList title={language[lang].upcoming} movies={upcomingMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer
