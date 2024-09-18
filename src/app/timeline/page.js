"use client";
import { useDispatch } from "react-redux";
import { openModal } from "@/lib/slices/modalSlice";

export default function TimeLine() {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      openModal({
        modalType: "ADD_MODAL",
        modalProps: {
          addMovie: "영화 등록하기",
          addEvent: "사건 등록하기",
        },
      })
    );
  };

  return (
    <div className="text-white w-[500px] h-auto">
      <button onClick={handleOpenModal}>이벤트 추가하기</button>
    </div>
  );
}
