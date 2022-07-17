import Footer from "./Footer";
import Navbar from "./Navbar";
import React from "react";

const links = [
  { src: "/", text: "incio" },
  { src: "/artistas", text: "artistas" },
  { src: "/pintura", text: "pintura" },
  { src: "/obra-grafica", text: "obra gráfica" },
  { src: "/fotografia", text: "fotografia" },
  { src: "/escultura", text: "escultura" },
  { src: "/joyeria-de-autor", text: "joyeria de autor" },
  { src: "/otros", text: "otros" },
  { src: "/eventos", text: "eventos" },
  { src: "/catalogos", text: "catalogos" },
  { src: "/contacto", text: "contacto" },
];

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar links={links} />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;