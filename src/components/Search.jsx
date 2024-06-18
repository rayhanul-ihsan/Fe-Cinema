import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchComp = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer" + import.meta.env.VITE_ACCESS_TOKEN,
        },
      };

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/collection?include_adult=false&language=id-ID&page=1&query=${encodeURIComponent(
            searchQuery
          )}`,
          options
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-3/4 max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <input
          type="text"
          placeholder="Cari film..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        {searchResults.length > 0 && (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id} className="py-2 border-b border-gray-200">
                {movie.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchComp;
