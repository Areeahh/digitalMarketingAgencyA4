import { Link } from "react-router-dom";

export default function DashboardPage() {

  function toggleMenu() {
    console.log("Menu toggled");
  }

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav>

        <Link to="/">
          <h2>Digital Marketing Agency</h2>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>

      </nav>

      {/* ================= PAGE CONTENT ================= */}
      <div className="page">

        <h1>Dashboard</h1>

        <p>
          Overview of your marketing campaigns and performance.
        </p>

        {/* ================= DASHBOARD ACTION CARDS ================= */}
        <div className="dashboard-cards">

          {/* View All */}
          <div className="card">
            <h3>View All</h3>

            <button className="view-btn">
              View All Records
            </button>
          </div>

          {/* Add New */}
          <div className="card">
            <h3>Add Record</h3>

            <button className="add-btn">
              Add New
            </button>
          </div>

          {/* Update */}
          <div className="card">
            <h3>Update</h3>

            <button className="update-btn">
              Update Record
            </button>
          </div>

          {/* Delete */}
          <div className="card">
            <h3>Delete</h3>

            <button className="delete-btn">
              Delete Record
            </button>
          </div>

        </div>

        {/* ================= TABLE SECTION ================= */}
        <h2>Recent Campaign Records</h2>

        <button className="view-all-record">
          View All Records
        </button>

        <div className="table-container">

          <table
            style={{
              minWidth: "600px",
              maxWidth: "1000px",
            }}
          >

            <thead>
              <tr>
                <th>Campaign</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Budget</th>
                <th>Performance</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>SEO Growth</td>
                <td>Google</td>
                <td>Active</td>
                <td>$500</td>
                <td>High</td>

                <td>
                  <button className="action-btn edit">
                    Update
                  </button>

                  <button className="action-btn del">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Social Boost</td>
                <td>Instagram</td>
                <td>Active</td>
                <td>$300</td>
                <td>Medium</td>

                <td>
                  <button className="action-btn edit">
                    Update
                  </button>

                  <button className="action-btn del">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Ad Campaign</td>
                <td>Facebook</td>
                <td>Paused</td>
                <td>$200</td>
                <td>Low</td>

                <td>
                  <button className="action-btn edit">
                    Update
                  </button>

                  <button className="action-btn del">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Email Reach</td>
                <td>Email</td>
                <td>Active</td>
                <td>$150</td>
                <td>High</td>

                <td>
                  <button className="action-btn edit">
                    Update
                  </button>

                  <button className="action-btn del">
                    Delete
                  </button>
                </td>
              </tr>

              <tr>
                <td>Content Strategy</td>
                <td>Blog</td>
                <td>Completed</td>
                <td>$250</td>
                <td>Medium</td>

                <td>
                  <button className="action-btn edit">
                    Update
                  </button>

                  <button className="action-btn del">
                    Delete
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-container">

          <div>
            <h3>Dashboard</h3>

            <p>
              Track and manage your campaigns efficiently.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>

            <p>
              <Link to="/">Home</Link>
            </p>

            <p>
              <Link to="/services">Services</Link>
            </p>
          </div>

        </div>

      </footer>
    </>
  );
}