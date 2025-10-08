import { ServicesPage } from "@/components/services/service";

export default function SustainableConstructionServices() {
  const data = [
    {
      type: "",
      image: '/sustainableconstruction/sc1.jpg',
      video:'',
      content: [
        {
          title: 'Expert Sustainable Construction Services',
          description: "Our sustainable construction services provide environmentally friendly solutions for building and development projects, minimizing the impact on the environment."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/sustainableconstruction/sc2.webp',
      video:'',
      content: [
        {
          title: "Green Building Design",
          description: "We provide expert green building design services, incorporating sustainable materials and practices to reduce environmental impact."
        },
        {
          title: "Energy-Efficient Solutions",
          description: "Our team of experts provides energy-efficient solutions, reducing energy consumption and costs for building owners and occupants."
        },
        {
          title: "Sustainable Materials",
          description: "We specify and source sustainable materials for construction projects, minimizing waste and environmental impact."
        },
        {
          title: "Waste Reduction and Management",
          description: "Our sustainable construction services include waste reduction and management strategies, minimizing waste and promoting recycling."
        },
      ],
    },
    {
      type: "Why Choose Our Sustainable Construction Services?",
      image: '/sustainableconstruction/sc3.webp',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of sustainable construction experts has years of experience in delivering high-quality services, ensuring accurate and reliable results."
        },
        {
          title: "Environmental Benefits",
          description: "Our sustainable construction services provide numerous environmental benefits, including reduced energy consumption and waste minimization."
        },
        {
          title: "Cost Savings",
          description: "Our sustainable construction services can help building owners and occupants save money on energy costs and reduce maintenance expenses."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
