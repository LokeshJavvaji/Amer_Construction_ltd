
import { ServicesPage } from "@/components/services/service"

export default function RenovationRefurbishmentServices() {
  const data = [
    {
      type: "",
      image: '/renovation/r1.jpg',
      video:'',
      content: [
        { 
          title: 'Transform Your Space with Renovation & Refurbishment',
          description: "Our renovation and refurbishment services upgrade and modernize existing buildings and spaces, enhancing functionality, aesthetics, and value."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/renovation/r2.jpg',
      video:'',
      content: [
        { 
          title: "Design and Planning",
          description: "Our team provides expert design and planning services, ensuring that your renovation or refurbishment project meets your needs and budget."
        },
        { 
          title: "Quality Workmanship",
          description: "We deliver high-quality workmanship, using skilled craftsmen and premium materials to ensure durable and long-lasting results."
        },
        { 
          title: "Project Management",
          description: "Our project managers oversee every aspect of your renovation or refurbishment project, ensuring timely completion and minimal disruption."
        },
        { 
          title: "Sustainable Solutions",
          description: "We incorporate sustainable solutions and energy-efficient features into our renovation and refurbishment projects, reducing environmental impact."
        },
      ],
    },
    {
      type: "Why Choose Our Renovation & Refurbishment Services?",
      image: '/renovation/r3.jpg',
      video:'',
      content: [
        { 
          title: "Expertise and Experience",
          description: "Our team has extensive experience in renovation and refurbishment projects, ensuring expert results and minimal stress for our clients."
        },
        { 
          title: "Customized Solutions",
          description: "We provide customized renovation and refurbishment solutions tailored to your specific needs, budget, and style."
        },
        { 
          title: "Increased Property Value",
          description: "Our renovation and refurbishment services increase the value of your property, enhancing its functionality, aesthetics, and appeal."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
