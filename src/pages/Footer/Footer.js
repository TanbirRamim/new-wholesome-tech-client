import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bg-black p-5 mt-5">
      <ul className="d-flex justify-content-center align-items-center  text-white  mx-3">
        <li>
          <a>
            <FaFacebook></FaFacebook>
          </a>
        </li>
        <li>
          <a>
            <FaTwitter></FaTwitter>
          </a>
        </li>
        <li>
          <a>
            <FaLinkedinIn></FaLinkedinIn>
          </a>
        </li>
        <li>
          <a>
            <FaInstagram></FaInstagram>
          </a>
        </li>
      </ul>
      <p className="text-white text-center my-3 fs-5 ms-4">
        Copyright© Tanbir Ramim {year}
      </p>
    </div>
  );
};

export default Footer;
