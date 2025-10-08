import { ServicesPage } from "@/components/services/service";

export default function MaintenanceRepairsServices() {
  const data = [
    {
      type: "",
      image: '/maintenance/m1.png',
      video:'',
      content: [
        {
          title: 'Expert Maintenance and Repair Services',
          description: "Our maintenance and repair services provide timely and effective solutions for buildings, ensuring that your property remains safe, secure, and well-maintained."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/maintenance/m2.webp',
      video:'',
      content: [
        {
          title: "Preventive Maintenance",
          description: "We provide preventive maintenance services to identify and fix potential issues before they become major problems."
        },
        {
          title: "Timely Repairs",
          description: "Our team of experts provides timely repair services, ensuring that your building remains functional and safe."
        },
        {
          title: "Emergency Response",
          description: "We offer emergency response services to address unexpected issues and minimize downtime."
        },
        {
          title: "Cost-Effective Solutions",
          description: "Our maintenance and repair services are cost-effective, providing value for your investment."
        },
      ],
    },
    {
      type: "Why Choose Our Maintenance and Repair Services?",
      image: '/maintenance/m3.webp',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of maintenance and repair experts has years of experience in providing high-quality services, ensuring accurate and reliable results."
        },
        {
          title: "Prompt Response",
          description: "We respond promptly to your maintenance and repair needs, minimizing downtime and ensuring your building remains functional."
        },
        {
          title: "Client-Centric Approach",
          description: "Our maintenance and repair services are tailored to your specific needs, ensuring that you get the perfect solution for your building."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
