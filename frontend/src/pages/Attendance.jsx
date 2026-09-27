import "../App.css";

function Attendance() {
  const attendance = [
    {
      subject: "Data Structures",
      attended: 28,
      total: 32,
    },
    {
      subject: "Database Management Systems",
      attended: 30,
      total: 34,
    },
    {
      subject: "Software Engineering",
      attended: 26,
      total: 30,
    },
    {
      subject: "Computer Networks",
      attended: 25,
      total: 29,
    },
    {
      subject: "Artificial Intelligence",
      attended: 27,
      total: 30,
    },
    {
      subject: "Web Development",
      attended: 29,
      total: 32,
    },
  ];

  const calculatePercentage = (attended, total) => {
    return Math.round((attended / total) * 100);
  };

  return (
    <div className="attendance-page">
      <div className="attendance-container">
        <div className="attendance-header">
          <div className="attendance-logo">UniTrack</div>

          <h1>Attendance</h1>

          <p>Track your attendance for each subject.</p>
        </div>

        <div className="attendance-grid">
          {attendance.map((item) => {
            const percentage = calculatePercentage(
              item.attended,
              item.total
            );

            return (
              <div className="attendance-card" key={item.subject}>
                <div className="attendance-card-top">
                  <h2>{item.subject}</h2>

                  <span
                    className={
                      percentage >= 75
                        ? "attendance-status good"
                        : "attendance-status low"
                    }
                  >
                    {percentage}%
                  </span>
                </div>

                <p>
                  Classes Attended:{" "}
                  <strong>
                    {item.attended} / {item.total}
                  </strong>
                </p>

                <div className="attendance-bar">
                  <div
                    className="attendance-progress"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                <p className="attendance-note">
                  {percentage >= 75
                    ? "Attendance is satisfactory"
                    : "Attendance is below 75%"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Attendance;