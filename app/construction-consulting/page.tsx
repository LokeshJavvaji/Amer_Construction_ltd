import { ServicesPage } from "@/components/services/service";

export default function ConstructionConsultingServices() {
  const data = [
    {
      type: "",
      image: '/consulting/c1.jpg',
      video:'',
      content: [
        {
          title: 'Expert Construction Consulting Services',
          description: "Our construction consulting services provide expert guidance and advice to ensure your project is delivered on time, within budget, and to the required quality standards."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/consulting/c2.webp',
      video:'',
      content: [
        {
          title: "Project Planning and Management",
          description: "We provide expert project planning and management services to ensure your project is delivered efficiently and effectively."
        },
        {
          title: "Cost Management and Estimating",
          description: "Our team of experts provides cost management and estimating services to ensure your project is delivered within budget."
        },
        {
          title: "Risk Management and Mitigation",
          description: "We identify and mitigate potential risks to ensure your project is delivered safely and without unexpected delays or costs."
        },
        {
          title: "Quality Control and Assurance",
          description: "Our construction consulting services ensure that your project meets the required quality standards and regulatory requirements."
        },
      ],
    },
    {
      type: "Why Choose Our Construction Consulting Services?",
      image: '/consulting/c3.jpg',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of construction consulting experts has years of experience in delivering high-quality services, ensuring accurate and reliable results."
        },
        {
          title: "Independent Advice",
          description: "We provide independent advice and guidance to ensure your project is delivered in your best interests."
        },
        {
          title: "Improved Project Outcomes",
          description: "Our construction consulting services ensure improved project outcomes, including timely completion, cost savings, and high-quality results."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
