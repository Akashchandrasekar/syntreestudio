import React, { useRef } from "react";
import backgroundImage from "../assets/aerial-view-business-team.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  const RECIPIENT_EMAIL = "syntreestudio@gmail.com";
  const messageDivRef = useRef(null);
  const shopNameRef = useRef(null);

  const handleSend = () => {
    const shopName = document.getElementById("shop-name").value;
    const message = document.getElementById("message").value;

    if (shopName && message) {
      const subject = encodeURIComponent("Message from " + shopName);
      const body = encodeURIComponent(message);
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");
    } else {
      alert("Please fill in all fields before sending.");
    }
  };

  const handleGetInTouch = () => {
    if (messageDivRef.current) {
      messageDivRef.current.scrollIntoView({ behavior: "smooth" });
      messageDivRef.current.classList.add("scale-105", "transition-transform", "duration-300");

      shopNameRef.current.focus();

      setTimeout(() => {
        messageDivRef.current.classList.remove("scale-105");
      }, 500);
    }
  };

  return (
    <div
      className="relative h-full text-white font-raleway"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative container mx-auto py-12 px-6">
        <h2 className="text-4xl text-gray-200 text-center font-bold mb-8">
          Contact <span className="text-pink-500">Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="relative max-w-xl text-center md:text-right p-6 rounded-lg shadow-lg mx-auto bg-black/60">
            <h3 className="text-white text-4xl py-4 font-semibold">
              Contact <span className="text-pink-500">Info</span>
            </h3>
            <p className="text-white text-xl py-2 flex items-center justify-center md:justify-end gap-2">
              <MapPin className="text-pink-500 flex-shrink-0" />
              <span>North Street, Nallur Kumbakonam 614208</span>
            </p>
            <p className="text-white text-xl py-2 flex items-center justify-center md:justify-end gap-2">
              <Phone className="text-pink-500 flex-shrink-0" />
              <span>9092035313 | 9344794518</span>
            </p>
            <p className="text-white text-xl py-2 flex items-center justify-center md:justify-end gap-2">
              <Mail className="text-pink-500 flex-shrink-0" />
              <span>syntreestudio@gmail.com</span>
            </p>
            <div className="flex justify-center md:justify-end mt-6">
              <button
                onClick={handleGetInTouch}
                aria-label="Get in Touch"
                className="bg-blue-500 text-white px-6 py-3 rounded-md cursor-pointer transition transform hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Get in Touch &rarr;
              </button>
            </div>
          </div>

          {/* Send Message Section */}
          <div
            ref={messageDivRef}
            className="relative bg-cover bg-center p-6 rounded-lg shadow-lg transition-transform duration-300"
          >
            <div className="bg-black bg-opacity-70 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-white">Send Message</h3>
              <input
                ref={shopNameRef}
                id="shop-name"
                type="text"
                placeholder="Your shop or company name"
                className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <textarea
                id="message"
                placeholder="Your message with address"
                className="w-full p-3 mb-3 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              ></textarea>
              <button
                onClick={handleSend}
                aria-label="Send Message"
                className="bg-pink-500 text-white p-3 w-full cursor-pointer rounded-md hover:bg-pink-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
