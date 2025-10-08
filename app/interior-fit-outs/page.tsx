import { ServicesPage } from "@/components/services/service";

export default function InteriorFitOutsServices() {
  const data = [
    {
      type: "",
      image: '/interior/f1.jpg',
      video:'',
      content: [
        {
          title: 'Expert Interior Fit-Outs Services',
          description: "Our interior fit-outs services provide high-quality solutions for offices, retail spaces, and homes, ensuring a perfect blend of design and functionality."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/interior/f2.jpg',
      video:'',
      content: [
        {
          title: "Customized Interior Design",
          description: "We provide customized interior design solutions tailored to your specific needs, ensuring that your space reflects your brand and style."
        },
        {
          title: "High-Quality Finishing",
          description: "Our team of experts provides high-quality finishing services, ensuring that every detail is perfect and meets your expectations."
        },
        {
          title: "Timely Completion",
          description: "We understand the importance of timely completion, ensuring that your project is finished and ready for use when you need it."
        },
        {
          title: "Sustainable Materials",
          description: "Our interior fit-outs services incorporate sustainable materials and practices, reducing the environmental impact of your project."
        },
      ],
    },
    {
      type: "Why Choose Our Interior Fit-Outs Services?",
      image: '/interior/f3.jpg',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of interior fit-outs experts has years of experience in designing and delivering high-quality spaces, ensuring accurate and reliable results."
        },
        {
          title: "Attention to Detail",
          description: "We pay attention to every detail, ensuring that your space is perfect and meets your expectations."
        },
        {
          title: "Client-Centric Approach",
          description: "Our interior fit-outs services are tailored to your specific needs, ensuring that you get the perfect solution for your space."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
