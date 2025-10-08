import Slider from "@/components/Slider/Slider";
import Image from "next/image";
import Link from "next/link";

const slides = [
  "/s6.webp",
  "/s2.webp",
  "/s3.webp",
  "/s4.webp",
  "/s5.webp",
];

export default function AboutUs() {
  return (
    <main>
      <section className="flex flex-col items-center">
        {/* Text Content Section */}
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center md:max-w-6xl lg:max-w-7xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Building Excellence with Amer Construction Ltd.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            At Amer Construction Ltd., we provide high-quality construction services for residential and commercial projects.
          </p>
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our services"
          >
            Learn More
          </Link>
        </div>
        <Slider images={slides} />
        <div className="w-full p-6 text-center mx-auto">
          <p className="text-2xl">
            Our mission is to deliver exceptional construction services that meet the evolving needs of our clients. We strive to build long-term relationships and exceed expectations.
          </p>
        </div>
      </section>
      <br></br>
      <section className="border shadow grid gap-4 py-5">
        <div className="container mx-auto p-4 px-10 grid gap-4">
          <div className="grid gap-3">
            <br></br>
            <h1 className="text-3xl font-bold">Our Mission</h1>
            <p className="text-xl">
              To provide high-quality construction services that meet the evolving needs of our clients.
            </p>
          </div>
          <div className="grid gap-3">
            <h1 className="text-3xl font-bold">Our Vision</h1>
            <p className="text-xl">
              To be the trusted construction partner for businesses and individuals, delivering exceptional results and building long-term relationships.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/our-services"
            className="inline-flex items-center justify-center px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-colors"
            aria-label="Learn more about our services"
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex text-center font-bold text-4xl text-blue-500">
          Why Choose Amer Construction Ltd.?
        </h1>
        <div className="container mx-auto p-4 px-10">
          <div className="flex justify-center grid gap-4">
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Amer Construction Ltd. has been instrumental in helping us build our dream home.
              </blockquote>
              <cite className="text-lg text-gray-500"> - John D., Homeowner</cite>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <blockquote className="text-2xl">
                Their expertise in construction has been a game-changer for our business.
              </blockquote>
              <cite className="text-lg text-gray-500"> - Emily C., Business Owner</cite>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-3">
          <div className="relative w-full h-[300px] md:w-[800px] md:h-[600px] lg:w-[1200px] lg:h-[700px]">
            <Image src="/s1.jpg" alt="Construction experts at work" fill className="object-cover" />
          </div>
        </div>
      </section>
      <section className="container mx-auto grid gap-3 my-4">
        <h1 className="flex text-center font-bold text-4xl text-blue-500">
          Our Construction Services
        </h1>
        <div className="container mx-auto p-4 px-10 grid gap-4">
        <div className="bg-white shadow-md p-4 rounded-md">
  <h2 className="text-2xl font-bold">Residential Construction</h2>
  <p className="text-lg">
    Our residential construction services provide high-quality building solutions for homes and apartments.
  </p>
</div>
<div className="bg-white shadow-md p-4 rounded-md">
  <h2 className="text-2xl font-bold">Commercial Construction</h2>
  <p className="text-lg">
    Our commercial construction services provide expert building solutions for offices, retail spaces, and more.
  </p>
</div>
<div className="bg-white shadow-md p-4 rounded-md">
  <h2 className="text-2xl font-bold">Renovation and Refurbishment</h2>
  <p className="text-lg">
    Our renovation and refurbishment services breathe new life into existing spaces.
  </p>
</div>
<div className="bg-white shadow-md p-4 rounded-md">
  <h2 className="text-2xl font-bold">Project Management</h2>
  <p className="text-lg">
    Our project management services ensure timely completion and quality results.
  </p>
</div>
<div className="bg-white shadow-md p-4 rounded-md">
  <h2 className="text-2xl font-bold">Design and Build</h2>
  <p className="text-lg">
    Our design and build services provide a seamless experience from conceptualization to completion.
  </p>
</div>
</div>
</section>
</main>
);

}
