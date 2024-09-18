import { Inter } from "next/font/google";
import "./globals.css";
import StarrySky from "@/components/StarryskyLayout";
import ReduxProvider from "@/lib/Provider";
import ModalManager from "@/components/common/Modal";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | My Cinema",
    default: "Load..",
  },
  description: "Its Your Own Cinema Archive Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          {children}
          <ModalManager />       
        </ReduxProvider>
        <StarrySky />
      </body>
    </html>
  );
}
