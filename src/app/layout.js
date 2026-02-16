import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import ChatBot from "@/components/ChatBot/ChatBot";
// import SmoothScroll from "@/animations/SmoothScroll";

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
      path: "../fonts/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueRegular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});


export const metadata = {
  title: "Unity Interiors - Best Interior Designer Ahmedabad - Architecture Planning",
  description: "Unity Interiors - Best Interior Designer Ahmedabad - Architecture Planning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable} ${openSans.variable}`}>
        {/* <SmoothScroll> */}
        <Header />
        {children}
        <Footer />
        {/* <ChatBot /> */}
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
