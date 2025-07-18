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
      <div className="bg-gradient-to-r from-[#C848C1] to-[#54A6F9] pt-12 p-4 rounded-4xl">
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
