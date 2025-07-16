import Carousel from "../HelperComponents/Carousel";

const clientTestimonials = [
  {
    quote:
      "Iconiq helped us rebrand with a fresh identity that truly reflects our mission. Our customers immediately noticed the difference.",
    name: "Anisha Gurung",
    position: "Founder, Bloom Cosmetics",
    image: "/uploads/client1.jpg",
  },
  {
    quote:
      "Their digital marketing campaigns increased our leads by 200% in just two months. Professional, responsive, and data-driven.",
    name: "Ramesh Shrestha",
    position: "CEO, Himal Mart",
    image: "/uploads/client2.jpg",
  },
  {
    quote:
      "Our old website wasn’t mobile-friendly. Iconiq rebuilt it from scratch — modern, fast, SEO-optimized. Highly recommend their web development team.",
    name: "Laxmi Thapa",
    position: "Operations Head, Trek Nepal",
    image: "/uploads/client3.jpg",
  },
  {
    quote:
      "From branding to web development and content creation, Iconiq handled everything smoothly. They really understand startup needs.",
    name: "Bibek Maharjan",
    position: "Managing Director, GreenTech",
    image: "/uploads/client4.jpg",
  },
  {
    quote:
      "The design team at Iconiq delivered stunning graphics for our social media campaigns. It’s helped us stand out in a crowded market.",
    name: "Nisha Bhandari",
    position: "Marketing Manager, Urban Wear",
    image: "/uploads/client5.jpg",
  },
  {
    quote:
      "We partnered with Iconiq for a complete digital revamp—branding, web, marketing, everything. Results speak for themselves: more traffic, more sales.",
    name: "Sujan Khadka",
    position: "Co-Founder, Everest Tech",
    image: "/uploads/client6.jpg",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="text-2xl md:text-3xl text-center capitalize">
        Hear what our{" "}
        <span className="logo bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text">
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
    </>
  );
}
