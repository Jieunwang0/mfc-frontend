"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import Search from "@/components/Search";
import FormEventDateBg from "./FormEventDateBg";
import FormEventContent from "./FormEventContent";
import FormEventTag from "./FormEventTag";

export default function AddMovieEvent() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };
  
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    posterURL: "",
    tag: [],
    beginTimeBg: "",
    endTimeBg: "",
    directorName: "",
    releaseDate: "",
    startYear: "",
    endYear: "",
  });

  const handleSearchChange = useCallback((selectedMovie) => {
    setFormData((prevData) => ({
      ...prevData,
      title: selectedMovie.title,
      posterURL: selectedMovie.posterURL,
      directorName: selectedMovie.directorName,
      startYear: selectedMovie.startYear,
      endYear: selectedMovie.endYear,
      releaseDate: selectedMovie.releaseDate,
      tag: selectedMovie.tag,
    }));
  }, []);

  const handleDateChange = useCallback(({ beginTimeBg, endTimeBg }) => {
    setFormData((prevData) => ({ ...prevData, beginTimeBg, endTimeBg }));
  }, []);
  const handleTagChange = useCallback((Tag) => {
    setFormData((prevData) => ({ ...prevData, tag: Tag }));
  }, []);
  const handleContentChange = useCallback((Content) => {
    setFormData((prevData) => ({ ...prevData, content: Content }));
  }, []);

  const submitBtn = useCallback(
    async (e) => {
      e.preventDefault();
      const { title, content, tag, beginTimeBg, endTimeBg, releaseDate, directorName, startYear, endYear, posterURL } = formData;

      if (!content || !tag || !beginTimeBg) {
        alert("필수 입력값을 모두 작성해주세요.");
        return;
      }

      try {
        const dbData = {
          title,
          content,
          tag,
          beginTimeBg,
          endTimeBg,
          releaseDate,
          directorName,
          startYear,
          endYear,
          posterURL,
        };

        console.log("data for DB : ", dbData);

        // await sendToDatabase(dbData); 여기 db 보내기

        // onClose();
      } catch (error) {
        alert(error.message);
      }
    },
    [formData, onClose]
  );

  return (
    <div className="relative flex justify-center w-full h-full backdrop-blur-sm bg-gray-100/10 backdrop-brightness-150">
      <div className="flex justify-center w-2/3">
        <Search onChange={handleSearchChange} />
      </div>
      <form onSubmit={submitBtn} className="text-white">
        <div>
          <label>#영화 정보</label>
          <div>{formData.posterURL}</div>
          <div>{formData.title}</div>
          <div>{formData.directorName}</div>
          <div>{formData.releaseDate}</div>
        </div>
        <FormEventDateBg onDateChange={handleDateChange} />
        <FormEventContent onChange={handleContentChange} />
        <FormEventTag onChange={handleTagChange} />
        <div className="flex justify-center py-4">
          <button type="submit" className="w-[200px] py-1 text-black rounded-md bg-slate-200">
            등록하기
          </button>
        </div>
      </form>
    </div>
  );
}
