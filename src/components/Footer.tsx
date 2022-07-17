import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center  text-lg font-bold bg-primary-dark text-secondary-dark">
      <p>© {new Date().getFullYear()} Galerie Hior</p>
      <p>
        Contáctenos por{" "}
        <a
          className="underline text-primary-light"
          href="mailto:info@galeriehior.com"
        >
          correo electrónico
        </a>
      </p>
    </footer>
  );
};

export default Footer;
