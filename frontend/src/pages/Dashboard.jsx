import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {
  const navigate = useNavigate();

  const student = JSON.parse(localStorage.getItem("student"));

  const handleLogout = () => {
    localStorage.removeItem("student");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
  <Link to="/dashboard" className="dashboard-logo">
    UniTrack
  </Link>

  <div className="dashboard-actions">
    <Link to="/dashboard" className="home-btn">
      Dashboard
    </Link>

    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  </div>
</header>

      <main className="dashboard-content">
        <div className="welcome-section">
          <h1>
            Welcome, {student?.fullName || "Student"}!
          </h1>

          <p>
            Here's an overview of your student account.
          </p>
        </div>

        <div className="dashboard-grid">
          <Link to="/profile" className="dashboard-card">
            <h2>Profile</h2>
            <p>View your personal information.</p>
          </Link>

          <Link to="/subjects" className="dashboard-card">
            <h2>Subjects</h2>
            <p>View your enrolled subjects.</p>
          </Link>

          <Link to="/attendance" className="dashboard-card">
            <h2>Attendance</h2>
            <p>Check your attendance records.</p>
          </Link>

          <Link to="/results" className="dashboard-card">
            <h2>Results</h2>
            <p>View your examination results.</p>
          </Link>

          <Link to="/fees" className="dashboard-card">
            <h2>Fee Status</h2>
            <p>Check your fee information.</p>
          </Link>

          <Link to="/timetable" className="dashboard-card">
            <h2>Timetable</h2>
            <p>View your class timetable.</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;