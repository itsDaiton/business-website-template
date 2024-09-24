import { peoplerandom, instagram, eco, speed, gear, origamiVase, rasenVase, simpleVase } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
];

export const externalLinks = [
  {
    id: "products",
    title: "Products",
  }
]

export const features = [
  {
    id: "feature-1",
    icon: gear,
    title: "Tailored Customization",
    content:
      "Bring your ideas to life with our advanced 3D printing technology, offering unparalleled customization. We create unique, client-specific products that are as functional as they are innovative.",
  },
  {
    id: "feature-2",
    icon: speed,
    title: "Speedy Prototyping",
    content:
      "Accelerate your design process with our rapid prototyping services. We deliver high-quality prototypes quickly, helping you reduce time to market and stay ahead of the competition.",
  },
  {
    id: "feature-3",
    icon: eco,
    title: "Eco-Friendly Production",
    content:
      "Commit to sustainability with our environmentally conscious 3D printing. We minimize waste and use recyclable materials, ensuring that your projects are both cutting-edge and eco-friendly.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "The whole experience was smooth and professional, and we couldn’t be happier with the final products. Highly recommended!",
    name: "Margarida M.",
    title: "People Opps Specialist",
    img: peoplerandom,
  },
  {
    id: "feedback-2",
    content:
      "The team was incredibly supportive throughout the process, and the 20% discount on every third item was a fantastic bonus.",
    name: "Luis R.",
    title: "Mechanical Engineer",
    img: peoplerandom,
  },
  {
    id: "feedback-3",
    content:
      "Everyone was very nice to me. The models turned out great. Would recommend if you want something unique!",
    name: "Maria N.",
    title: "Assistant Professor",
    img: peoplerandom,
  },
];

export const products = [
  {
    id: "product-1",
    content:
      "A simple vase made for your flowers.",
    name: "Simple Flower Vase",
    sizes: "L, M, S",
    img: simpleVase,
  },
  {
    id: "product-2",
    content:
      "A touch of modern to your kitchen.",
    name: "Rasen Vase",
    sizes: "L, M, S",
    img: rasenVase,
  },
  {
    id: "product-3",
    content:
      "A unique vase with the right touch of modern. ",
    name: "Origami Vase",
    sizes: "L, M, S",
    img: origamiVase,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Customers Served",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Premade Models",
    value: "20+",
  },
  {
    id: "stats-3",
    title: "Day Shipping",
    value: "5",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Terms & Conditions",
        link: "terms",
      },
      {
        name: "Privacy Policy",
        link: "privacy-policy",
      },
      {
        name: "Cookie Policy",
        link: "cookie-policy",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/bananafrog3d/",
  },
];

// We keep it empty for now, but might want to add clients later
export const clients = [
  // {
  //   id: "client-1",
  //   logo: airbnb,
  // },
];
