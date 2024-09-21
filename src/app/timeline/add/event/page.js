"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddEventModal() {
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
    <div className="w-[500px] h-auto text-white">
      <button type="button" onClick={onClose}>
        Close
      </button>
      <form onSubmit={submitBtn}>
        {/* 여기부터 유저가 직접 작성할 부분 */}
        <div>
          <label>등록할 사건</label>
          <textarea
            name="content"
            maxLength={25}
            value={formData.content}
            onChange={handleChange}
            placeholder="사건 이름을 간략히 작성해주세요. (최대 25자)"
          />
        </div>
        <div>
          <label>시대적 배경</label>
          <div>여기에 라디오 버튼</div>
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
      </form>
    </div>
  );
};
