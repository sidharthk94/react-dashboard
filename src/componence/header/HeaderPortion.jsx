import React from "react";
import "./HeaderPortion.css";

const HeaderPortion = () => {
  return (
    <div className="headerPortion">
      <div>
        <span>Good Moring !</span>
        <img src="" alt="" />
      </div>

      <div className="proSec">
        <div className="user">
          <span style={{fontSize:"13px"}}>John Doe</span>
          <span>John@Doe.com</span>
        </div>
        <div className="proImg">
          <img src="./Rectangle 10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderPortion;
