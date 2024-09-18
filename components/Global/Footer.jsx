import { FOOTER_ICONS } from "@/constants";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#10112fb0] py-14 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:justify-between">
          {/* SOCIALS */}
          <div className="flex-1 flex gap-8">
            {FOOTER_ICONS.map((icon, index) => {
              return (
                <Link href={icon.href} key={index}>
                  <div className="relative w-6 h-6">
                    <Image
                      src={icon.src}
                      fill
                      alt=""
                      className="object-contain"
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* LOGO */}
          <div className="flex-1 flex justify-center">
            <Logo />
          </div>

          {/* COPYRIGHT */}
          <p className="flex-1 flex justify-end font-light gap-2">
            &copy; جميع الحقوق محفوظة لمنصة{" "}
            <b className="text-accent_secondary">استثمارك</b> لعام 2024
          </p>
        </div>
      </div>

      <p className="flex items-center justify-center lead font-light gap-2">
        تم التصميم والتطوير بواسطة{" "}
        <Link href="https://maroo-portfolio.vercel.app/" target="_blank">
          <b className="text-accent_secondary">مارو عصام</b>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
