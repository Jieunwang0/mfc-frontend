"use client";
import AddMovieEvent from "@/components/AddMovieEvent";

export default function AddMovieModal() {
  return (
    <div className="absolute flex items-center justify-center w-full h-screen">
      <div className="flex justify-center w-1/2 p-10">
        <div className="flex-row">
          <div className="font-bold text-white text-[35px]">
            <p>영화정보</p>
            <p>등록하기</p>
          </div>
          <div className="font-semibold text-white text-[16px]">
            <p>재밌게 봤던 영화를</p>
            <p>입력해보세요!</p>
          </div>
        </div>
      </div>
      <AddMovieEvent />
    </div>
  );
}
