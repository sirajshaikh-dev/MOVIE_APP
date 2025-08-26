import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axios";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axiosInstance.get(`/search/multi?query=${query}`);
      console.log("Search data results:", data.results)
      console.log("poster path", data.results.map((p) => p.backdrop_path))
      setSearches(data.results);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-300"
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {query.length > 0 && (
        <i
          className="ri-close-line text-3xl text-red-400"
          onClick={() => setQuery("")}
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
        {searches.map((search, i) => (
          <Link
            key={i}
            className="font-semibold text-zinc-600 flex w-full p-4 justify-start items-center gap-2 border-b-2 border-zinc-100 
            hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img className="w-[10vh] h-[10vh] object-cover rounded shadow-2xs"
              src={
                search.backdrop_path || search.poster_path
                  ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.poster_path || search.profile_path}`
                  : ""
              }
              alt="" />
            <span>{search.name || search.title || search.original_name || search.original_title}</span>
          </Link>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default Topnav;
