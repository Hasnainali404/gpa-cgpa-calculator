import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Professional typography: Inter for body, Outfit for headings
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "GPA & CGPA Calculator | Modern Academic Tools",
  description: "Calculate your semester GPA and cumulative CGPA with our professional, easy-to-use modern calculator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-950 text-white min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
