import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const KAKAO_CLIENT_ID = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY;
const KAKAO_SECRET = process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET;

const authOptions = {
  providers: [
    KakaoProvider({
      clientId: KAKAO_CLIENT_ID,
      clientSecret: KAKAO_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
