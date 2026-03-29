import Banner from "../components/banner";
import Cta from "../components/ui/cta";
import Testimonials from "../components/ui/testimonial";
import WhoWeAre from "../components/ui/about";

export default function AboutUs() {
  return (
    <>
      <Banner
        breadcrumbs={[{ label: "About Us", href: "/about-us" }]}
        title="International Logistics"
        description="Seamlessly moving cargo from Asia to Africa with real-time tracking and expert customs clearance."
        bgImage="/assets/container1.jpg"
        height="md:h-[300px] h-[250px]"
      />
      <WhoWeAre />
      <Testimonials />
      <Cta />
    </>
  );
}
