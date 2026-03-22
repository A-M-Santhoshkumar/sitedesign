"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isDarkMode } = useTheme();

  const navData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Projects", link: "/projects" },
    { id: 4, title: "Service", link: "/service" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`sticky top-0 z-50 ${isDarkMode ? 'bg-[#111]' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-800' : 'border-[#d8d7d3]'}`}>

      {/* Gradient border (dark mode) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] hidden dark:block">
        <div className="w-full h-full bg-hero-gradient" />
      </div>

      <div className="flex justify-between items-center py-4 container">

       <Image
  src="/images/minilogo.png"
  alt="logo"
  width={120}
  height={40}
  className="w-[64px] h-auto"
  priority
/>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navData.map((item) => (
            <li
              key={item.id}
              className={`list-none transition pb-1 ${
                isActive(item.link)
                  ? "text-[#f9bd3f] border-b-2 border-[#f9bd3f]"
                  : `${isDarkMode ? 'text-white' : 'text-black'} hover:border-b-2 hover:border-yellow-300 dark:hover:border-white`
              }`}
            >
              <Link href={item.link} className="text-base hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:bg-clip-text hover:text-transparent    font-medium">
                {item.title}
              </Link>
            </li>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            <RxHamburgerMenu />
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navData.map((item) => (
              <li
                key={item.id}
                className={`pb-2 border-b ${
                  isActive(item.link)
                    ? "text-[#f9bd3f] border-[#f9bd3f]"
                    : `${isDarkMode ? 'text-white border-gray-700' : 'text-black border-gray-300'}`
                }`}
              >
                <Link
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
