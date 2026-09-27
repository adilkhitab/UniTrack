import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Subjects from "./pages/Subjects";
import Attendance from "./pages/Attendance";
import Results from "./pages/Results";
import Fees from "./pages/Fees";
import Timetable from "./pages/Timetable";

function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">UniTrack</div>

        <nav>
          <a href="#features">Features</a>
          <a href="#about">About</a>

          <Link to="/login" className="login-btn">
            Login
          </Link>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <p className="tagline">
            UNIVERSITY STUDENT MANAGEMENT SYSTEM
          </p>

          <h1>
            Manage Your University Life
            <span> In One Place.</span>
          </h1>

          <p className="description">
            UniTrack helps students manage courses, attendance, fees,
            examination results, and class schedules through one simple
            platform.
          </p>

          <div className="buttons">
            <Link to="/login" className="primary-btn">
              Get Started
            </Link>

            <a href="#features" className="secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <div>
              <p>Welcome back</p>
              <h2>Student Dashboard</h2>
            </div>

            <div className="avatar">S</div>
          </div>

          <div className="stats">
            <div className="stat-box">
              <p>Attendance</p>
              <strong>87%</strong>
            </div>

            <div className="stat-box">
              <p>Courses</p>
              <strong>06</strong>
            </div>

            <div className="stat-box">
              <p>Result</p>
              <strong>3.6</strong>
            </div>
          </div>

          <div className="progress-section">
            <div className="progress-text">
              <span>Semester Progress</span>
              <span>72%</span>
            </div>

            <div className="progress-bar">
              <div className="progress"></div>
            </div>
          </div>
        </div>
      </main>

      <section className="features" id="features">
        <h2>Everything You Need</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="icon">📚</div>
            <h3>Courses</h3>
            <p>View your enrolled courses and academic information.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📊</div>
            <h3>Attendance</h3>
            <p>Keep track of your attendance for every subject.</p>
          </div>

          <div className="feature-card">
            <div className="icon">💳</div>
            <h3>Fee Records</h3>
            <p>Check your fee status and payment information.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🏆</div>
            <h3>Exam Results</h3>
            <p>Access your examination results and academic performance.</p>
          </div>

          <div className="feature-card">
            <div className="icon">📅</div>
            <h3>Timetable</h3>
            <p>View your daily classes and university schedule.</p>
          </div>

          <div className="feature-card">
            <div className="icon">👤</div>
            <h3>Student Profile</h3>
            <p>Manage your personal and academic profile.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProtectedRoute({ children }) {
  const student = localStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/subjects"
  element={
    <ProtectedRoute>
      <Subjects />
    </ProtectedRoute>
  }
/>

<Route
  path="/attendance"
  element={
    <ProtectedRoute>
      <Attendance />
    </ProtectedRoute>
  }
/>

<Route
  path="/results"
  element={
    <ProtectedRoute>
      <Results />
    </ProtectedRoute>
  }
/>

<Route
  path="/fees"
  element={
    <ProtectedRoute>
      <Fees />
    </ProtectedRoute>
  }
/>

<Route
  path="/timetable"
  element={
    <ProtectedRoute>
      <Timetable />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default App;