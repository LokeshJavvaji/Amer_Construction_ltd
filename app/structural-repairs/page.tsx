import { ServicesPage } from "@/components/services/service";

export default function StructuralRepairsServices() {
  const data = [
    {
      type: "",
      image: '/structuralrepairs/sr1.png',
      video:'',
      content: [
        {
          title: 'Expert Structural Repairs Services',
          description: "Our structural repairs services provide expert solutions to restore the integrity and safety of your building, ensuring it remains stable and secure."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/structuralrepairs/sr2.jpg',
      video:'',
      content: [
        {
          title: "Assessment and Diagnosis",
          description: "We provide expert assessment and diagnosis services to identify the root cause of structural issues and develop effective repair solutions."
        },
        {
          title: "Structural Reinforcement",
          description: "Our team of experts provides structural reinforcement services, strengthening your building's foundation and structure to prevent future damage."
        },
        {
          title: "Repair and Restoration",
          description: "We offer repair and restoration services to restore your building's structural integrity, ensuring it remains safe and functional."
        },
        {
          title: "Preventative Maintenance",
          description: "Our structural repairs services include preventative maintenance to identify and address potential issues before they become major problems."
        },
      ],
    },
    {
      type: "Why Choose Our Structural Repairs Services?",
      image: '/structuralrepairs/sr3.jpeg',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of structural repairs experts has years of experience in delivering high-quality services, ensuring accurate and reliable results."
        },
        {
          title: "Safety and Quality",
          description: "We prioritize safety and quality in our structural repairs services, ensuring that your building is restored to a safe and stable condition."
        },
        {
          title: "Cost-Effective Solutions",
          description: "Our structural repairs services provide cost-effective solutions, minimizing the financial impact of repairs and ensuring your building remains functional."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
