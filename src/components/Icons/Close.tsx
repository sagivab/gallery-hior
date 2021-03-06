import React, { Component } from "react";

export default class CloseIcon extends Component {
  render() {
    return (
      <svg
        className="w-9 h-9 text-secondary-dark hover:cursor-pointer hover:text-primary-light"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }
}
