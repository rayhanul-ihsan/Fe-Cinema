import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { searchMovies } from "../../store/async/movie";

const Search = () => {
  const searchState = useSelector((state) => state.movie.search);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") return;
    dispatch(searchMovies(searchQuery));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-screen justify-normal bg-black container mx-auto px-4 md:px-0 py-10 items-center">
        <form onSubmit={handleSearch} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Cari film..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-md"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-[#0EA5E9] rounded-md"
          >
            Search
          </button>
        </form>

        <div className=" px-4 text-white md:px-0">
          {searchState?.length > 0 && (
            <div className="mt-4">
              {/* <h2 className="text-2xl">Search Results:</h2> */}
              {searchState.map((movie) => {
                return (
                  <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <p key={movie.id}>{movie.name}</p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
