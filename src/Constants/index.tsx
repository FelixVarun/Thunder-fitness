import { Baby, CircleOff, Milk } from "lucide-react";
import { Flame } from "lucide-react";
import { Target } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user1.jpg";
import user3 from "../assets/profile-pictures/user1.jpg";
import user4 from "../assets/profile-pictures/user1.jpg";
import user5 from "../assets/profile-pictures/user1.jpg";
import user6 from "../assets/profile-pictures/user1.jpg";

export const navItems =[
    {label:"Features",href:"#"},
    {label:"Workflow",href:"#"},
    {label:"Pricing",href:"#"},
    {label:"Testimonials",href:"#"}

]


export const features = [
    {
      icon: <CircleOff />,
      text: "Never the same workout twice",
      description:
        "Each workout, focuses on different types of training for different areas of the body, so you’ll never do the same workout twice.",
    },
    {
      icon: <Target />,
      text: "FOCUS MEETINGS",
      description:
        "Our one-on-one focus meetings keep you on track with your goals. You’ll meet with your trainer to discuss mindset, nutrition, and fitness goals getting better results, faster.",
    },
    {
      icon: <ShieldHalf />,
      text: "FLOATING FLOOR",
      description:
        "We use only the most effective gym equipment, including a unique floating floor that acts as a shock absorber to protect joints and prevent injury.",
    },
    {
      icon: <Flame />,
      text: "BURN GEAR",
      description:
        "Wanna know the secret to a great workout? Gear that makes you look as good as you feel.",
    },
    {
      icon: <Milk />,
      text: "BURN NUTRITION",
      description:"We have developed the cleanest supplements to help fuel your body pre/during/post each workout.",
    },
    {
      icon: <Baby />,
      text: "CHILDWATCH",
      description:
        "As a parent, it’s easy to fall into a routine of not taking care of yourself. That’s why our memberships offer free childwatch.",
    },
  ];
  
  export const checklistItems = [
    {
      title: "Code merge made easy",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Review code without worry",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "AI Assistance to reduce time",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
    {
      title: "Share work in minutes",
      description:
        "Track the performance of your VR apps and gain insights into user behavior.",
    },
  ];
  
  export const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Private board sharing",
        "5 Gb Storage",
        "Web Analytics",
        "Private Mode",
      ],
    },
    {
      title: "Pro",
      price: "$10",
      features: [
        "Private board sharing",
        "10 Gb Storage",
        "Web Analytics (Advance)",
        "Private Mode",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      features: [
        "Private board sharing",
        "Unlimited Storage",
        "High Performance Network",
        "Private Mode",
      ],
    },
  ];
  

  export const testimonials = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: user2,
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: user4,
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: user5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: user6,
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];
  
  export const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
  ];
  
  export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
  ];
  
  export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
  ];