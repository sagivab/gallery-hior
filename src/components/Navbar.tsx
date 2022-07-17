import Link from "next/link";
import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";
import CloseIcon from "./Icons/Close";
import HamburgetIcon from "./Icons/Hamburger";

interface NavbarProps {
  readonly links: {
    src: string;
    text: string;
  }[];
}

const Navbar: FunctionComponent<NavbarProps> = (props: NavbarProps) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>(props.links[0].text);
  const handleDropdownClicked = (textLinkClicked: string) => {
    setIsMobileNavbarOpen((prev) => !prev);
    setCurrentPage(textLinkClicked);
  };

  const classNameBasedOnState = () => {
    if (!isMobileNavbarOpen) {
      return "hidden";
    } else {
      return "flex";
    }
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

  const setColorTextBasedOnActivePage = (pageName: string) => {
    //not active by default
    let textColor = "text-secondary-dark";

    if (pageName == currentPage) {
      textColor = "text-primary-light";
    }

    return `p-4 uppercase ${textColor} hover:text-primary-light tracking-widest`;
  };

  return (
    <nav className="sticky z-10 top-0">
      <div className="hidden w-full bg-primary-dark md:flex flex-wrap justify-center items-center">
        {props.links.map((link) => (
          <Link href={link.src} key={link.text}>
            <a
              className={setColorTextBasedOnActivePage(link.text)}
              onClick={() => setCurrentPage(link.text)}
            >
              {link.text}
            </a>
          </Link>
        ))}
      </div>
      <div
        className="flex justify-between items-center w-full bg-primary-dark border-md h-30 md:hidden"
        onClick={() => handleDropdownClicked(currentPage)}
      >
        {setIconBasedOnState()}
      </div>
      <div className={`${classNameBasedOnState()} flex-col bg-primary-dark`}>
        {props.links.map((link) => (
          <Link href={link.src} key={link.text}>
            <a
              onClick={() => handleDropdownClicked(link.text)}
              className={`${setColorTextBasedOnActivePage(
                link.text
              )} border-b-2`}
            >
              {link.text}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
