// components/ContactCards.tsx
import React from "react";

type CommunityContact = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link: {
    name: string;
    href: string;
  };
};

export default function ContactCards({
  contacts,
}: {
  contacts: CommunityContact[];
}) {
  return (
    <div>
      <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
        {contacts.map((item, idx) => (
          <li
            key={idx}
            className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
          >
            <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
              {item.icon}
            </div>
            <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
              {item.title}
            </h4>
            <p>{item.desc}</p>
            <a
              href={item.link.href}
              className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
            >
              {item.link.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
