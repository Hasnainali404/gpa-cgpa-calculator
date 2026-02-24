<<<<<<< HEAD
import { Inter, Outfit } from "next/font/google";
=======
import { Inter } from "next/font/google";
>>>>>>> eaa114ddb85ecf78f06c85700a873ea3cce72676
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

<<<<<<< HEAD
// Professional typography: Inter for body, Outfit for headings
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
=======
const inter = Inter({
>>>>>>> eaa114ddb85ecf78f06c85700a873ea3cce72676
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
<<<<<<< HEAD
  title: "GPA & CGPA Calculator | Modern Academic Tools",
  description: "Calculate your semester GPA and cumulative CGPA with our professional, easy-to-use modern calculator.",
=======
  title: "GPA & CGPA Calculator — Track Your Academic Performance",
  description: "Smart GPA & CGPA calculator built for university students. Track semester performance, predict your CGPA, and stay on top of your academic goals.",
>>>>>>> eaa114ddb85ecf78f06c85700a873ea3cce72676
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-950 text-white min-h-screen`}
        cz-shortcut-listen="true"
<<<<<<< HEAD
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-950 text-white min-h-screen`}
=======
>>>>>>> eaa114ddb85ecf78f06c85700a873ea3cce72676
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
