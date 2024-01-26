import React from "react";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="menubarMain">
      <div className="menuitemsMain">
        <div className="topIconsWraper">
          <div className="topIcons">
            <img src="./Briefcase.png" alt="" className="briefCaseImg" />
            <img src="./StatBoard.png" alt="" className="statBoardImg" />
          </div>
        </div>

        <div className="menuItens">
          <div className="vvv">
            <div className="dasBor">
              <div className="dashboardContainer">
                <img
                  src="./Circled Menu.png"
                  alt="Circled Menu"
                  className="menuIcons"
                />
                <p>Dashboard</p>
              </div>
            </div>
            <div className="othBor">
              <div className="supportContainer">
                <img
                  src="./Support.png"
                  alt="Circled Menu"
                  className="menuIcons"
                />
                <p>Supports</p>
              </div>
            </div>
            <div className="othBor">
              <div className="pluginsContainer">
                <img
                  src="./Puzzle.png"
                  alt="Circled Menu"
                  className="menuIcons"
                />
                <p>Plugins</p>
              </div>
            </div>
            <div className="othBor">
              <div className="helpContainer">
                <img
                  src="./Help.png"
                  alt="Circled Menu"
                  className="menuIcons"
                />
                <p>Help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logoutwrap">
        <span className="logout">LOG OUT</span>
        <img src="./Shutdown.png" alt="" />
      </div>
    </div>
  );
};

export default MenuBar;
