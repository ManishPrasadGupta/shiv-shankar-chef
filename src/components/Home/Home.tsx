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
            Each Peak <br />
            <span className="text-primary">Teaches Something</span>
          </>
        }
        subtitle="Discover breathtaking landscapes and challenge yourself with our guided mountain expeditions. Join a community of adventurers."
        callToAction={{
          text: "JOIN US TO EXPLORE",
          href: "#explore",
        }}
        backgroundImage="/images/home-image.avif"
        contactInfo={{
          youtube: "@ShivShankarChef",
          phone: "+1 (555) 123-4567",
          address: "20 Fieldstone Dr, Roswell, GA",
        }}
      />
    </div>
  );
}
