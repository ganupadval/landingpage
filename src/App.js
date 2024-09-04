import "./App.css";
import NavBar from "./components/NavBar";
import Lander from "./components/Lander";
import Tools from "./components/Tools";
import InfoSection from "./components/InfoSection";
import SeatTable from "./components/SeatTable";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div>
      <div className="section">
        <NavBar />
        <Lander />
      </div>
      <div className="section2">
        <Tools />
      </div>
      <div className="section3">
        <h1 className="text-4xl text-center md:text-5xl lg:text-6xl  text-black mb-4 w-auto max-w-screen-md m-auto">
          How it Works
        </h1>
        <div className="grid py-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <InfoSection />
          <SeatTable />
        </div>

        <div className="grid py-28 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <InfoSection />
          <BarChart />
        </div>
      </div>
    </div>
  );
}

export default App;
