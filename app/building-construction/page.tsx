import { ServicesPage } from "@/components/services/service";

export default function BuildingConstructionServices() {
  const data = [
    {
      type: "",
      image: '/buildingconstruction/bc1.jpg',
      video:'',
      content: [
        {
          title: 'Expert Building Construction Services',
          description: "Our building construction services provide high-quality construction solutions for residential and commercial projects, ensuring timely completion and exceeding client expectations."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/buildingconstruction/bc2.jpg',
      video:'',
      content: [
        {
          title: "Residential Construction",
          description: "We provide expert residential construction services, building homes that meet the needs and expectations of our clients."
        },
        {
          title: "Commercial Construction",
          description: "Our team of experts provides commercial construction services, delivering high-quality office buildings, retail spaces, and more."
        },
        {
          title: "Project Management",
          description: "We offer project management services to ensure your building construction project is delivered on time, within budget, and to the required quality standards."
        },
        {
          title: "Sustainable Building Practices",
          description: "Our building construction services incorporate sustainable practices and materials, reducing the environmental impact of your project."
        },
      ],
    },
    {
      type: "Why Choose Our Building Construction Services?",
      image: '/buildingconstruction/bc3.jpg',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of building construction experts has years of experience in delivering high-quality projects, ensuring accurate and reliable results."
        },
        {
          title: "Quality Workmanship",
          description: "We pride ourselves on our quality workmanship, ensuring that every detail is perfect and meets our clients' expectations."
        },
        {
          title: "Timely Completion",
          description: "Our building construction services ensure timely completion, minimizing delays and ensuring your project is delivered on schedule."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
