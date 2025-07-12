import React from "react";
import { FaCar, FaCheckCircle, FaWallet, FaHeadphones } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCar className="text-3xl text-primary" />,
    title: "Free Shipping",
    subtitle: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-3xl text-primary" />,
    title: "Safe Money",
    subtitle: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-3xl text-primary" />,
    title: "Secure Payment",
    subtitle: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphones className="text-3xl text-primary" />,
    title: "Online Support 24/7",
    subtitle: "Technical Support 24/7",
  },
];

function TrustBadges() {
  return (
    <div className="container my-20 mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-2">
            {item.icon}
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustBadges;