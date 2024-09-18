import Footer from "@/components/Global/Footer";
import "./globals.css";
import { Tajawal } from "next/font/google";

const font = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800", "900"],
});

export const metadata = {
  title: "استثمارك",
  description: "This Website Build By Maro Asam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/fav.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>

      <body
        className={`${font.className} bg-body bg-cover bg-no-repeat antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
