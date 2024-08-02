import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashSidebar } from "./components/DashSidebar/DashSidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { ComingSoon } from "./components/ComingSoon/ComingSoon";
function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <DashSidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
