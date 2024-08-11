import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
const bodyFont = Montserrat({ 
    subsets: ["latin"], 
    weight:['400', '900', '700']
  });

export const metadata = {
  title: "Hexashop - Home",
  description: "Welcome,tlob w tmanna!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
