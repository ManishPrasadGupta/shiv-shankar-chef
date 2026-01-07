"use client";

import { ServiceListProps } from "@/types/types";
import {
  CardSticky,
  ContainerScroll,
} from "../ui-elements/Services/cards-stack";
import { Variants } from "framer-motion";

const PRE_OPENING = [
  { id: "pre-1", title: "Hotel, Restaurant, Bar & Food Court Consultancy" },
  { id: "pre-2", title: "Project inputs during design & build stages" },
  {
    id: "pre-3",
    title: "Pre-opening business plans (including loan & funding support)",
  },
  { id: "pre-4", title: "Manpower planning, recruitment & manning budgets" },
  { id: "pre-5", title: "Working capital & operational cost guidelines" },
  { id: "pre-6", title: "Food & Beverage concept development" },
  {
    id: "pre-7",
    title: "Kitchen layout planning & BOH/FOH equipment advisory",
  },
  { id: "pre-8", title: "Menu planning, creative design & implementation" },
  { id: "pre-9", title: "Interior design & architectural coordination" },
  {
    id: "pre-10",
    title: "Review of drawings to enhance operational efficiency",
  },
  { id: "pre-11", title: "Market analysis & brand positioning" },
  { id: "pre-12", title: "Procurement & sourcing advisory" },
  {
    id: "pre-13",
    title: "Marketing, PR, sales & launch strategy (S&M support)",
  },
  { id: "pre-14", title: "Development of SOPs & brand standards" },
  {
    id: "pre-15",
    title:
      "Turnkey Hotel, Resort & Restaurant development, commissioning & launch",
  },
];

const POST_OPENING = [
  {
    id: "post-1",
    title: "Ongoing operational audits aligned with SOPs & brand standards",
  },
  { id: "post-2", title: "Mentoring & coaching of GM and HOD teams" },
  { id: "post-3", title: "Brand quality audit & compliance systems" },
  {
    id: "post-4",
    title: "Revenue management strategies to improve RevPAR, APC & GOP",
  },
  { id: "post-5", title: "Financial performance analysis & MIS structuring" },
  { id: "post-6", title: "Continuous MIS monitoring & reporting" },
  { id: "post-7", title: "Food & beverage cost control" },
  { id: "post-8", title: "Operational streamlining to enhance profitability" },
  { id: "post-9", title: "Team performance reviews & succession planning" },
  {
    id: "post-10",
    title: "Strategic business analysis & performance improvement",
  },
];

const HOTEL_RESORT = [
  { id: "hr-1", title: "Asset performance monitoring & value enhancement" },
  { id: "hr-2", title: "Operator oversight & contract compliance management" },
  {
    id: "hr-3",
    title: "Budgeting, forecasting & financial performance review",
  },
  { id: "hr-4", title: "Revenue optimization & yield strategy advisory" },
  { id: "hr-5", title: "Capex planning, asset lifecycle & ROI management" },
  { id: "hr-6", title: "Operational efficiency & cost control audits" },
  { id: "hr-7", title: "Brand, operator & market repositioning strategies" },
  { id: "hr-8", title: "Owner reporting, governance & MIS review" },
  { id: "hr-9", title: "Risk assessment & long-term asset growth planning" },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06, // stagger in by index
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

// SHARED CONTAINER AND CARDS UI FUNCTION
function ServiceList({ title, subtitle, items }: ServiceListProps) {
  return (
    <div className="container min-h-svh  text-stone-900 xl:px-12 flex flex-col items-center">
      <h2 className="mb-6 mt-4 text-4xl font-bold tracking-tight text-center">
        {title}
      </h2>
      <p className="max-w-prose text-sm text-center mb-6">{subtitle}</p>
      <ContainerScroll
        style={{ minHeight: `${PRE_OPENING.length * 90 + 500}px` }}
        className="col-span-2 md:col-span-1 mx-auto space-y-8 py-12"
      >
        {items.map((item, index) => (
          <CardSticky
            key={item.id}
            index={index + 2}
            className="rounded-2xl border p-8 shadow-md backdrop-blur-md w-full"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            custom={index}
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="my-6 text-2xl font-bold tracking-tighter">
                {item.title}
              </h2>
              <h3 className="text-2xl font-bold text-indigo-500">
                {String(index + 1).padStart(2, "0")}
              </h3>
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  );
}

// INDIVIDUAL SERVICE SECTIONS
const PreOpening = () => (
  <ServiceList
    title={
      <>
        <span className="text-indigo-500">Pre-Opening</span> Advisory Support
      </>
    }
    subtitle="We provide end-to-end consultancy to ensure a structured and efficient opening, driving operational excellence, guest satisfaction, and profitability."
    items={PRE_OPENING}
  />
);

const PostOpening = () => (
  <ServiceList
    title={
      <>
        <span className="text-indigo-500">Post-Opening</span> Advisory Support
      </>
    }
    subtitle="Our post-opening services focus on performance optimization, financial discipline, and sustainable growth."
    items={POST_OPENING}
  />
);

const HotelResort = () => (
  <ServiceList
    title={
      <>
        <span className="text-indigo-500">Hotel</span> and{" "}
        <span className="text-indigo-500">Resort</span> Management
      </>
    }
    subtitle="We act as the owner’s representative to protect, enhance, and grow the value of hospitality assets through disciplined financial control and strategic oversight."
    items={HOTEL_RESORT}
  />
);

export { PreOpening, PostOpening, HotelResort };
