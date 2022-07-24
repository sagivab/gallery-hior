import Link from "next/link";
import React, { useState } from "react";
import CloseIcon from "./Icons/Close";
import HamburgetIcon from "./Icons/Hamburger";

interface NavbarProps {
  readonly links: {
    src: string;
    text: string;
  }[];
}

const Navbar = ({ links }: NavbarProps) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>(links[0].text);
  const handleDropdownClicked = (textLinkClicked: string) => {
    setIsMobileNavbarOpen((prev) => !prev);
    setCurrentPage(textLinkClicked);
  };

  const setColorTextBasedOnActivePage = (pageName: string) => {
    //inactive by default
    let textColor = "text-secondary-dark";

    if (pageName == currentPage) {
      textColor = "text-primary-light";
    }

    return `p-4 uppercase ${textColor} hover:text-primary-light tracking-widest`;
  };

  const setIconBasedOnState = () => {
    if (!isMobileNavbarOpen) {
      return (
        <>
          <span className="sr-only">Open main menu</span>
          <HamburgetIcon />
        </>
      );
    } else {
      return <CloseIcon />;
    }
  };

  return (
    <nav className="sticky z-10 top-0 flex center  justify-center h-16 bg-primary-dark text-xl">
      <button
        onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
        className="flex justify-center items-center md:hidden border-0 h-11 w-11 rounded-full bg-primary-dark  absolute top-1/2 left-7 -translate-y-1/2 hover:bg-secondary-dark"
      >
        {setIconBasedOnState()}
      </button>
      <ul
        className={`${
          isMobileNavbarOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row justify-center items-center w-full absolute top-16 left-0 md:static gap-x-3 tracking-widest uppercase bg-primary-dark`}
      >
        {links.map((link) => {
          return (
            <li
              key={link.text}
              className={setColorTextBasedOnActivePage(link.text)}
            >
              <Link href={link.src}>
                <a
                  className="block w-full"
                  onClick={() => handleDropdownClicked(link.text)}
                >
                  {link.text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
