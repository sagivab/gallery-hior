import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center  text-lg font-bold bg-primary-dark text-primary-light">
      <p>© {new Date().getFullYear()} Galerie Hior</p>
      <p>
        Contáctenos por{" "}
        <a className="underline" href="mailto:info@galeriehior.com">
          correo electrónico
        </a>
      </p>
    </footer>
  );
};

export default Footer;
