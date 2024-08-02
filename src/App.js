import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashSidebar } from "./components/DashSidebar/DashSidebar";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <DashSidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
