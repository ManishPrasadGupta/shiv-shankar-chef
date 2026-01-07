import AboutUsSection from "../ui-elements/AboutUs/about-us";

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-6 bg-linear-to-b from-white to-[#f3f3f0] pointer-events-none" />
      <AboutUsSection />
      <div className="w-full h-6 bg-linear-to-b from-[#f3f3f0] to-white pointer-events-none" />
    </>
  );
};

export default AboutUs;
