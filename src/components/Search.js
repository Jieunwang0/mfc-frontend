"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchIcon from 'public/image/manimirror.svg'

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const fetchMockdata = async () => {
      const res = await fetch("/api/mock");
      const data = await res.json();
      setSearchResult(data.movies);
    };
    fetchMockdata();
  }, []);
  const handleSearch = (e) => {
    setSearchKeyword(e);
  };

  const filteredSearchResult = searchResult.filter((movie) =>
    movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="p-4 ">
      <div className="flex items-center bg-neutral-100 py-[8px] pl-[10px] pr-[36px] gap-3">
        <Image src={SearchIcon} alt="search icon" style={{ width: 24, height: 24 }} />
        <input
          type="text"
          name="search"
          value={searchKeyword}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="영화 제목을 검색해보세요."
          className="w-full text-sm bg-transparent outline-none placeholder:text-neutral-400"
        />
      </div>
      <div className="text-white">
        {searchKeyword.length > 0 ? (
          <ul>
            {filteredSearchResult.map((movie) => (
              <li key={movie.id}>
                {movie.title} ({movie.startYear}) - {movie.tag}
              </li>
            ))}
          </ul>
        ) : (
          <p>EMPPPPTYYYYY</p>
        )}
      </div>
    </div>
  );
};
export default Search;
