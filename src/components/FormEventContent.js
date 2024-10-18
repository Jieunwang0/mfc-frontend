import React from "react";

const FormEventContent = React.memo(({ onChange }) => {
    const handleChange = (e) => {
    onChange('content', e.target.value);
  };
  return (
    <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
      <label className="w-1/3 font-semibold text-[20px] text-white">설명</label>
      <textarea
        name="content"
        maxLength={40}
        onChange={handleChange}
        className="w-2/3 px-2 py-1 rounded-md"
        placeholder="사건을 간략히 설명해주세요. (최대 40자)"
      />
    </div>
  );
});

export default FormEventContent;
