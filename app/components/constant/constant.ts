import { FaShip, FaPlaneDeparture, FaTruckLoading } from "react-icons/fa";

//what We Do
export const whatWeDo = [
  {
    title: "Ocean Freight Forwarding",
    description:
      "Multi-modal transport solutions connecting Africa, China, and India via sea with real-time tracking.",
    icon: FaShip,
    color: {
      text: "text-blue-700",
      bg: "bg-blue-100",
      hover: "group-hover:bg-blue-700",
    },
  },
  {
    title: "Air Cargo Expediting",
    description:
      "Time-sensitive air freight services for high-priority shipments across key trade hubs.",
    icon: FaPlaneDeparture,
    color: {
      text: "text-orange-700",
      bg: "bg-orange-100",
      hover: "group-hover:bg-orange-700",
    },
  },
  {
    title: "Last-Mile Distribution",
    description:
      "End-to-end shipping that includes local trucking and inland delivery with full compliance support.",
    icon: FaTruckLoading,
    color: {
      text: "text-green-700",
      bg: "bg-green-100",
      hover: "group-hover:bg-green-700",
    },
  },
];

// FAQ
export interface FAQItem {
  question: string;
  answer: string;
}

export const shippingFaqs: FAQItem[] = [
  {
    question: "How do I track my international shipment in real-time?",
    answer:
      "Once your cargo is dispatched, you will receive a unique tracking ID compatible with our global portal. This provides live updates on vessel location for sea freight and flight milestones for air cargo, ensuring full visibility from port to port.",
  },
  {
    question: "What is the estimated transit time for sea vs. air freight?",
    answer:
      "Air freight typically takes 5–10 business days for global delivery. Sea freight transit times vary by route: China to Africa generally takes 30–45 days, while India to the Americas ranges between 25–35 days, depending on transshipment hubs.",
  },
  {
    question: "Are my goods insured during the shipping process?",
    answer:
      "We offer comprehensive Marine Cargo Insurance that covers loss or damage from external causes during transit. We highly recommend this for high-value electronics and fragile building materials to mitigate risks during handling.",
  },
  {
    question: "Do you provide 'Door-to-Door' delivery in Africa?",
    answer:
      "Yes. Our logistics network includes robust last-mile delivery services across major African hubs. We handle the transition from the arrival port to our local warehouses and finally to your specified commercial or residential address.",
  },
  {
    question: "Who handles the customs documentation and duties?",
    answer:
      "Our specialized clearing agents manage all paperwork, including Bill of Lading, Form M, and commercial invoices. We calculate estimated duties upfront to ensure your shipment complies with local regulations and avoids costly port delays.",
  },
  {
    question: "What happens if my shipment is delayed at the port?",
    answer:
      "While we strive for punctuality, port congestion can occur. In such cases, our local teams coordinate directly with port authorities to prioritize your containers and provide you with daily status reports until clearance is secured.",
  },
];

// hwo it works
export const steps = [
  {
    id: "01",
    title: "Consolidate Requirements",
    desc: "Submit your sourcing needs from Asia or India. Our agents unify product specifications and confirm factory compliance.",
  },
  {
    id: "02",
    title: "Optimized Freight Routing",
    desc: "We select the optimal air or sea path, ensuring competitive transit and secure handling for your specialized cargo.",
  },
  {
    id: "03",
    title: "Customs Clearance Mastery",
    desc: "Our regulatory experts manage all documentation (Form M/Bill of Lading) for rapid release at African ports.",
  },
];

// stats
export const stats = [
  {
    number: "250",
    label: "Global Shipments Delivered",
    suffix: "+",
  },
  {
    number: "50",
    label: "Partnerships Across Africa",
    suffix: "+",
  },
  {
    number: "75",
    label: "Verified Global Manufacturers",
    suffix: "+",
  },
  {
    number: "35",
    label: "Strategic Corporate Clients",
    suffix: "+",
  },
];


