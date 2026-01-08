import { Diamond, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <Instagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <Linkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const FooterComp = ({
  logo = {
    url: "#",
    src: "",
    alt: "logo",
    title: "Consultant",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 ShivShankarChef. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <footer className="w-full bg-[#f6f7fb] border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col gap-10 lg:gap-16">
        {/* Top row: logo, description, social, links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
          {/* Logo, description, social */}
          <div className="flex flex-col items-center lg:items-start gap-5 w-full lg:max-w-xs">
            <div className="flex items-center gap-2">
              <Diamond className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">{logo.title}</span>
            </div>
            <p className="max-w-md text-sm text-muted-foreground text-center lg:text-left">
              {description}
            </p>
            <ul className="flex items-center gap-4 mt-2">
              {socialLinks.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="block rounded-full bg-white shadow transition hover:bg-primary/10 p-2 text-muted-foreground hover:text-primary"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Link sections: horizontal grid on desktop */}
          <div className="grid grid-cols-2 gap-8 w-full mt-6 lg:grid-cols-3 lg:gap-16 lg:mt-0">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-3 font-bold text-lg">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="block px-2 py-1 rounded hover:bg-primary/10 hover:text-primary transition font-medium"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Legal + Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 py-6 text-xs text-muted-foreground">
          <span>{copyright}</span>
          <ul className="flex mt-2 sm:mt-0 gap-4">
            {legalLinks.map((link, idx) => (
              <li key={idx}>
                <a href={link.href} className="hover:text-primary transition">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
