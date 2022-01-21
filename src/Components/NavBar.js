import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-bar">
        <div className="navigation-image">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
        </div>
        <div className="search-input-container">
          <i class="far fa-search"></i>
          <input
            type="text"
            name="text"
            className="navigation-input"
            placeholder="Search"
          />
        </div>

        <div className="icons-container">
          <svg
            aria-label="Home"
            class="_8-yf5 "
            background="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              id="home1"
              d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"
            ></path>
          </svg>
          <svg
            aria-label="Direct"
            class="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
          <i style={{ fontSize: "24px" }} class="fal fa-plus-square"></i>
          <i style={{ fontSize: "24px" }} class="far fa-user-circle"></i>
          <i style={{ fontSize: "24px" }} class="far fa-compass"></i>
          <i style={{ fontSize: "24px" }} class="far fa-heart"></i>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
