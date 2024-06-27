import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from './lib/utils';
import './styles/main.scss'
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SINC",
  description: "Created By Anyanwu Ifeanyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
      <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
