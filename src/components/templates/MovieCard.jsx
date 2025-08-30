import React, { useState } from "react";

const MovieCard = ({ movie }) => {
    // console.log('movie',movie);
    const [readMore, setReadMore] = useState(false);

    const title = movie.title || movie.name || movie.original_title || movie.original_name || "Untitled";
    const overview = movie.overview || "No overview available.";

    const description = readMore
        ? overview
        : overview.length > 100
            ? overview.slice(0, 100) + "..."
            : overview;

    const imageUrl = movie.backdrop_path || movie.poster_path || movie.profile_path;
    const fullImageUrl = imageUrl
        ? `https://image.tmdb.org/t/p/w500${imageUrl}`
        : "https://placehold.co/250x400/1f2937/ffffff?text=No+Image";

    return (
        <div className="min-w-[220px] max-w-[250px] min-h-[320px] bg-zinc-900 rounded-xl shadow-lg flex flex-col text-white cursor-pointer">
            <div className="relative h-44 overflow-hidden rounded-t-xl">
                <img
                    src={fullImageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = "https://placehold.co/250x400/1f2937/ffffff?text=No+Image";
                    }}
                />
                <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <h3
                        className="font-bold text-base"
                        title={title}
                    >
                        {title}
                    </h3>
                </div>
            </div>
            <div className="flex flex-col flex-grow p-4 text-gray-300 text-sm">
                <p className="whitespace-pre-line leading-relaxed flex-grow">
                    {description}
                </p>
                {overview.length > 100 && (
                    <span
                        className="text-blue-400 cursor-pointer hover:text-blue-300 hover:underline font-medium text-sm"
                        onClick={() => setReadMore(!readMore)}
                        aria-expanded={readMore}
                    >
                        {readMore ? "Show less" : "Show more"}
                    </span>
                )}
            </div>
        </div>
    );
};

export default MovieCard;