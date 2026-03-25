export type ProjectType = {
  id: number;
  name: string;
  tool: string;
  link: string;
  img: string; // image path string for dynamic import
};

export const projectsData: ProjectType[] = [
  { id: 1,  name: "THE LABEL by MONA",              tool: "Shopify",               link: "https://thelabelbymona.com/",                img: "/images/Project/thelabelbymona.png" },
  { id: 3,  name: "JKKN DENTAL COLLEGE & HOSPITAL", tool: "Wordpress",             link: "https://dental.jkkn.ac.in/",                 img: "/images/Project/dental.png" },
  { id: 4,  name: "Automind Infotech",               tool: "Html",                  link: "https://automindinfotech.com/",               img: "/images/Project/automindinfotech.png" },
  { id: 5,  name: "Sk Greentech",                    tool: "Codeigniter (PHP)",     link: "https://skgreentech.in/",                     img: "/images/Project/skgreentech.png" },
  { id: 6,  name: "Grill Nights",                    tool: "Html, Css, Bootstrap",  link: "https://grillnights.in/",                     img: "/images/Project/grillnights.png" },
  { id: 7, name: "React Ecommerce",                 tool: "React, Tailwind",       link: "https://sitedesign-ecommerce.vercel.app/",    img: "/images/Project/ecommerce.png" },
  { id: 8, name: "Spotify Clone",                   tool: "React, Tailwind",       link: "https://saitify-spotify-clone.vercel.app/",   img: "/images/Project/spotify_clone.png" },
  { id: 9, name: "React Portfolio",                 tool: "Next.js, Tailwind",     link: "https://www.sitedesign.in/",                  img: "/images/Project/react_portfolio.png" },
];
// Dynamic list of unique tools (order preserved)
export const toolCategories: { label: string; key: string }[] = [
  ...new Map(
    projectsData.map((p) => [p.tool.toLowerCase(), { label: p.tool, key: p.tool.toLowerCase() }])
  ).values(),
];