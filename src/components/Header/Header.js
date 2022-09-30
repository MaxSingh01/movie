import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <span className="title" onClick={() => window.scroll(0, 0)}>
        🎬 Entertainment Hub 🎥
      </span>
      {/* {
        user? : ""
      } */}
    </div>
  );
};

export default Header;
