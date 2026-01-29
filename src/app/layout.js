import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/animations/SmoothScroll";

const helveticaNeue = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueRegular.ttf",
      weight: "400",
      style: "light",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

export const metadata = {
  title: "Unity Interiors - Best Interior Designer Ahmedabad - Architecture Planning",
  description: "Unity Interiors - Best Interior Designer Ahmedabad - Architecture Planning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={helveticaNeue.variable}>
        <SmoothScroll>
        <Header />
        {children}
        <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
