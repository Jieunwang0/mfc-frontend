import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import FormEventTitle from "./FormEventTitle";
import FormEventContent from "./FormEventContent";
import FormEventDateBg from "./FormEventDateBg";
import FormEventTag from "./FormEventTag";

export default function AddEvent() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tag: [],
    beginTimeBg: "",
    endTimeBg: "",
  });

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  const handleTitleChange = useCallback((Title) => {
    setFormData((prevData) => ({ ...prevData, title: Title }));
  }, []);

  const handleContentChange = useCallback((Content) => {
    setFormData((prevData) => ({ ...prevData, content: Content }));
  }, []);

  const handleTagChange = useCallback((Tag) => {
    setFormData((prevData) => ({ ...prevData, tag: Tag }));
  }, []);

  const handleDateChange = useCallback(({ beginTimeBg, endTimeBg }) => {
    setFormData((prevData) => ({ ...prevData, beginTimeBg, endTimeBg }));
  }, []);

  const submitBtn = useCallback(
    async (e) => {
      e.preventDefault();
      const { title, content, tag, beginTimeBg, endTimeBg } = formData;

      if (!title || !content || !tag || !beginTimeBg) {
        alert("필수 입력값을 모두 작성해주세요.");
        return;
      }

      try {
        const dbData = { title, content, tag, beginTimeBg, endTimeBg };

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
      <div className="flex items-center justify-center w-2/3">
        <form onSubmit={submitBtn} className="w-full">
          <FormEventTitle onChange={handleTitleChange} />
          <FormEventContent onChange={handleContentChange} />
          <FormEventTag onChange={handleTagChange} />
          <FormEventDateBg onDateChange={handleDateChange} />
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
