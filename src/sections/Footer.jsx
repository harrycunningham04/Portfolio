import React from "react";

const Footer = () => {
  return (
    <section className="c-space border-t border-black-300 pt-7 pb-3 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a href="/terms-and-conditions" className="hover:underline">
          Terms & Conditions
        </a>
        <p>|</p>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/harrycunningham04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/github.svg"
            alt="Visit Harry's GitHub"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.instagram.com/harry9.cunningham/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/instagram.svg"
            alt="Visit Harry's Instagram"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/harry-cunningham-039b7a2b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/linkedin.svg"
            alt="Visit Harry's Linkedin"
            className="w-6 h-6"
          />
        </a>
      </div>

      <p className="text-white-500">© 2025 Harry Cunningham, All Rights Reserved</p>
    </section>
  );
};

export default Footer;
