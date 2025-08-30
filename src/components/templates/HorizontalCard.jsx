import MovieCard from "./MovieCard";


const HorizontalCard = ({ trendingMovies }) => {
  return (
    <div className="w-full ">
      <div className="">
        <h1 className='font-bold text-4xl m-3 text-zinc-400'>Trending🔥</h1>
      </div>
      <div className="flex gap-4 overflow-x-auto p-3">
        {trendingMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default HorizontalCard;
