import React from "react";

const MovieCard = ({ movies }) => {
  const vote =
    typeof movies.vote_average === "number"
      ? movies.vote_average.toFixed(1)
      : "N/A";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 overflow-hidden flex flex-col max-w-[400px]">
      <img
        src={
          movies.poster_path
            ? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
            : "https://placehold.co/800x400?text=No+Image"
        }
        alt={movies.title}
        className="w-[400px] h-[200px] object-cover"
      />
      <div className="py-4 px-4 flex flex-col flex-grow">
        <h3 className="mb-2 font-bold text-lg line-clamp-2">{movies.title}</h3>
        <div className="flex gap-2 text-center mb-2">
          <span className="bg-yellow-500 p-2 font-bold text-sm rounded-lg">
            {vote}
          </span>
          <span className="mt-2 text-sm">
            {movies.release_date?.slice(0, 4) || "N/A"}
          </span>
        </div>
        <p className="line-clamp-2 text-sm mt-3 text-gray-600">
          {movies.overview || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
