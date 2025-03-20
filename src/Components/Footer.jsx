import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {/* Our Services Section */}
          {/* Our Services Section */}
<div className="single_footer">
  <h4 className="text-xl font-bold mb-4 text-pink-500">
    Our Services
  </h4>
  <ul className="space-y-2">
    <li>
      <Link
        to="/service"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-pink-400 transition"
      >
        Web Design
      </Link>
    </li>
    <li>
      <Link
        to="/service"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-pink-400 transition"
      >
        Web Application
      </Link>
    </li>
    <li>
      <Link
        to="/service"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-pink-400 transition"
      >
        Windows Applications
      </Link>
    </li>
   <li>
       <Link
        to="/service"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-pink-400 transition"
      >
        Mobile Applications
      </Link>
    </li>
    <li>
       <Link
        to="/service"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="hover:text-pink-400 transition"
      >
        UI/UX Design
      </Link>
    </li>
  </ul>
</div>


          <div className="single_footer">
            <h4 className="text-xl font-bold mb-4 text-pink-500">Page Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/service"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-pink-400 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/why-choose-us"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-pink-400 transition"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-pink-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-pink-400 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:text-pink-400 transition"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="single_footer">
            <h4 className="text-xl font-bold mb-4 text-pink-500">
              Stay Connected
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/share/15AZjYq8v3/?mibextid=qi2Omg"
                aria-label="Facebook"
                className="transition transform hover:scale-110"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png"
                  alt="Facebook"
                  width="36"
                  height="36"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/syntree-studio-"
                aria-label="LinkedIn"
                className="transition transform hover:scale-110"
              >
                <img
                  src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNS0xMF8xLnBuZw.png"
                  alt="LinkedIn"
                  width="36"
                  height="36"
                />
              </a>
              <a
                href="https://www.instagram.com/syntree_studio/profilecard/?igsh=MTFkdTRpY3BsandoaA=="
                aria-label="Instagram"
                className="transition transform hover:scale-110"
              >
                <img
                  src="https://img.freepik.com/premium-psd/instagram-application-logo_23-2151544088.jpg?semt=ais_hybrid"
                  alt="Instagram"
                  width="36"
                  height="36"
                />
              </a>
              <a
                href="/"
                aria-label="Location"
                className="transition transform hover:scale-110"
              >
                <img
                  src="https://i.pinimg.com/736x/66/1e/98/661e98a8e38f681575da93d0a1c3f4fc.jpg"
                  alt="Location"
                  width="36"
                  height="36"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <footer className="mt-8 text-center text-gray-500">
          <p className="text-lg font-semibold">
            &copy; 2024 <span className="text-pink-500">Syntree Studio</span>.
            All Rights Reserved.
          </p>
          <p className="text-sm mt-2">Designed with ❤️ by Syntree Studio</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
