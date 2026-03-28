
import { FaShip, FaPlaneDeparture, FaTruckLoading } from "react-icons/fa";

export const stats = [
  { number: "250", label: "Successful Shipments" },
  { number: "50", label: "Schools Supplied Across Africa" },
  { number: "75", label: "Verified Suppliers (China & India)" },
  { number: "35", label: "Active Business Clients" },
];

// src/constant/constant.js


export const services = [
  {
    title: "Ocean Freight Forwarding",
    description:
      "Multi-modal transport solutions connecting Africa, China, and India via sea with real-time tracking.",
    icon: FaShip,
    // New property for distinct color
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

