"use client";

import ThemeBtn from "../ThemeBtn";
import Title from "../Title";
import Link from "next/link";
import { useTheme } from "../ThemeContext";

function Section1() {
  const { isDarkMode } = useTheme();

  return (
    <section className="section layout-wrapper">
      <div className="container">

        <div className={`section-box ${isDarkMode ? 'dark-section' : ''}`}>
          
          <div className="pr-2 pl-2 md:pr-5 md:pl-5">

            <Title
              smallTitle="ABOUT ME"
              mainTitle="Professional Digital Marketer & Full-Stack Web Developer"
              smallTitleClass="mb-4"
              isWhite={true}
            />

            <p className="text-white py-6 leading-relaxed text-base">
Hi, I’m Santhosh Kumar, a Freelance Digital Marketer in Coimbatore specializing in Google Ads, Meta Ads, SEO, and Website Design. I help startups, local businesses, and brands improve their online presence and generate quality leads.

              <br /><br />

Along with digital marketing, I specialize in website development using Shopify, WordPress, React, HTML, CSS, and JavaScript. I create fast, responsive, and SEO-optimized websites designed to improve online visibility and help businesses generate more leads.

              <br /><br />

My approach combines performance marketing and modern web design to deliver measurable results for businesses.

            </p>

            <div className="pt-4">
              <Link href="/about">
                <ThemeBtn icon={true} isActive={false}>
                  About Us
                </ThemeBtn>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Section1;
