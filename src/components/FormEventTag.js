"use client";
import React, { useState, useEffect } from "react";
import { isEmptyValue, sanitizeHashTag } from "@/lib/hashTag";

const FormEventTag = React.memo(({ onChange }) => {
 const [inputTag, setInputTag] = useState("");
  const [hashTags, setHashTags] = useState([]);

  useEffect(() => {
    onChange(hashTags);
  }, [hashTags, onChange]);

  const handleHashTag = (e) => {
    if (!["Enter", "Space", "NumpadEnter"].includes(e.code)) return;

    let newHashTag = sanitizeHashTag(e.currentTarget.value);

    if (!isEmptyValue(newHashTag) && !hashTags.includes(newHashTag) && hashTags.length < 10) {
      setHashTags((prevHashTags) => Array.from(new Set([...prevHashTags, newHashTag])));
      setInputTag("");
    }
  };

  const handleEnterKey = (e) => {
    if (!["Enter", "NumpadEnter"].includes(e.code)) return;
    e.preventDefault();

    const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
    if (!regExp.test(e.currentTarget.value)) setInputTag("");
  };

  const handleChange = (e) => {
    setInputTag(e.target.value);
  };

  const handleDeleteHashTag = (hashTagToDelete) => {
    setHashTags(hashTags.filter((hashTag) => hashTag !== hashTagToDelete));
  };

  return (
    <div>
      <label>태그</label>
      <div className="hash-tag-container">
        {hashTags.map((hashTag) => (
          <div key={hashTag} className="hash-tag">
            {hashTag}
            <button onClick={() => handleDeleteHashTag(hashTag)}>X</button>
          </div>
        ))}
      </div>
      <input
        value={inputTag}
        onChange={handleChange}
        onKeyUp={handleHashTag}
        onKeyDown={handleEnterKey}
      />
    </div>
  );
});

export default FormEventTag;
