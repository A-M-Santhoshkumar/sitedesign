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
  const baseClass = `theme-sk-btn relative inline-flex items-center justify-center px-6 md:px-10 py-0 h-12
  text-sm md:text-base leading-6 rounded-lg cursor-pointer select-none transition-all duration-200
  ${
    isActive
      ? "active:bg-primary dark:bg-white dark:text-black text-white bg-primary border-2 border-primary"
      : "text-gray-950 dark:bg-white dark:text-black bg-white border-2 border-white"
  }`;

  const content = (
    <>
      {children}
      {icon && (
        <span className={`theme-sk-arrow ${isActive ? "text-white" : "text-gray-950"}`}>
          →
        </span>
      )}
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