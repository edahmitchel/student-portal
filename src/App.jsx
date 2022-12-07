import "./signin.css";
import "./App.css";
import Submit from "./pages/Submit";
import DashBoard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/DashBoard" element={<DashBoard />} />
        </Routes>
      </Router>

      {/* <Submit /> */}
    </div>
  );
}

export default App;
