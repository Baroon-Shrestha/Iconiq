import Carousel from "../HelperComponents/Carousel";

const clientTestimonials = [
  {
    quote:
      "You truly transformed our academy's digital presence. From brand marketing to web development, everything feels modern and student-friendly. Our online inquiries have definitely increased.",
    name: "Momiji International Academy",
    position: "Japanese Educational Consultancy",
    image: "/uploads/client1.jpg",
  },
  {
    quote:
      "Thank you for elevating our brand through both digital marketing and e-commerce development. The new platform is user-friendly, and our sales numbers reflect that.",
    name: "Navadebi Jewellers",
    position: "E-commerce Platform",
    image: "/uploads/client2.jpg",
  },
  {
    quote:
      "We appreciate how your team handled our inventory system and also took care of our brand marketing. It’s helped both our internal operations and public image grow.",
    name: "Navadebi Jewellers",
    position: "Jewelry Inventory System",
    image: "/uploads/client3.jpg",
  },
  {
    quote:
      "You supported us from branding to digital marketing and web development. Our consultancy is now more visible to students in both Nepal and Japan, thanks to your work.",
    name: "Kansai International Japanese Language Center",
    position: "Japanese Educational Consultancy",
    image: "/uploads/client4.jpg",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#C848C1] to-[#54A6F9] py-12 rounded-4xl">
        <div className="text-4xl md:text-6xl px-4 md:px-0 text-center capitalize text-white">
          Hear what our{" "}
          <span className="logo  bg-gradint-to-b from-[#C848C1] to-[#54A6F9] text-trasparent b-clip-text">
            Clients
          </span>{" "}
          say about us
        </div>
        <Carousel
          data={clientTestimonials}
          heading="What our"
          highlight="Clients"
          subtext="say about working with us."
        />
      </div>
    </>
  );
}
