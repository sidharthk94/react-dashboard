import logo from "./logo.svg";
import "./App.css";
import MenuBar from "./componence/menuBar/MenuBar";
import HeaderPortion from "./componence/header/HeaderPortion";
import LineChart from "./componence/charts/lineChart/LineChart";
import PieChart from "./componence/charts/pieChar/PieChart";
import Table from "./componence/charts/table/Table";
import SocCard from "./componence/charts/socCard/SocCard";
import Bottom from "./componence/bottom/Bottom";

function App() {
  return (
    <div className="App">
      <div className="menuBar">
        <MenuBar />
      </div>
      <div className="chartPortion">
        <div>
          <HeaderPortion />
        </div>
        <div className="lineandpie">
          <LineChart/>
          <PieChart/>
        </div>
        <div className="tableandsoc">
          <Table/>
          <SocCard/>
        </div>
        <div>
          <Bottom/>
        </div>
      </div>
    </div>
  );
}

export default App;
