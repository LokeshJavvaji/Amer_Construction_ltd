import { ServicesPage } from "@/components/services/service";

export default function DesignBuildServices() {
  const data = [
    {
      type: "",
      image: '/designbuild/db1.jpg',
      video:'',
      content: [
        {
          title: 'Expert Design-Build Services',
          description: "Our design-build services provide a seamless experience from conceptualization to completion, ensuring that your project is delivered on time and within budget."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/designbuild/db2.jpg',
      video:'',
      content: [
        {
          title: "Single-Point Responsibility",
          description: "Our design-build services provide single-point responsibility, ensuring that you have a single point of contact for your project."
        },
        {
          title: "Streamlined Communication",
          description: "We streamline communication and project management, ensuring that your project is delivered efficiently and effectively."
        },
        {
          title: "Collaborative Approach",
          description: "Our design-build team collaborates closely with you to understand your needs and deliver a project that meets your expectations."
        },
        {
          title: "Cost-Effective Solutions",
          description: "Our design-build services provide cost-effective solutions, ensuring that your project is delivered within budget."
        },
      ],
    },
    {
      type: "Why Choose Our Design-Build Services?",
      image: '/designbuild/db3.jpg',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of design-build experts has years of experience in delivering high-quality projects, ensuring accurate and reliable results."
        },
        {
          title: "Innovative Solutions",
          description: "We provide innovative design-build solutions that meet your specific needs and exceed your expectations."
        },
        {
          title: "Timely Completion",
          description: "Our design-build services ensure timely completion, minimizing delays and ensuring your project is delivered on schedule."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
