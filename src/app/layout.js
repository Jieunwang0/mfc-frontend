import { Inter } from "next/font/google";
import "./globals.css";
import StarrySky from "@/components/StarryskyLayout";

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
        <StarrySky position='fixed' /> 
        {children}
      </body>
    </html>
  );
}
