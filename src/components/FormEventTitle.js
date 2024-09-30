import React, { useState } from "react";

const FormEventTitle = React.memo(({ onChange }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    onChange(e.target.value);
  };
  return (
    <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
      <label className="w-1/3 font-semibold text-[20px] text-white">사건명</label>
      <textarea
        name="title"
        maxLength={20}
        value={title}
        onChange={handleChange}
        className="w-2/3 px-2 py-1 rounded-md"
        placeholder="사건명을 간략히 작성해주세요. (최대 20자)"
      />
    </div>
  );
});

export default FormEventTitle;
