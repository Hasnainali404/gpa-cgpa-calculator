import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "GPA & CGPA Calculator — Track Your Academic Performance",
  description: "Smart GPA & CGPA calculator built for university students. Track semester performance, predict your CGPA, and stay on top of your academic goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-950 text-white min-h-screen`}
        cz-shortcut-listen="true"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
