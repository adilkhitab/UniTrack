import "../App.css";

function Subjects() {
  const subjects = [
    {
      name: "Data Structures",
      code: "CS-201",
      instructor: "Dr. Ahmed",
    },
    {
      name: "Database Management Systems",
      code: "CS-202",
      instructor: "Dr. Ali",
    },
    {
      name: "Software Engineering",
      code: "CS-203",
      instructor: "Dr. Hassan",
    },
    {
      name: "Computer Networks",
      code: "CS-204",
      instructor: "Dr. Usman",
    },
    {
      name: "Artificial Intelligence",
      code: "CS-205",
      instructor: "Dr. Bilal",
    },
    {
      name: "Web Development",
      code: "CS-206",
      instructor: "Mr. Hamza",
    },
  ];

  return (
    <div className="subjects-page">
      <div className="subjects-container">
        <div className="subjects-header">
          <div>
            <div className="subjects-logo">UniTrack</div>
            <h1>My Subjects</h1>
            <p>View your enrolled courses and instructors.</p>
          </div>
        </div>

        <div className="subjects-grid">
          {subjects.map((subject) => (
            <div className="subject-card" key={subject.code}>
              <h2>{subject.name}</h2>

              <p>
                <strong>Course Code:</strong> {subject.code}
              </p>

              <p>
                <strong>Instructor:</strong> {subject.instructor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subjects;