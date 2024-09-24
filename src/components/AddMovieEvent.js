"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Search from "@/components/Search";

export default function AddMovieEvent() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  const [formData, setFormData] = useState({
    title: "",
    startYear: "",
    endYear: "",
    keyword: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitBtn = (e) => {
    e.preventDefault();
    // 이후 api 들어오면 수정하고 여기에 데이터 보내는 로직 추가
    console.log("submitted modal form data!!:", formData);
    onClose();
  };
  return (
    <div className="relative flex justify-center w-full h-full backdrop-blur-sm bg-gray-100/10 backdrop-brightness-150">
      <div className="flex justify-center w-2/3">
        <Search />
      </div>

      {/* <form onSubmit={submitBtn} className="text-white">
        <div>
          <label>#영화 정보</label>
        </div>
        <div>
          <label>시대적 배경</label>
          <input type="radio" name="startYear" value={formData.startYear} onChange={handleChange} /> startYear
        </div>
        <div>
          <label>한줄평</label>
          <textarea
            name="content"
            maxLength={25}
            value={formData.content}
            onChange={handleChange}
            placeholder="한줄평을 간략히 작성해주세요. (최대 25자)"
          />
        </div>
        <div>
          <label>키워드</label>
          <input
            type="text"
            name="keyword"
            value={formData.keyword}
            onChange={handleChange}
            placeholder="Keyword Tag"
          />
        </div>
        <div>
          <button type="submit" onSubmit={submitBtn}>
            등록하기
          </button>
        </div>
      </form> */}
    </div>
  );
}
