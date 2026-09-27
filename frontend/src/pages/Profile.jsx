import "../App.css";

function Profile() {
  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-logo">UniTrack</div>

        <h1>My Profile</h1>

        <div className="profile-info">
          <div className="profile-item">
            <span>Full Name</span>
            <strong>{student?.fullName || "Not available"}</strong>
          </div>

          <div className="profile-item">
            <span>Email Address</span>
            <strong>{student?.email || "Not available"}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;