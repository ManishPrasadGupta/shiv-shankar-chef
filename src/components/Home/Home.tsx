import { HeroSection } from "../ui-elements/HeroSection/HeroSection";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
          url: "/images/shivShankar.jpg",
          alt: "Company Logo",
          text: "Shiv Shankar Chef",
        }}
        slogan="ELEVATE YOUR PERSPECTIVE"
        title={
          <>
            Elevating <span className="text-indigo-500">Hospitality</span>,{" "}
            <br />
            <span className="text-primary">
              <span className="text-indigo-500">Inspiring</span> Success
            </span>
          </>
        }
        subtitle="At Shiv Shankar Chef Hospitality Consultants, we partner with you to deliver tailored, practical solutions designed to maximize your potential and profitability. Whatever your hospitality ambitions, we’re here to help you achieve and exceed them."
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "#",
        }}
        backgroundImage="/images/home-image.avif"
        contactInfo={{
          youtube: "@ShivShankarChef",
          phone: "+91-8822131781",
          address: "Fatasil, Ambari, Guwahati, Assam 781005",
        }}
      />
    </div>
  );
}
