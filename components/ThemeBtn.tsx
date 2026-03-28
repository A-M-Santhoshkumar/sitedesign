import Link from "next/link";

interface ThemeBtnProps {
  children?: React.ReactNode;
  href?: string;
  icon?: boolean;
  isActive?: boolean;
}

function ThemeBtn({
  children = "Click Me",
  href,
  icon = true,
  isActive = true,
}: ThemeBtnProps) {

  const baseClass = `
    theme-sk-btn group relative inline-flex items-center justify-center gap-2
    px-7 md:px-10 h-12 text-sm md:text-base font-medium rounded-full
    bg-white text-white dark:bg-white dark:text-gray-900
    cursor-pointer select-none overflow-hidden
    transition-all duration-300 hover:shadow-lg active:scale-[0.98]
  `.trim();

  const Arrow = () => (
    <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </span>
  );

  const content = (
    <>
      {/* Colored dot — bottom-right corner, hides on hover */}
      {isActive && (
        <span className=" absolute bottom-0 right-0 w-3 h-3 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 transition-opacity duration-300 group-hover:opacity-0" />
      )}

      <span className="relative z-10">{children}</span>
      {icon && <Arrow />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    );
  }

  return <button className={baseClass}>{content}</button>;
}

export default ThemeBtn;