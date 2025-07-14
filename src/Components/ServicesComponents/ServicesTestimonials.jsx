import Carousel from "../HelperComponents/Carousel";

const clientTestimonials = [
  {
    quote:
      "Clay somehow pulls off the impossible of blazing speed while simultaneously possessing breathtaking creativity in their design.",
    name: "Alex James Colville",
    position: "General Partner, age1",
    image: "/Uploads/img1.jpeg",
  },
  {
    quote:
      "Their collaborative spirit and commitment to quality set them apart. We’ve never worked with a better creative team.",
    name: "Sara Lee",
    position: "Head of Design, Flowtech",
    image: "/uploads/person2.jpeg",
  },
  {
    quote:
      "Clay somehow pulls off the impossible of blazing speed while simultaneously possessing breathtaking creativity in their design.",
    name: "Alex James Colville 2",
    position: "General Partner, age1",
    image: "/Uploads/img1.jpeg",
  },
  {
    quote:
      "Their collaborative spirit and commitment to quality set them apart. We’ve never worked with a better creative team.",
    name: "Sara Lee 2",
    position: "Head of Design, Flowtech",
    image: "/uploads/person2.jpeg",
  },
];

export default function ServicesTestimonials() {
  return (
    <>
      <div className="text-2xl md:text-3xl text-center capitalize">
        Hear what our<span className="logo">CLient</span> says about us?
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
