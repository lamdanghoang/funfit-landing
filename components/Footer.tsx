import Facebook from "@/assets/facebook";
import Instagram from "@/assets/instagram";
import LinkedIn from "@/assets/linkedIn";
import { MailIcon, MoveRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white pt-12 md:pt-24 bg-sandow-gray-80 rounded-t-[48px]">
      <div className="px-15 md:px-32 flex flex-col gap-6 md:gap-16">
        <Image
          className="md:mx-auto"
          src="/funfit-logo.svg"
          alt="funfit logo"
          width={53}
          height={60}
        />
        <div className="md:hidden -mr-20 flex gap-8">
          <Facebook />
          <Instagram />
          <LinkedIn />
        </div>
        <div className="md:flex items-center justify-between">
          <div className="flex gap-6 md:gap-12">
            <Link href="#" className="font-medium md:text-xl">
              Home
            </Link>
            <Link href="#" className="font-medium md:text-xl">
              Services
            </Link>
            <Link href="#" className="font-medium md:text-xl">
              Product
            </Link>
          </div>
          <div className="hidden -mr-20 md:flex gap-8">
            <Facebook />
            <Instagram />
            <LinkedIn />
          </div>
          <div className="mt-3 md:mt-0 flex gap-6 md:gap-12">
            <Link href="#" className="font-medium md:text-xl">
              About Us
            </Link>
            <Link href="#" className="font-medium md:text-xl">
              Contact Us
            </Link>
            <Link href="#" className="font-medium md:text-xl">
              Resources
            </Link>
          </div>
        </div>
        <div className="mx-auto mb-4 p-4 flex w-xs md:w-sm items-center justify-between text-sandow-gray-40 bg-sandow-gray-90 rounded-3xl">
          <div className="flex items-center gap-2 text-sandow-gray-20">
            <MailIcon />
            <input
              className="w-full md:w-3xs"
              placeholder="Subscribe to newsletter..."
            ></input>
          </div>
          <MoveRightIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
