import React from "react";

const Footer: React.FC = () => {
  return (
    <h4 className="font-medium">
      created by{" "}
      <a
        className="hover:underline"
        href="https://shayanmahnam.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Shayan
      </a>
    </h4>
  );
};

export default Footer;
