import "../App.css";

function Results() {
  const results = [
    {
      subject: "Data Structures",
      marks: 82,
      grade: "A",
    },
    {
      subject: "Database Management Systems",
      marks: 76,
      grade: "B+",
    },
    {
      subject: "Software Engineering",
      marks: 88,
      grade: "A",
    },
    {
      subject: "Computer Networks",
      marks: 79,
      grade: "B+",
    },
    {
      subject: "Artificial Intelligence",
      marks: 91,
      grade: "A+",
    },
    {
      subject: "Web Development",
      marks: 85,
      grade: "A",
    },
  ];

  return (
    <div className="results-page">
      <div className="results-container">
        <div className="results-header">
          <div className="results-logo">UniTrack</div>

          <h1>My Results</h1>

          <p>View your marks and grades for each subject.</p>
        </div>

        <div className="results-grid">
          {results.map((result) => (
            <div className="result-card" key={result.subject}>
              <div>
                <h2>{result.subject}</h2>
                <p>Final Result</p>
              </div>

              <div className="result-details">
                <div>
                  <span>Marks</span>
                  <strong>{result.marks}%</strong>
                </div>

                <div>
                  <span>Grade</span>
                  <strong>{result.grade}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Results;