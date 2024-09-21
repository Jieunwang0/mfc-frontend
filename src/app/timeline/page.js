"use client";
import Link from "next/link";

export default function Timeline() {

  return (
    <div className="text-white">
      <Link href={`/timeline/add/movie`}>영화 등록하기</Link>
      <Link href={`/timeline/add/event`}>사건 등록하기</Link>
    </div>
  );
}