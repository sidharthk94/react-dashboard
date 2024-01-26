import React from "react";
import "./SocCard.css";

const SocCard = () => {
  return (
    <div className="socCardMain">
        <img src="./media.png" alt="media" className="pic" />
        <span style={{fontSize:"14px"}}>John Doe</span>
        <span style={{fontSize:"12px"}}>CEO</span>
      <div className="socIcons">
        <img src="./facebook.png" alt="facebook" className="fb" />
        <img src="./instagram.png" alt="instagram" className="fb"/>
        <img src="./twitter.png" alt="twitter" className="fb" />
      </div>
    </div>
  );
};

export default SocCard;
