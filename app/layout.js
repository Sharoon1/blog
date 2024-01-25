import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(component)/header";
import Footer from "./(component)/footer";

export const metadata = {
  title: "Kajetan",
  description: "Kajetan Daroch car website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
