import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Aside } from "../components/aside";
import { DashBoardSection } from "../components/dashboardSection";
import TableRow from "../components/tablerow";
import { students } from "../data";


const DashBoard = () => {
  const [user, setUser] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setUser(user);
    if (!user) {
      navigate("/");
    }
    // console.log("hello");
    // console.log(location);
  }, [location.pathname]);

  return (
    <section className="dashboard__container">
      <Aside />
      <DashBoardSection />
    </section>
  );
};


export default DashBoard;
