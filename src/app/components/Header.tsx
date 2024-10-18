"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import useScreenWidth from "../hooks/useScreenWidth";

const links = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About Us",
    href: "#about",
  },
  {
    id: 3,
    title: "Services",
    href: "#services",
  },
];

const Header = () => {
  const pathname = usePathname();
  const screenWidth = useScreenWidth();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 bg-white z-10 lg:flex items-center gap-3 lg:gap-6 justify-between lg:justify-around py-3 pt-5 px-4 lg:px-0 shadow-sm ${
        isOpen ? "h-screen" : "h-auto"
      }`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className="font-bold uppercase text-lg">
            <span className="text-primary">hr</span> mentor
          </h2>
        </Link>

        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoMdClose className="cursor-pointer lg:hidden text-2xl" />
          ) : (
            <HiOutlineMenuAlt3 className="cursor-pointer lg:hidden text-2xl" />
          )}
        </span>
      </div>

      <ul
        className={`lg:flex justify-center gap-10 ${
          isOpen ? "flex flex-col items-center pt-14" : "hidden"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.id}
            className={`text-sm font-semibold text-[#1C192D] hover:text-primary ${
              pathname === link.href
                ? "text-primary underline-animation"
                : "landing-page-hover"
            }`}
          >
            <Link
              href={link.href}
              onClick={() => screenWidth < 1000 && setIsOpen(!isOpen)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={`flex justify-center items-center gap-3 ${
          isOpen ? "pt-10" : "hidden lg:flex"
        }`}
      >
        <Link href="#">
          <button className="border border-primary h-[40px] text-primary hover:bg-primary hover:text-white rounded-md text-sm cursor-pointer px-7">
            Login
          </button>
        </Link>

        <Link href="#">
          <button className="bg-primary h-[40px] text-white rounded-md text-sm cursor-pointer px-7">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
