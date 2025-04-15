import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Footer from "./components/Footer";
import { useFetch } from "./hook/useFetch";

const API_KEY = "d0a93350d6c07fa51026526dd08c97fe";

function App() {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");

  const { data, loading, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
    setUrl(apiUrl);
  };

  return (
    <>
      <div className="min-h-screen py-10 px-4">
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-7xl">
          <div className="p-3">
            <div className="text-center mb-8">
              <h1 className="font-bold text-4xl">Movie Explorer</h1>
            </div>

            <SearchBar
              movies={query}
              setMovies={setQuery}
              handleSubmit={handleSubmit}
              loading={loading}
            />

            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
                <p>Error: {error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {data?.results?.length > 0
                ? data.results
                    .slice(0, 8)
                    .map((movie, index) => (
                      <MovieCard key={index} movies={movie} />
                    ))
                : url &&
                  !loading && (
                    <p className="text-center col-span-full text-gray-500">
                      No movies found.
                    </p>
                  )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
