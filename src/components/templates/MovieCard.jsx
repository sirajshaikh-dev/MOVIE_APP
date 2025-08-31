
import React, { useState } from "react";

const MovieCard = ({ movie }) => {
    const [readMore, setReadMore] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const title = movie.title || movie.name || movie.original_title || movie.original_name || "Untitled";
    const overview = movie.overview || "No overview available.";
    const releaseDate = movie.release_date || movie.first_air_date || "N/A";
    const rating = movie.vote_average?.toFixed(1) || "N/A";
    const genre = movie.genre_ids?.length > 0 ? movie.genre_ids[0] : null;

    const description = readMore
        ? overview
        : overview.length > 100
            ? overview.slice(0, 100) + "..."
            : overview;

    const imageUrl = movie.backdrop_path || movie.poster_path || movie.profile_path;
    const fullImageUrl = imageUrl
        ? `https://image.tmdb.org/t/p/w500${imageUrl}`
        : "https://placehold.co/250x400/1f2937/ffffff?text=No+Image";

    const getGenreName = (id) => {
        const genres = {
            28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 
            80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
            14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
            9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
            53: "Thriller", 10752: "War", 37: "Western"
        };
        return genres[id] || "Movie";
    };

    const genreName = genre ? getGenreName(genre) : "Movie";

    return (
        <div 
            className="min-w-[250px] max-w-[280px] min-h-[400px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl shadow-2xl flex flex-col text-white cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl border border-zinc-700/50 backdrop-blur-sm"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-52 overflow-hidden rounded-t-2xl group">
                <img
                    src={fullImageUrl}
                    alt={title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                    onError={(e) => {
                        e.target.src = "https://placehold.co/250x400/1f2937/ffffff?text=No+Image";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Rating badge */}
                <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm px-2 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {rating}
                </div>
                
                {/* Genre tag */}
                <div className="absolute bottom-3 left-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {genreName}
                </div>
                
                {/* Overlay with quick info */}
                <div className={`absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0`}>
                    <div className="text-center">
                        <h4 className="font-bold text-lg mb-1">{title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{releaseDate.split('-')[0]}</p>
                        <div className="flex items-center justify-center gap-4 text-xs">
                            <span className="bg-green-600 px-2 py-1 rounded-full">{rating}/10</span>
                            <span className="bg-blue-600 px-2 py-1 rounded-full">{genreName}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col flex-grow p-5 text-gray-300">
                <div className="space-y-3">
                    <div>
                        <h3 className="font-bold text-lg text-white mb-1 line-clamp-2" title={title}>
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                            <span>{releaseDate.split('-')[0]}</span>
                            <span>•</span>
                            <span>{genreName}</span>
                        </div>
                    </div>
                    
                    <p className="whitespace-pre-line leading-relaxed text-sm text-gray-300 flex-grow transition-all duration-300 line-clamp-4">
                        {description}
                    </p>
                    
                    {overview.length > 100 && (
                        <button
                            className="text-blue-400 hover:text-blue-300 font-medium text-sm mt-2 flex items-center gap-1 transition-colors duration-200 group"
                            onClick={() => setReadMore(!readMore)}
                            aria-expanded={readMore}
                        >
                            {readMore ? "Show less" : "Show more"}
                            <svg 
                                className={`w-4 h-4 transition-transform duration-200 ${readMore ? 'rotate-180' : 'rotate-0'}`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    )}
                </div>
                
                {/* Subtle bottom accent */}
                <div className="mt-4 pt-3 border-t border-zinc-700/50">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>TMDB Featured</span>
                        <div className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            <span>Editor's Pick</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Elegant corner accents */}
            <div className="absolute top-0 left-0 w-0 h-0 border-t-8 border-l-8 border-transparent border-t-blue-500 border-l-purple-500 rounded-tr-none rounded-bl-none opacity-70"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-transparent border-t-purple-500 border-r-blue-500 rounded-tl-none rounded-br-none opacity-70"></div>
        </div>
    );
};

export default MovieCard;
