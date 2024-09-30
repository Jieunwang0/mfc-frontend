import React, { useState } from "react";

const FormEventTag = React.memo(({ onChange }) => {
   const [tag, setTag] = useState("");

   const handleChange = (e) => {
     setTag(e.target.value);
     onChange(e.target.value);
   };

  return (
    <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
      <label className="w-1/3 text-white font-semibold text-[20px]">태그</label>
      <input
        type="text"
        name="tag"
        value={tag}
        onChange={handleChange}
        className="w-2/3 px-2 py-1 rounded-md"
        placeholder="Tag"
      />
    </div>
  );
});

export default FormEventTag;
