import type {Metadata} from "next";
import "./globals.scss";
import {Roboto} from 'next/font/google';
import {Header} from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Укажите нужные веса
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <title>Game store</title>
    </head>
      <body className={`${roboto.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
