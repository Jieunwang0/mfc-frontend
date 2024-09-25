"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddEvent() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tag: "",
    radioSelection: "",
    year: "",
    month: "",
    day: "",
    centuryValue: "",
    centuryType: "",
    startYear: "",
    endYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitBtn = (e) => {
    e.preventDefault();

    let formattedData = {
      title: formData.title,
      content: formData.content,
      tag: formData.tag,
      beginTimeBg: "",
      endTimeBg: "",
    };

    if (formData.radioSelection === "A") {
      if (formData.year) {
        formattedData.beginTimeBg = `${formData.year}${formData.month.padStart(2, "0")}${formData.day.padStart(
          2,
          "0"
        )}`;
        formattedData.endTimeBg = formattedData.beginTimeBg;
      } else {
        alert("년도를 작성해주세요.");
        return;
      }
    } else if (formData.radioSelection === "B") {
      if (formData.startYear) {
        const startYear = parseInt(formData.startYear, 10);
        formattedData.beginTimeBg = startYear + "0000";
        
        const endYear = formData.endYear ? parseInt(formData.endYear, 10) : null;

        if (endYear !== null && endYear < startYear) {
          alert("종료 년대는 시작 년대보다 작을 수 업습니다");
          return;
        }

        formattedData.endTimeBg = (endYear !== null ? endYear : startYear) + "0000";
      } else {
        alert("시작 년대를 작성해주세요.");
        return;
      }
    } else if (formData.radioSelection === "C") {
      if (formData.centuryValue) {
        switch (formData.centuryType) {
          case "early":
            formattedData.beginTimeBg = formData.centuryValue - 1 + "000000";
            formattedData.endTimeBg = formData.centuryValue - 1 + "200000";
            break;
          case "mid":
            formattedData.beginTimeBg = formData.centuryValue - 1 + "210000";
            formattedData.endTimeBg = formData.centuryValue - 1 + "600000";
            break;
          case "late":
            formattedData.beginTimeBg = formData.centuryValue - 1 + "610000";
            formattedData.endTimeBg = formData.centuryValue - 1 + "990000";
            break;
          default:
            formattedData.beginTimeBg = formData.centuryValue - 1 + "000000";
            formattedData.endTimeBg = formData.centuryValue + 1 + "000000";
            return;
        }
      } else {
        alert("몇 세기인지 작성해주세요.");
        return;
      }
    }

    console.log("data for DB : ", formattedData);
    onClose();
  };
  return (
    <div className="relative flex justify-center w-full h-full backdrop-blur-sm bg-gray-100/10 backdrop-brightness-150">
      <div className="flex items-center justify-center w-2/3">
        <form onSubmit={submitBtn} className="w-full">
          <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
            <label className="w-1/3 font-semibold text-[20px] text-white">사건명</label>
            <textarea
              name="title"
              maxLength={20}
              value={formData.title}
              onChange={handleChange}
              className="w-2/3 px-2 py-1 rounded-md"
              placeholder="사건명을 간략히 작성해주세요. (최대 20자)"
            />
          </div>
          <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
            <label className="w-1/3 font-semibold text-[20px] text-white">설명</label>
            <textarea
              name="content"
              maxLength={40}
              value={formData.content}
              className="w-2/3 px-2 py-1 rounded-md"
              onChange={handleChange}
              placeholder="사건을 간략히 설명해주세요. (최대 40자)"
            />
          </div>
          <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
            <label className="w-1/3 text-white font-semibold text-[20px]">태그</label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              className="w-2/3 px-2 py-1 rounded-md"
              onChange={handleChange}
              placeholder="Tag"
            />
          </div>

          <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
            <div className="w-1/3 font-semibold text-[20px] text-white">
              <label className="font-semibold text-[20px] ">시대적 배경</label>
              <div className="text-[14px]">
                <label>
                  <input
                    type="radio"
                    name="radioSelection"
                    value="A"
                    checked={formData.radioSelection === "A"}
                    onChange={handleChange}
                    required
                  />
                  년/월/일
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="radioSelection"
                    value="B"
                    checked={formData.radioSelection === "B"}
                    onChange={handleChange}
                    required
                  />
                  년대
                </label>
                <label className="ml-4">
                  <input
                    type="radio"
                    name="radioSelection"
                    value="C"
                    checked={formData.radioSelection === "C"}
                    onChange={handleChange}
                    required
                  />
                  세기
                </label>
              </div>
            </div>

            {formData.radioSelection === "A" && (
              <div className="w-2/3 text-white">
                <div className="flex items-center">
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="*"
                    maxLength={4}
                    minLength={4}
                    className="w-[130px] px-2 py-1 mr-2 rounded-md"
                    required
                  />
                  년
                  <input
                    type="text"
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    placeholder="option"
                    maxLength={2}
                    className="w-[50px] px-2 py-1 mr-2 rounded-md"
                  />
                  월
                  <input
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    placeholder="option"
                    maxLength={2}
                    className="w-[50px] px-2 py-1 mr-2 rounded-md"
                  />
                  일
                </div>
              </div>
            )}

            {formData.radioSelection === "B" && (
              <div className="py-4 text-white">
                <div className="flex items-center">
                  <input
                    type="text"
                    name="startYear"
                    value={formData.startYear}
                    onChange={handleChange}
                    placeholder="*"
                    maxLength={4}
                    minLength={4}
                    className="w-[130px] px-2 py-1 mr-2 rounded-md"
                    required
                  />
                  <div>년대 ~</div>
                  <input
                    type="text"
                    name="endYear"
                    value={formData.endYear}
                    onChange={handleChange}
                    placeholder="option"
                    maxLength={4}
                    className="w-[130px] px-2 py-1 mr-2 rounded-md"
                  />
                  <div>년대</div>
                </div>
              </div>
            )}
            {formData.radioSelection === "C" && (
              <div className="flex justify-start py-4 text-white">
                <div className="">
                  <input
                    type="text"
                    name="centuryValue"
                    value={formData.centuryValue}
                    onChange={handleChange}
                    placeholder="*"
                    maxLength={2}
                    minLength={2}
                    className="w-[130px] px-2 py-1 mr-2 rounded-md"
                    required
                  />
                </div>
                세기
                <div className="flex items-center mt-2">
                  <label>
                    <input
                      type="radio"
                      name="centuryType"
                      value="early"
                      checked={formData.centuryType === "early"}
                      onChange={handleChange}
                    />
                    초
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="centuryType"
                      value="mid"
                      checked={formData.centuryType === "mid"}
                      onChange={handleChange}
                    />
                    중
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      name="centuryType"
                      value="late"
                      checked={formData.centuryType === "late"}
                      onChange={handleChange}
                    />
                    후
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center py-4">
            <button type="submit" className="w-[200px] py-1 text-black rounded-md bg-slate-200">
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
