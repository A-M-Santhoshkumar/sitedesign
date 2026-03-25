"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


interface NavItem {
  id: number;
  title: string;
  link: string;
}

interface IconItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}

function Footer() {
  const footerNav: NavItem[] = [
 { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/about" },
    { id: 3, title: "Projects", link: "/projects" },
    { id: 4, title: "Service", link: "/service" },
    { id: 5, title: "Contact", link: "/contact" },
  ];

  const icons: IconItem[] = [
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/santhoshkumar-a-m-85a46627a/",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "mailto:amsanthoshkumar2@gmail.com", 
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/A-M-Santhoshkumar",
    },
  ];

  return (
    <footer className="layout-wrapper">
      
  
      <div className="bottom-0 left-0 w-full h-0.5 hidden dark:block">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(329deg, #FF91FA 13.55%, #FA6490 48.54%, #F7D86A 86.44%)",
          }}
        />
      </div>

      <div className="container layout-wrapper bg-white border-t border-black">
        
     
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
          
      
          <div className="w-1/2 md:w-2/12">
            <Image
              src="/images/logo-footer.png"
              alt="logo"
              width={200}
              height={80}
              className="w-full h-auto"
            />
          </div>

          
          <ul className="text-center md:flex gap-4 py-4">
            {footerNav.map((item) => (
              <li key={item.id}>
                <Link href={item.link} className="hover:text-primary transition">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          
          <p className="text-center">
            © {new Date().getFullYear()} Sitedesign. All Rights Reserved.
          </p>

        
          <div className="flex gap-3 py-4">
            {icons.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="dark:bg-black bg-white p-3 icons-fotter-bg dark:darkicons-fotter-bg mt-1"
              >
                <item.icon className="text-xl hover:text-white dark:hover:text-black transition" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;