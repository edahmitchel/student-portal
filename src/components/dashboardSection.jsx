import { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./tablerow";
export const DashBoardSection = () => {
  const [allStudents, setAllStudents] = useState([])
  async function fetchAllStudents() {
    const { data } = await axios.get("https://gleaming-tuna-fashion.cyclic.app/student");
    console.log(data);
    if (data) { setAllStudents(data) }

  }
  useEffect(() => {
    fetchAllStudents()

    return () => {

    }
  }, [])


  return (
    <section className="dashboard">
      <div className="head">
        <div className="head__title">
          <h2>Dashboard</h2>
          <span>Submissions</span>
        </div>

        <div className="head__search">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="search" />
        </div>
      </div>

      <div className="submissions">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Reg. Number</th>
              <th>file</th>
              <th>Topic</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Mitchell John</td>
              <td>13/SC/EV/1022</td>
              <td>
                <button className="btn download__btn" type="">
                  Download <i className="uil uil-import"></i>
                </button>
              </td>
              <td className="primary">Details</td>
            </tr>{
              allStudents.map((student) => <TableRow student={student} key={student._id} />)
            }

          </tbody>
        </table>
      </div>
    </section>
  );
};
