"use client";
import { useState, useEffect } from "react";
export default function StarrySky() {
  const [stars, setStars] = useState([]);
  const style = ["w-[1px] h-[1px]", "w-[1.5px] h-[1.5px]", "w-[2px] h-[2px]"];
  const opacity = ["opacity-50", "opacity-100", "opacity-10", "opacity-50", "opacity-10"];
  const twinkle = ["animate-twinkle1", "animate-twinkle2", "animate-twinkle3", "animate-twinkle4"];

  const getRandomValue = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };
  const maxNum = 300; // maxNum 임의로 넣었는데 변경 가능
  
// useEffect => nextjs의 window 객체 참조 오류 관련해서 window 사용하기 위해 useEffect로 묶고 그 안에서 사용
  useEffect(() => {
      if (typeof window !== "undefined") {
        const browserWidth = window.screen.width;
        const browserHeight = window.screen.height;
        let starArr = [];
        for (let i = 0; i < maxNum; i++) {
          const x = getRandomValue(browserWidth);
          const y = getRandomValue(browserHeight);
          const starSize = style[getRandomValue(style.length)];
          const starOpacity = opacity[getRandomValue(opacity.length)];
          const starTwinkle = twinkle[getRandomValue(twinkle.length)];

          starArr.push({
            id: i,
            x,
            y,
            starSize,
            starOpacity,
            starTwinkle,
          });
          
        }
        setStars(starArr);
      }
    },
    []);
  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white ${star.starSize} ${star.starOpacity} ${star.starTwinkle}`}
          style={{ left: star.x, top: star.y }}
        ></div>
      ))}
    </div>
  );
}
