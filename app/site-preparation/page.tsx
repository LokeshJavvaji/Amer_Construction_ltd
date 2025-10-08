import { ServicesPage } from "@/components/services/service";

export default function SitePreparationServices() {
  const data = [
    {
      type: "",
      image: '/sitepreparation/sp1.webp',
      video:'',
      content: [
        {
          title: 'Expert Site Preparation Services',
          description: "Our site preparation services provide a solid foundation for your construction project, ensuring a safe and efficient start to your build."
        }
      ]
    },
    {
      type: "keyFeatures",
      image: '/sitepreparation/sp2.webp',
      video:'',
      content: [
        {
          title: "Land Clearing and Grading",
          description: "We provide expert land clearing and grading is essential to prepare your site for construction, removing debris and ensuring a level surface."
        },
        {
          title: "Demolition and Debris Removal",
          description: "Our team of experts provides demolition and debris removal services, clearing your site of any obstacles and hazards."
        },
        {
          title: "Excavation and Grading",
          description: "We offer excavation and grading services to prepare your site for foundation work, ensuring a stable and level base."
        },
        {
          title: "Environmental Considerations",
          description: "Our site preparation services take into account environmental considerations, minimizing the impact of your project on the surrounding ecosystem."
        },
      ],
    },
    {
      type: "Why Choose Our Site Preparation Services?",
      image: '/sitepreparation/sp3.jpg',
      video:'',
      content: [
        {
          title: "Experience and Expertise",
          description: "Our team of site preparation experts has years of experience in preparing sites for construction, ensuring accurate and reliable results."
        },
        {
          title: "Safety and Efficiency",
          description: "We prioritize safety and efficiency in our site preparation services, minimizing risks and ensuring a smooth start to your project."
        },
        {
          title: "Customized Solutions",
          description: "Our site preparation services are tailored to your specific needs, ensuring that your site is prepared for a successful construction project."
        }
      ]
    }
  ]

  return (
    <ServicesPage data={data} />
  )
}
