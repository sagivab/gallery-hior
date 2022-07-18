import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { ReactNode } from "react";

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

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="">
      <Navbar links={links} />
      <div className="mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
