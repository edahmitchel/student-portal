const DashBoard = () => {
  return (
    <section className="dashboard__container">
      <Aside />
      <DashBoardSection />
    </section>
  );
};

const Aside = () => {
  return (
    <aside className="aside">
      <nav className="navbar">
        <ul className="nav__items">
          <li>
            <a href="#">
              <i className="uil uil-estate"></i>
            </a>
          </li>
          <li>
            <a href="#">na-item</a>
          </li>
          <li>
            <a href="#">na-item</a>
          </li>
          <li>
            <a href="#">na-item</a>
          </li>
          <li>
            <a href="#">
              <i className="uil uil-signout"></i>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const DashBoardSection = () => {
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
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashBoard;