// testimonial
interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}
export const testimonials: Testimonial[] = [
  {
    name: "Adebayo O.",
    role: "Construction Project Lead, Lagos",
    image: "/assets/man1.jpg", 
    content:
      "Nonosllc made the process of sourcing quality building materials from China incredibly smooth. From consultation to delivery at the Apapa Port, everything was handled professionally.",
    rating: 5,
  },
  {
    name: "Dr. Elara Vance",
    role: "Director, Accra Medical Supply",
    image: "/assets/man2.jpg", 
    content:
      "Importing sensitive diagnostic equipment requires extreme precision. Nonosllc's Air Freight Solutions delivered critical tech to Ghana under tight deadlines, fully compliant and secure.",
    rating: 5,
  },
  {
    name: "Michael Osei",
    role: "Owner, Global Tech Traders Ltd.",
    image: "/assets/man3.jpg", 
    content:
      "We needed a reliable partner for bulk electronics sourcing in India. Nonosllc delivered on all counts—competitively priced, on time, and with full customs handling for the Accra market.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Sourcing Manager, Mumbai Dynamics",
    image: "/assets/man4.jpg", 
    content:
      "Nonosllc simplified our outbound logistics to African markets significantly. Their network optimization between Mumbai and Lagos has reduced our transit costs and delivery times by 20%.",
    rating: 5,
  },
  {
    name: "Sidi Mohamed",
    role: "Logistics Lead, Casablanca Textile Corp.",
    image: "/assets/man5.jpg",
    content:
      "For raw textile sourcing in China, Nonosllc is unparalleled. Their dedicated account management keeps us informed, ensuring our manufacturing lines never face downtime. They are a crucial partner.",
    rating: 5,
  },
];

// why us
 export const items = [
   {
     id: "01",
     title: "Strategic Global Sourcing",
     desc: "Direct access to verified manufacturing hubs in China and India. We eliminate middlemen to secure high-quality products at factory-direct pricing.",
     image: "/assets/container.jpg",
     reverse: false, 
   },
   {
     id: "02",
     title: "Seamless Trade Corridors",
     desc: "Expertly managing complex logistics across Asia, Africa, and the Americas. We ensure your cargo moves through international borders without friction.",
     image: "/assets/seamless.png",
     reverse: true, 
   },
   {
     id: "03",
     title: "Regulatory & Customs Mastery",
     desc: "Comprehensive documentation and clearance services. We navigate local regulations and duty structures so your business stays fully compliant.",
     image: "/assets/clearance.png",
     reverse: false,
   },
   {
     id: "04",
     title: "End-to-End Visibility",
     desc: "From the factory floor to your warehouse door. Our precision-engineered tracking ensures you have full control over your supply chain milestones.",
     image: "/assets/end.png",
     reverse: true,
   },
];
 
interface ServiceItem {
  title: string;
  desc: string;
  image: string;
}

 export const services: ServiceItem[] = [
   {
     title: "Warehousing Services",
     desc: "We have expansive, state-of-the-art facilities designed to provide comprehensive solutions including distribution, secure storage, and advanced inventory management.",
     image: "/assets/warehouse.jpg",
   },
   {
     title: "Air Freight Services",
     desc: "We proudly partner with top airlines and globally recognized freight forwarders to deliver seamless, efficient, and highly reliable air freight solutions.",
     image: "/assets/air-freight.png",
   },
   {
     title: "Sea Transport Services",
     desc: "Wherever your cargo is headed, we expertly manage the shipment process for you, ensuring efficiency and reliability while keeping your business competitive.",
     image: "/assets/ship.png",
   },
   {
     title: "Network & Route",
     desc: "Our transportation strategy experts develop a comprehensive roadmap, identifying the most effective solutions and streamlining organization for optimal efficiency.",
     image: "/assets/globe.jpg",
   },
   {
     title: "Local Shipping Services",
     desc: "We work closely with our strategic partners to provide comprehensive domestic trucking solutions, ensuring our clients receive everything they need, exactly where they need it.",
     image: "/assets/local.jpg",
   },
   {
     title: "Customs Clearance",
     desc: "With certified logistics expertise and cutting-edge technology, we transform your supply chain while minimizing downtime to keep your operations running smoothly.",
     image: "/assets/clearance.png",
   },
 ];