import TechnologyCard from "@/components/TechCard/TechCard";

export default function ConstructionServices() {
  const constructionServices = [
    {
      imageSrc: "/buildingconstruction/bc2.jpg",
      title: "Expert Building Construction Services",
      description: "Amer Construction Ltd. provides high-quality building construction services for residential and commercial projects.",
      date: "March 15, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/renovation/r1.jpg",
      title: "Renovation and Refurbishment Solutions",
      description: "Our team offers renovation and refurbishment services to transform your existing spaces.",
      date: "February 20, 2024",
      readTime: "1 min",
    },
    {
      imageSrc: "/project/p2.webp",
      title: "Project Management Services",
      description: "Amer Construction Ltd. provides effective project management services to ensure timely completion and quality results.",
      date: "January 25, 2024",
      readTime: "2 mins",
    },
    {
      imageSrc: "/designbuild/db1.jpg",
      title: "Design and Build Services",
      description: "Our design and build services offer a seamless experience, from conceptualization to completion.",
      date: "December 15, 2023",
      readTime: "2 mins",
    },
    {
      imageSrc: "/sustainableconstruction/sc2.webp",
      title: "Sustainable Construction Practices",
      description: "Amer Construction Ltd. prioritizes sustainable construction practices to minimize environmental impact.",
      date: "November 20, 2023",
      readTime: "2 mins",
    },
    {
      imageSrc: "/maintenance/m1.png",
      title: "Maintenance and Repair Services",
      description: "Our team provides ongoing maintenance and repair services to ensure your building remains safe and functional.",
      date: "October 15, 2023",
      readTime: "1 min",
    },
  ];

  return (
    <section className="grid md:flex-row items-center justify-center gap-8 p-6 container mx-auto">
      <p className="text-center text-3xl md:text-4xl gap-15 p-10 font-bold" style={{ color: "red" }}>
        AMER CONSTRUCTION LTD. - BUILDING EXCELLENCE
      </p>
      <div className="w-full flex-col lg:grid lg:grid-cols-3 gap-7 justify-center">
        {constructionServices.map((cardData, index) => (
          <TechnologyCard key={index} data={cardData} />
        ))}
      </div>
      <ul className="text-xl list-inside">
        <li> • Comprehensive Construction Solutions: Amer Construction Ltd. offers a range of construction services.</li>
        <li> • Expert Construction Team: Our team of experts provides high-quality construction services.</li>
        <li> • Timely Completion: We prioritize timely completion and quality results.</li>
        <li> • Quality-Driven Approach: Amer Construction Ltd. prioritizes quality in all aspects of construction.</li>
        <li> • Customer Satisfaction: Our goal is to ensure customer satisfaction with every project.</li>
        <li> • Sustainable Practices: We incorporate sustainable practices into our construction projects.</li>
        <li> • Maintenance and Support: Our team provides ongoing maintenance and support services.</li>
      </ul>
      <p className="text-xl">
        At Amer Construction Ltd., we are committed to delivering exceptional construction services that meet the needs of our clients. With a focus on quality, sustainability, and customer satisfaction, we strive to build a better future for our clients and the communities we serve.
      </p>
    </section>
  );
}

