
import { ServicesPage } from "@/components/services/service"

export default function ConstructionProjectManagementServices() {
  const data = [
    {
      type: "",
      image: '/project/p9.jpg',
      video:'',
      content: [
        { 
          title: 'Expert Construction Project Management Services',
          description: "Our construction project management services ensure timely delivery, budget adherence, and quality standards for your construction projects."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/project/p2.webp',
      video:'',
      content: [
        { 
          title: "Comprehensive Project Planning",
          description: "We develop detailed project plans, including timelines, budgets, and resource allocation, to ensure successful project execution."
        },
        { 
          title: "Risk Management and Mitigation",
          description: "Our team identifies potential risks and develops strategies to mitigate them, ensuring minimal disruptions to your project."
        },
        { 
          title: "Quality Control and Assurance",
          description: "We implement quality control measures to ensure that your project meets the required standards and specifications."
        },
        { 
          title: "Stakeholder Communication and Management",
          description: "Our team ensures effective communication and management of stakeholders, including clients, contractors, and suppliers."
        },
      ],
    },
    {
      type: "Why Choose Our Construction Project Management Services?",
      image: '/project/p5.webp',
      video:'',
      content: [
        { 
          title: "Experienced Project Managers",
          description: "Our team of project managers has extensive experience in managing construction projects, ensuring successful project delivery."
        },
        { 
          title: "Proven Track Record",
          description: "We have a proven track record of delivering projects on time, within budget, and to the required quality standards."
        },
        { 
          title: "Cost-Effective Solutions",
          description: "Our construction project management services provide cost-effective solutions, ensuring that your project stays within budget."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
