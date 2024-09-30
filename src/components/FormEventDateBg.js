import React, { useState, useEffect } from "react";

const eraDefinitions = {
  C: {
    centuryTypes: {
      early: { start: "000000", end: "200000" },
      mid: { start: "210000", end: "600000" },
      late: { start: "610000", end: "990000" },
    },
    validate: (centuryValue, centuryType) => {
      return centuryValue && centuryType;
    },
  },
};

const FormEventDateBg = React.memo(({ onDateChange }) => {
  const [radioSelection, setRadioSelection] = useState("A");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [centuryValue, setCenturyValue] = useState("");
  const [centuryType, setCenturyType] = useState("");

  const handleRadioChange = (e) => {
    setRadioSelection(e.target.value);
  };

  useEffect(() => {
    const getFormattedDate = () => {
      let beginTimeBg, endTimeBg;
      switch (radioSelection) {
        case "A":
          beginTimeBg = `${year}${month.padStart(2, "0")}${day.padStart(2, "0")}`;
          endTimeBg = beginTimeBg;
          break;
        case "B":
          beginTimeBg = `${startYear}0000`;
          endTimeBg = endYear ? `${endYear}0000` : beginTimeBg;
          break;
        case "C":
          const centuryYear = parseInt(centuryValue, 10) - 1;
          const { start: startCode, end: endCode } = eraDefinitions.C.centuryTypes[centuryType] || {
            start: "10000",
            end: "00000",
          };

          beginTimeBg = `${centuryYear}${startCode}`;
          endTimeBg = `${centuryYear}${endCode}`;
          break;
        default:
          return;
      }
      onDateChange({ beginTimeBg, endTimeBg });
    };

    getFormattedDate();
  }, [radioSelection, year, month, day, startYear, endYear, centuryValue, centuryType, onDateChange]);

  return (
    <div className="flex items-center justify-start w-full py-4 border-b-[1px]">
      <div className="w-1/3 font-semibold text-[20px] text-white">
        <label>시대적 배경</label>
        <div className="text-[14px]">
          {["A", "B", "C"].map((option) => (
            <label key={option} className="ml-4">
              <input
                type="radio"
                name="radioSelection"
                value={option}
                checked={radioSelection === option}
                onChange={handleRadioChange}
              />
              {option === "A" ? "년/월/일" : option === "B" ? "년대" : "세기"}
            </label>
          ))}
        </div>
      </div>

      {radioSelection === "A" && (
        <div className="w-2/3 text-white">
          <div className="flex items-center">
            <input
              type="text"
              name="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="*"
              maxLength={4}
              className="w-[130px] px-2 py-1 mr-2 rounded-md text-black"
              required
            />
            년
            <input
              type="text"
              name="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="option"
              maxLength={2}
              className="w-[50px] px-2 py-1 mr-2 rounded-md text-black"
            />
            월
            <input
              type="text"
              name="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="option"
              maxLength={2}
              className="w-[50px] px-2 py-1 mr-2 rounded-md text-black"
            />
            일
          </div>
        </div>
      )}

      {radioSelection === "B" && (
        <div className="py-4 text-white">
          <div className="flex items-center">
            <input
              type="text"
              name="startYear"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
              placeholder="*"
              maxLength={4}
              className="w-[130px] px-2 py-1 mr-2 rounded-md text-black"
              required
            />
            <div>연대 ~</div>
            <input
              type="text"
              name="endYear"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
              placeholder="option"
              maxLength={4}
              className="w-[130px] px-2 py-1 mr-2 rounded-md text-black"
            />
            <div>연대</div>
          </div>
        </div>
      )}

      {radioSelection === "C" && (
        <div className="flex justify-start py-4 text-white">
          <div>
            <input
              type="text"
              name="centuryValue"
              value={centuryValue}
              onChange={(e) => setCenturyValue(e.target.value)}
              placeholder="*"
              maxLength={2}
              className="w-[130px] px-2 py-1 mr-2 rounded-md text-black"
              required
            />
          </div>
          세기
          <div className="flex items-center mt-2">
            {["early", "mid", "late"].map((type) => (
              <label key={type} className="ml-4">
                <input
                  type="radio"
                  name="centuryType"
                  value={type}
                  checked={centuryType === type}
                  onChange={(e) => setCenturyType(e.target.value)}
                />
                {type === "early" ? "초" : type === "mid" ? "중" : "후"}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default FormEventDateBg;
