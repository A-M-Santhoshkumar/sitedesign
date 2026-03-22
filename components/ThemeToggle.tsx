"use client";

import { useTheme } from "./ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="relative flex gap-3 items-center bg-gray-300 dark:bg-gray-700 rounded-full px-1 py-1 w-20">

      {/* Slider */}
      <div
        className={`absolute top-1 left-1 w-8 h-8 rounded-full  bg-white dark:bg-black  shadow-md transition-all duration-300 ${
          isDarkMode ? "translate-x-[44px]" : "translate-x-0"
        }`}
      ></div>

      {/* Light */}
      <button
        onClick={toggleTheme}
        className={`z-10 p-1 text-xl ${
          !isDarkMode ? "text-yellow-500" : "text-yellow-500"
        }`}
      >
        <IoSunnyOutline />
      </button>

      {/* Dark */}
     <button
  onClick={toggleTheme}
  className={`z-10 p-1 text-xl ${
    isDarkMode ? "text-white" : "text-gray-700"
  }`}
>
  <FiMoon />
</button>
    </div>
  );
}

export default ThemeToggle;
