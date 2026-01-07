import Menu from "./menu";

const menus = [
  {
    id: 1,
    title: "Home",
    url: "/",
    dropdown: false,
  },
  {
    id: 2,
    title: "About Us",
    url: "#about",
    dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
    dropdown: false,
    // items: [
    //   {
    //     id: 31,
    //     title: "Pre Opening & Post Opening Services",
    //     url: "/services/pre-post-opening",
    //   },
    //   {
    //     id: 32,
    //     title: "Hotel / Resort — Asset Management",
    //     url: "/services/hotel-resort-asset-management",
    //   },
    //   {
    //     id: 33,
    //     title: "Facility Planning",
    //     url: "/services/facility-planning",
    //   },
    //   {
    //     id: 34,
    //     title: "Food & Beverage Concept Creation",
    //     url: "/services/food-beverage-concept-creation",
    //   },
    //   {
    //     id: 35,
    //     title: "Kitchen Planning And Designing",
    //     url: "/services/kitchen-planning-and-designing",
    //   },
    //   {
    //     id: 36,
    //     title: "Brand Quality & Mystery Audits",
    //     url: "/services/brand-quality-mystery-audits",
    //   },
    //   {
    //     id: 37,
    //     title: "Sales And Marketing",
    //     url: "/services/sales-and-marketing",
    //   },
    //   {
    //     id: 38,
    //     title: "Brand Consulting / Creating Brand Identity",
    //     url: "/services/brand-consulting-creating-brand-identity",
    //   },
    //   {
    //     id: 39,
    //     title: "Human Resources & Talent Acquisition",
    //     url: "/services/human-resources-talent-acquisition",
    //   },
    //   {
    //     id: 40,
    //     title: "Revenue Management Consulting",
    //     url: "/services/revenue-management-consulting",
    //   },
    // ],
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
    dropdown: false,
  },
];

export function Menus() {
  return <Menu list={menus} />;
}
