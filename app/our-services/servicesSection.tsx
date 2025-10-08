'use client'

// components/ServicesSection.js
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = ({ active = true }: { active?: boolean }) => {
  const services = [
    {
      title: "Building Construction",
      description: "Expert construction services for residential, commercial, and industrial projects.",
      images: [
        { image: "/buildingconstruction/bc1.jpg", alt: "Building Construction" },
        { image: "/buildingconstruction/bc2.jpg", alt: "Building Construction" },
        { image: "/buildingconstruction/bc3.jpg", alt: "Building Construction" },
      ],
      href: 'building-construction',
    },
    {
      title: "Renovation & Refurbishment",
      description: "Transform your existing spaces with our renovation services.",
      images: [
        { image: "/renovation/r1.jpg", alt: "Renovation & Refurbishment" },
        { image: "/renovation/r2.jpg", alt: "Renovation & Refurbishment" },
        { image: "/renovation/r3.jpg", alt: "Renovation & Refurbishment" },
      ],
      href: 'renovation-refurbishment',
    },
    {
      title: "Project Management",
      description: "Effective project management services for construction projects.",
      images: [
        { image: "/project/p2.webp", alt: "Project Management" },
        { image: "/project/p5.webp", alt: "Project Management" },
        { image: "/project/p9.png", alt: "Project Management" },
      ],
      href: 'project-management',
    },
    {
      title: "Design & Build",
      description: "Seamless design and build services for clients.",
      images: [
        { image: "/designbuild/db1.jpg", alt: "Design & Build" },
        { image: "/designbuild/db2.jpg", alt: "Design & Build" },
        { image: "/designbuild/db3.jpg", alt: "Design & Build" },
      ],
      href: 'design-build',
    },
    {
      title: "Site Preparation",
      description: "Preparing construction sites for building projects.",
      images: [
        { image: "/sitepreparation/sp1.webp", alt: "Site Preparation" },
        { image: "/sitepreparation/sp2.webp", alt: "Site Preparation" },
        { image: "/sitepreparation/sp3.jpg", alt: "Site Preparation" },
      ],
      href: 'site-preparation',
    },
    {
      title: "Structural Repairs",
      description: "Expert structural repair services.",
      images: [
        { image: "/structuralrepairs/sr1.png", alt: "Structural Repairs" },
        { image: "/structuralrepairs/sr2.jpg", alt: "Structural Repairs" },
        { image: "/structuralrepairs/sr3.jpeg", alt: "Structural Repairs" },
      ],
      href: 'structural-repairs',
    },
    {
      title: "Interior Fit-outs",
      description: "Completing interior spaces with high-quality finishes.",
      images: [
        { image: "/interior/f1.jpg", alt: "Interior Fit-outs" },
        { image: "/interior/f2.jpg", alt: "Interior Fit-outs" },
        { image: "/interior/f3.jpg", alt: "Interior Fit-outs" },
      ],
      href: 'interior-fit-outs',
    },
    {
      title: "Sustainable Construction",
      description: "Building using sustainable materials and practices.",
      images: [
        { image: "/sustainableconstruction/sc1.jpg", alt: "Sustainable Construction" },
        { image: "/sustainableconstruction/sc2.webp", alt: "Sustainable Construction" },
        { image: "/sustainableconstruction/sc3.webp", alt: "Sustainable Construction" },
      ],
      href: 'sustainable-construction',
    },
    {
      title: "Maintenance & Repairs",
      description: "Ongoing maintenance and repair services.",
      images: [
        { image: "/maintenance/m1.png", alt: "Maintenance & Repairs" },
        { image: "/maintenance/m2.webp", alt: "Maintenance & Repairs" },
        { image: "/maintenance/m3.webp", alt: "Maintenance & Repairs" },
      ],
      href: 'maintenance-repairs',
    },
    {
      title: "Construction Consulting",
      description: "Expert construction consulting services.",
      images: [
        { image: "/consulting/c1.jpg", alt: "Construction Consulting" },
        { image: "/consulting/c2.webp", alt: "Construction Consulting" },
        { image: "/consulting/c3.jpg", alt: "Construction Consulting" },
      ],
      href: 'construction-consulting',
    },
  ];

  return (
    <section className="set-image justify-center">
      {active && (
        <div className='container mx-auto'>
          <h1 className="mt-4 text-4xl font-bold">Building Excellence with Amer Construction Ltd.</h1>
          <p className="mt-4 flex justify-between items-center text-xl text-black-600">
            At Amer Construction Ltd., we deliver high-quality construction services to meet the unique needs of our clients.
          </p>
        </div>
      )}
      <div className="mx-auto px-4 py-12 pb-0 bg-cover text-black">
        <div className='container mx-auto'>
          <h2 className="text-4xl font-bold mb-10 text-red-500">Our Construction Services</h2>
          {services.map((service, index) => (
            <div className="mb-16" key={service.href || index}>
              <h3 className="text-3xl font-bold mb-4">
                {active ? (
                  <Link href={service.href} className='hover:underline'>
                    {service.title}
                  </Link>
                ) : (
                  <span>
                    {service.title}
                  </span>
                )}
              </h3>
              <p className="mb-10 text-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center">
                {service.images?.map((image, imgIndex) => {
                  // normalize src: trim and treat empty strings as null
                  const src = image?.image?.toString().trim() || null;
                  if (!src) return null;

                  return (
                    <div className="w-full md:w-1/3 xl:w-1/3 p-6" key={`${service.href || index}-${imgIndex}`}>
                      <Image
                        src={src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                  );
                })}
              </div>
              {active && (
                <div className="text-center mt-8">
                  <Link href={service.href} className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-8 rounded-md transition duration-300">
                    Learn More
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

