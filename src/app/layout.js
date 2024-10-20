import { Inter } from "next/font/google";
import "./globals.css";
import StarrySky from "@/components/StarryskyLayout";
import Providers from "@/lib/Providers";
// import ModalManager from "@/components/common/Modal";
const inter = Inter({ subsets: ["latin"] });
import { getServerSession } from "next-auth";

export const metadata = {
  title: {
    template: "%s | My Cinema",
    default: "Load..",
  },
  description: "Its Your Own Cinema Archive Web",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <StarrySky />
          {children}
        </Providers>
      </body>
    </html>
  );
}
