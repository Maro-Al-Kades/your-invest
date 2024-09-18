import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className="relative w-[148px] h-[100px] flex">
      <Image src="/logo.svg" alt="logo" fill className="object-contain"  />
    </Link>
  );
};

export default Logo;
