"use client";
import { signIn } from "next-auth/react";


export default function Home() {
  return (
    <div>
      <>
        <h1 className="font-bold text-white text-[20px]">마이 페이보릿 시네마</h1>
        <p className="font-bold text-neutral-400">내가 본 영화를 기록하고 타임 라인을 꾸며봐요!</p>
        <button
          className="text-white"
          type="button"
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/timeline" })}
        >
          카카오로 로그인하기
        </button>
      </>
    </div>
  );
}
