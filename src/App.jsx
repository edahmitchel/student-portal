import "./signin.css";
import "./App.css";
import Submit from "./pages/Submit";
import DashBoard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Table from "./pages/Table"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Submit />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/admin" element={<SignIn />} />
          <Route path ="/Table" element ={<Table/>}/>
        </Routes>
      </Router>

      {/* <Submit /> */}
    </div>
  );
}

export default App;
