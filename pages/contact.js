import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import TooltipCopyToClipboard from "@/components/TooltipCopyToClipboard";
import { GoBack } from "@/components/GoBack";
import config from "@/config";
import { useState } from "react";

export default function Contact() {
  const email = config.email;
  const phoneNumber = config.phoneNumber;
  const location = config.location;

  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // Add state variable for visibility

  const handleEmailClick = () => {
    if (!isHidden) {
      setIsHidden(true); // Hide the tooltip
    }
  };

  return (
    <div
      className="min-h-screen hero bg-neutral " // Add conditional class for visibility
      style={{
        backgroundImage: `url("https://i.ibb.co/hHpVwKQ/desktop-1920x1080.png")`,
      }}
    >
      <div className="flex mx-auto my-auto mt-4 shadow-md card w-96 bg-base-100 hover:shadow-xl ">
        <div className="card-body card-glow ">
          <h2 className="card-title">Contact Me!</h2>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-600" />
            <div className="text-gray-700">Based on: {location} </div>
          </div>
          <div className="flex items-center mt-2">
            <FaPhone className="mr-2 text-gray-600" />
            <div className="text-gray-700">{phoneNumber}</div>
          </div>
          <div
            className={`relative flex items-center my-2 ${
              isHovered ? "cursor-pointer" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleEmailClick} // Add onClick event handler
          >
            <FaEnvelope className="mr-2 text-gray-600" />

            <TooltipCopyToClipboard textToCopy={email}>
              {email}
            </TooltipCopyToClipboard>
          </div>
          <GoBack />
        </div>
      </div>
    </div>
  );
}
