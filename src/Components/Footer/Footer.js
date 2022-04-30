import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-auto">
      <h2>Royal Auto</h2>
      <p>Copyright &copy; 2022 Royal Auto</p>
      <p>All Rights Reserved</p>
      <div class="social-icon">
        <a
          target="_blank"
          href="https://www.facebook.com/t.h.shihab"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
        &nbsp;&nbsp;
        <a
          target="_blank"
          href="https://www.instagram.com/_bahihs_"
          rel="noreferrer"
        >
          <FaInstagramSquare />
        </a>
        &nbsp;&nbsp;
        <a
          target="_blank"
          href="https://twitter.com/toufiqul_hasan"
          rel="noreferrer"
        >
          <FaTwitterSquare />
        </a>
        &nbsp;&nbsp;
        <a
          target="_blank"
          href="https://www.linkedin.com/in/toufiqul-hasan"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;