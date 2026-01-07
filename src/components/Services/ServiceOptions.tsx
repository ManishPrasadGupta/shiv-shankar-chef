"use client";

import { useState } from "react";
import { HotelResort, PostOpening, PreOpening } from "./Service";

const OPTIONS = [
  { label: "Pre-Opening Support", value: "pre_opening" },
  { label: "Post-Opening Advisory Support", value: "post_opening" },
  { label: "Hotel & Resort Asset Management", value: "hotel" },
  { label: "Food & Beverage Concept Creation", value: "food" },
  { label: "Kitchen Planning And Designing", value: "kitchen" },
  { label: "Brand Quality & Mystery Audits", value: "brand" },
  { label: "Sales And Marketing", value: "sales" },
  {
    label: "Brand Consulting / Creating Brand Identity",
    value: "brand consulting",
  },
  { label: "Human Resources & Talent Acquisition", value: "human" },
  { label: "Revenue Management Consulting", value: "revenue" },
];

export default function ServiceOptions() {
  const [selected, setSelected] = useState("pre_opening");

  return (
    <>
      <section
        id="services"
        className="w-full py-24 px-4  text-[#202e44] relative"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">
            Our Services
          </h2>
          <div className="flex justify-center my-6">
            <select
              className="border px-2 py-1 rounded"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              {OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="my-8 w-full flex flex-col items-center">
            {selected === "pre_opening" && <PreOpening />}
            {selected === "post_opening" && <PostOpening />}
            {selected === "hotel" && <HotelResort />}
            {!["pre_opening", "post_opening", "hotel"].includes(selected) && (
              <div className="text-center text-gray-400 my-10">
                Selected service coming soon!
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
