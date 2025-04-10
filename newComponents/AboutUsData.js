import { 
  Eye, 
  Target, 
  Compass, 
  Lightbulb, 
  LifeBuoy, 
  BadgeCheck, 
  ShieldCheck, 
  Layout 
} from "lucide-react";

export const navItems = [
  { id: "vision", label: "Vision to Movement", icon: <Eye size={18} /> },
  { id: "ourVision", label: "Our Vision", icon: <Target size={18} /> },
  { id: "mission", label: "Mission", icon: <Compass size={18} /> },
  { id: "philosophy", label: "Philosophy", icon: <Lightbulb size={18} /> },
  { id: "lifecycle", label: "Lifecycle Approach", icon: <LifeBuoy size={18} /> },
  { id: "approach", label: "Our Approach", icon: <Layout size={18} /> },
  { id: "initiatives", label: "Initiatives", icon: <BadgeCheck size={18} /> },
  { id: "trust", label: "Why Trust Us", icon: <ShieldCheck size={18} /> },
];

export const aboutUsContent = {
  vision: {
    title: "FROM VISION TO MOVEMENT",
    content: [
      "Khudarpan started with a belief-simple yet powerful-true empowerment begins with self-reliance. What began as a dream has evolved into a movement, empowering people with the skills, confidence, and community support to define their own success stories.",
      "We empower through mentorship, skill development, and community-led impact, crossing boundaries and unleashing potential. At Khudarpan, we don't just empower people-we build leaders, innovators, and game-changers. Serve with us to redefine self-reliance!"
    ]
  },
  ourVision: {
    title: "OUR VISION",
    content: [
      "Empowering Independence. Changing Lives. We envision a world where independence isn't a privilege—it's a lifestyle.",
      "At Khudarpan, we:"
    ],
    listItems: [
      "Break barriers that hold individuals back",
      "Empower people with skills & opportunities",
      "Create a strong community of changemakers"
    ],
    additionalContent: [
      "This is not a vision—it's our promise to a future where every individual has the ability to make their own success happen. When individuals succeed, the world changes."
    ]
  },
  mission: {
    title: "MISSION",
    content: [
      "Khudarpan Foundation is committed to empowering marginalized communities via initiatives in youth development, nutrition, and education. We create educational platforms, build institutes for disadvantaged children, and fight hunger and malnutrition. Our aim also extends to guiding the youth towards national growth and development, encouraging civic duty and patriotism. We extend services and support to marginalised communities across the country through dedicated teams, fostering social impact."
    ]
  },
  philosophy: {
    title: "PHILOSOPHY OF CHANGE",
    content: [
      "Khudarpan Foundation believes in more than just aid—We believe in lasting change. Our belief in Civic Driven Change is based on the premise that lasting change occurs when each of us owns responsibility for creating an equitable society. By filling the gap between the privileged and the underprivileged, we empower through education, health, and basic resources so that development is not temporary relief but a lasting difference.",
      "India's changing landscape has opened up new avenues, but inequalities remain. At Khudarpan Foundation, we direct collective energies to build a future where every child, every family, and every individual can flourish.",
      "Be part of making a difference. \"We live for others.\""
    ]
  },
  lifecycle: {
    title: "THE LIFECYCLE APPROACH",
    content: [
      "Empowerment is the foundation of our work, with education, health, and access to opportunities as core priorities.",
      "At Khudarpan Foundation, we work on the belief that true empowerment arises from empowering others. We are determined to ensure that all our initiatives result in creating sustainable and meaningful positive impact in the communities we are engaged with.",
      "Education is a key factor in narrowing disparities and promoting gender equality. In addition, it enables people to gain the knowledge and skills required to live healthier and more sustainable lives and to contribute to building a more peaceful and equitable world."
    ]
  },
  approach: {
    title: "OUR APPROACH",
    content: [
      "Our approach is to have close interaction with local communities and healthcare professionals to improve access to vital healthcare services and encourage overall health education.",
      "At Khudarpan Foundation, we take a holistic lifecycle approach: each of our campaigns is aimed at creating lasting change in the communities we work with. From education to healthcare, through efforts in addressing very fundamental needs, we promote the significance of solving key problems through well-focused campaigns that leave an actual impact. Whether we're dealing with human rights, education, or health, our campaigns are poised to leave lasting impact by engaging people, sensitizing them, and pushing for meaningful change."
    ]
  },
  initiatives: {
    title: "OUR INITIATIVES",
    programs: [
      {
        title: "JIGYASA",
        description: "Educational empowerment program focused on providing quality education to underprivileged children and enhancing their learning outcomes.",
        color: "orange-500"
      },
      {
        title: "AAHAR",
        description: "Nutritional support initiative designed to fight hunger and malnutrition among vulnerable communities, especially children.",
        color: "#007c7c"
      },
      {
        title: "KHUSHIYAN",
        description: "Program focused on providing basic needs to underprivileged communities to improve their quality of life and wellbeing.",
        color: "orange-500"
      },
      {
        title: "AURAT",
        description: "Women's empowerment program that focuses on education, skill development, and creating livelihood opportunities for women.",
        color: "#007c7c"
      },
      {
        title: "VASTR",
        description: "Clothing support initiative aimed at providing dignity and protection to vulnerable individuals through adequate clothing.",
        color: "orange-500"
      },
      {
        title: "PARAMARSH",
        description: "Motivational guidance program designed to provide mentorship, counseling, and support to help individuals realize their potential.",
        color: "#007c7c"
      }
    ]
  },
  trust: {
    title: "WHY TRUST US?",
    content: [
      "At Khudarpan, integrity and transparency are the core of all that we do. With a deep passion for social impact, we ensure that every donation and effort reaches the deserving. Our team is made up of committed professionals and volunteers who work day and night to empower underprivileged communities. We have complete accountability through frequent reports and updates, so you can witness the difference your support makes. Trust Khudarpan to convert compassion into meaningful action."
    ]
  },
  governmentInitiatives: {
    title: "Government Initiatives Alignment",
    categories: [
      {
        title: "EDUCATION",
        initiatives: [
          "Sarva Shiksha Abhiyan",
          "National Education Policy",
          "Beti Bachao, Beti Padhao",
          "Digital India"
        ]
      },
      {
        title: "WOMEN EMPOWERMENT",
        initiatives: [
          "Anaemia Mukt Bharat",
          "Poshan Abhiyan",
          "Atmanirbhar Bharat Abhiyan",
          "Anganwadi Strengthening"
        ]
      },
      {
        title: "LIVELIHOOD",
        initiatives: [
          "Skill India",
          "Enhancing Formal Skilling",
          "Rural Development Programs",
          "Self-Help Group Initiatives"
        ]
      }
    ]
  }
}; 