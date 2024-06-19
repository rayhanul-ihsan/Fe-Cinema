import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { searchMovies } from "../../store/async/movie";

const Search = () => {
  const searchState = useSelector((state) => state.movie.search);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  console.log("data state", searchState);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") return;
    dispatch(searchMovies(searchQuery));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col w-screen h-screen bg-black container mx-auto px-4 md:px-0 py-10 items-center">
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

        {/* Display search results */}
        <div className="container mx-auto px-4 text-white md:px-0">
          {searchState?.length > 0 && (
            <div>
              <h2>Search Results:</h2>
                {searchState.map((movie) => {
                  return <p key={movie.id}>{movie.name}</p>;
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
