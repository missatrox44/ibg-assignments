import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
