import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-6">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <div className="flex flex-col md:flex-row text-sm text-gray-400">
          <p className="mt-2 md:mt-0">© 2024 CineMagic. All rights reserved.</p>
          <nav className="flex flex-wrap md:pl-4 mt-2 md:mt-0">
            <a href="/terms" className="pl-4 hover:text-gray-100">
              Terms of Use
            </a>
            <a href="/privacy" className="pl-4 hover:text-gray-100">
              Privacy Policy
            </a>
          </nav>
        </div>
        <div className="flex mt-4 gap-4 md:mt-0">
          <a href=""></a>
          <Link className="text-gray-400 hover:text-white">
            <FaFacebook size="20" />
          </Link>
          <Link className="text-gray-400 hover:text-white">
            <FaTwitter size="20" />
          </Link>
          <Link className="text-gray-400 hover:text-white">
            <FaInstagram size="20" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
