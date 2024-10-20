"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
// import SearchIcon from "public/image/manimirror.svg";
// import emptyIcon from "public/image/emptymirror.svg";
import { Manimirror } from "./svg/Airbnb";
import { Emptymirrior } from "./svg/Airbnb";
const Search = ({onChange}) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  useEffect(() => {
    const fetchMockdata = async () => {
      try {
        const res = await fetch("/api/mock");
        if (!res.ok) {
          throw new Error("mockapi res NOT OK");
        }
        const data = await res.json();
        setSearchResult(data.movies);
      } catch (error) {
        console.error("Failed to fetch movies : ", error);
      }
    };
    fetchMockdata();
  }, []);
  
  const handleSearch = (e) => {
    setSearchKeyword(e);
  };

  const filteredSearchResult = searchResult.filter((movie) =>
    movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
    const handleMovieSelect = (movie) => {
      onChange(movie);
      setSearchKeyword("");
    };
 return (
    <div className="w-full py-5 h-5/6">
      <div className="rounded-md bg-neutral-100 py-[8px] pl-[10px] pr-[36px] gap-3 flex justify-center z-20">
        <div className="flex items-center w-full">
          <Manimirror style={{ width: 24, height: 24 }} />
          <input
            type="text"
            name="search"
            value={searchKeyword}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="영화 제목을 검색해보세요."
            className="w-full pl-3 text-sm bg-transparent outline-none placeholder:text-neutral-400"
          />
        </div>
      </div>

      <div className="flex justify-center w-full h-full mt-6 overflow-x-hidden overflow-y-auto text-white">
        {searchKeyword.length > 0 ? (
          <ul className="grid justify-start w-full grid-cols-3 gap-4 mt-5">
            {filteredSearchResult.map((movie) => (
              <li key={movie.id} className="flex-row cursor-pointer" onClick={() => handleMovieSelect(movie)}>
                <div className="">{movie.posterURL}</div>
                <div className="">{movie.title}</div>
                <div className="">{movie.directorName}</div>
                <div className="">{movie.startYear}</div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center w-full h-full mt-4">
            <div className="flex-row">
              <div className="flex justify-center pb-4">
                <Emptymirrior alt="검색 결과 없음" style={{ width: 100, height: 100 }} />
              </div>
              <div className="font-semibold text-white text-[25px]">앗! 검색 내용이 없어요.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
