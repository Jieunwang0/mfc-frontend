"use client";

export default function LoginPage() {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
  const REDIRECT_URI = ""; // 도메인 따고 이후 추가, 해당 위치로 폴더 생성해서 redirect url 인가코드 추출, 백엔드 서버로 로그인 요청
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <h1 className="font-bold">마이 페이보릿 시네마</h1>
      <p className="font-bold text-neutral-400">내가 본 영화를 기록하고 타임 라인을 꾸며봐요!</p>
      <Link href={KAKAO_AUTH_URL}>
        <button type="button">카카오로 로그인하기</button>
      </Link>
    </>
  );
}
