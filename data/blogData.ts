import { StaticImageData } from "next/image";

import webDesignImg from "@/public/images/blog/web-design.jpg";
import metaAdsImg from "@/public/images/blog/Meta-Ads.webp";
import googleAdsImg from "@/public/images/blog/google-ads.png";
import digitalmarketingguide from "@/public/images/blog/digitalmarketingguide.png";

// ✅ TYPES
export type BlogSection = {
  title: string;
  content: string;
};

export type BlogFAQ = {
  question: string;
  answer: string;
};

export type Blog = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  heroText: string;
  image: StaticImageData | string;
  sections: BlogSection[];
  faq: BlogFAQ[];
};

// ✅ DATA
export const blogData: Blog[] = [
  {
    slug: "website-design-coimbatore",

    title:
      "Website Design Services in Coimbatore | Affordable Web Development",

    description:
      "Looking for website design services in Coimbatore? Get modern, responsive, SEO-friendly websites that help your business grow online.",

    keywords:
      "website design in coimbatore, web designer coimbatore, freelance web developer coimbatore",

    heroText:
      "A professional website is the foundation of any successful business in Coimbatore. We create fast, responsive, and SEO-friendly websites.",

    image: webDesignImg,

    sections: [
      {
        title: "Why Website Design is Important",
        content:
          "Your website is your first impression. A well-designed site builds trust and converts visitors into customers.",
      },
      {
        title: "Custom Website Design",
        content:
          "We create modern and unique designs tailored to your business brand and audience.",
      },
      {
        title: "SEO Friendly Development",
        content:
          "All websites are built with SEO structure, fast speed, and mobile responsiveness.",
      },
    ],

    faq: [
      {
        question: "How much does website cost?",
        answer:
          "It depends on features. Basic websites are affordable for startups.",
      },
      {
        question: "Is it SEO friendly?",
        answer:
          "Yes, all websites are built with SEO best practices.",
      },
    ],
  },

  {
    slug: "meta-ads-coimbatore",

    title:
      "Meta Ads Expert in Coimbatore | Facebook & Instagram Ads",

    description:
      "Grow your business using Facebook and Instagram ads with expert campaign management.",

    keywords:
      "meta ads coimbatore, facebook ads expert, instagram ads",

    heroText:
      "Reach your audience instantly with high-converting Meta Ads campaigns.",

    image: metaAdsImg,

    sections: [
      {
        title: "What are Meta Ads?",
        content:
          "Meta Ads allow targeting users on Facebook and Instagram platforms.",
      },
      {
        title: "Audience Targeting",
        content:
          "Whether you are a startup trying to earn your first hundred customers or an established business looking to accelerate growth, SEO and digital marketing offer a proven, measurable path forward. They are not optional extras in today's business environment — they are foundational infrastructure for long-term commercial success."
      },
    ],

    faq: [
      {
        question: "Is Meta Ads good?",
        answer:
          "Yes, it is one of the best ways to generate leads quickly.",
      },
    ],
  },

  {
    slug: "google-ads-coimbatore",

    title:
      "Google Ads Expert in Coimbatore | PPC Advertising Services",

    description:
      "Drive traffic and leads using Google Ads PPC campaigns.",

    keywords:
      "google ads coimbatore, ppc ads, paid marketing",

    heroText:
      "Appear on top of Google search results instantly using Ads.",

    image: googleAdsImg,

    sections: [
      {
        title: "What is Google Ads?",
        content:
          "Google Ads is a paid platform to get instant visibility.",
      },
      {
        title: "PPC Strategy",
        content:
          "We optimize campaigns for maximum ROI.",
      },
    ],

    faq: [
      {
        question: "Is Google Ads better than SEO?",
        answer:
          "Google Ads gives instant results, SEO is long-term.",
      },
    ],
  },


  {
  slug: "seo-digital-marketing-guide",

  title:
    "SEO & Digital Marketing Guide 2026 | Complete Business Growth Strategy",

  description:
    "Learn how SEO and digital marketing help businesses grow online. Complete beginner to advanced guide for startups and business owners.",

  keywords:
    "seo guide 2026, digital marketing for beginners, business growth online, seo and marketing strategy",

  heroText:
    "A complete playbook for business professionals — from startups finding their footing to established brands ready to dominate their market.",

  image: digitalmarketingguide, 

  sections: [
    {
      title: "What is SEO and Why It Matters",
      content:
        "Search Engine Optimization (SEO) is the process of improving your website to rank higher in Google search results. When customers search for services, your website should appear at the top. SEO builds trust, authority, and long-term visibility for your business.",
    },
    {
      title: "Why Digital Marketing is Important",
      content:
        "Digital marketing includes SEO, social media, paid ads, and content marketing. It helps businesses reach targeted customers online, generate leads, and increase sales without depending only on offline methods.",
    },
    {
      title: "SEO vs Paid Ads (Google & Meta Ads)",
      content:
        "SEO gives long-term organic traffic, while paid ads give instant results. A smart business uses both strategies together to maximize growth and ROI.",
    },
    {
      title: "Key SEO Strategies for Beginners",
      content:
        "Start with keyword research, optimize your website content, improve page speed, and build backlinks. Focus on user experience and mobile responsiveness to rank better in search engines.",
    },
    {
      title: "How Digital Marketing Helps New Businesses",
      content:
        "New business owners often struggle to find clients. Digital marketing solves this by targeting the right audience through Google, Facebook, and Instagram, making it easier to get leads and grow faster.",
    },
    {
      title: "Future of Digital Marketing (2026)",
      content:
        "With increasing internet users and competition, businesses must invest in SEO, content marketing, and paid ads. Those who adapt to digital strategies early will dominate their industry.",
    },
  ],

  faq: [
    {
      question: "Is SEO important for small businesses?",
      answer:
        "Yes, SEO helps small businesses compete with larger brands by improving online visibility and attracting local customers.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO usually takes 3 to 6 months to show strong results, but it provides long-term benefits.",
    },
    {
      question: "Should I use SEO or paid ads?",
      answer:
        "Both are important. SEO gives long-term growth, while ads provide instant traffic and leads.",
    },
  ],
}
];