import Dropdown from "./Dropdown";
import MovieCard from "./MovieCard";


const HorizontalCard = ({ trendingMovies }) => {
  return (
    <div className="flex gap-4 overflow-x-auto p-3">
      {trendingMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>

  );
}

export default HorizontalCard;
