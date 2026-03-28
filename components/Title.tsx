import React, { ReactNode } from "react";

interface TitleProps {
  smallTitle?: ReactNode;   // ✅ change
  mainTitle?: ReactNode;    // ✅ change
  smallTitleClass?: string;
  mainTitleClass?: string;
  topSideAccess?: string;
  isWhite?: boolean;
  mainTag?: "h1" | "h2" | "h3";
  smallTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const Title: React.FC<TitleProps> = ({
  smallTitle,
  mainTitle,
  smallTitleClass = "",
  mainTitleClass = "",
  topSideAccess = "",
  isWhite = false,
  mainTag = "h2",
  smallTag = "h4"
}) => {
  const textColor = isWhite ? "text-white" : "text-black";

  const MainTag = mainTag;
  const SmallTag = smallTag;

  return (
    <div className={`${topSideAccess}`}>
      
      {smallTitle && (
        <SmallTag
          className={`dark:text-white text-sm md:text-lg font-medium py-2 ${smallTitleClass} ${textColor}`}
        >
          {smallTitle}
        </SmallTag>
      )}

      <MainTag
        className={`dark:text-white text-3xl md:text-4xl font-bold font-syne leading-snug ${mainTitleClass} ${textColor}`}
      >
        {mainTitle}
      </MainTag>

    </div>
  );
};

export default Title;
