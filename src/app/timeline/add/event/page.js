"use client";
import AddEvent from "@/components/AddEvent";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddEventModal() {
  
  return (
    <div className="absolute flex items-center justify-center w-full h-screen">
      <div className="flex justify-center w-1/2 p-10">
        <div className="flex-row">
          <div className="font-bold text-white text-[35px]">
            <p>역사적 사건</p>
            <p>입력하기</p>
          </div>
          <div className="font-semibold text-white text-[16px]">
            <p>사건을 입력하고</p>
            <p>시대의 흐름을 살펴보아요!</p>
          </div>
        </div>
      </div>
      <AddEvent />
    </div>
  );
};
