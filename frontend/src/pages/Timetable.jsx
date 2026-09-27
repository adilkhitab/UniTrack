import "../App.css";

function Timetable() {
  const timetable = [
    {
      day: "Monday",
      classes: [
        {
          time: "09:00 - 10:00",
          subject: "Data Structures",
          room: "Room 101",
        },
        {
          time: "11:00 - 12:00",
          subject: "Database Management Systems",
          room: "Room 203",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          time: "10:00 - 11:00",
          subject: "Computer Networks",
          room: "Lab 2",
        },
        {
          time: "12:00 - 01:00",
          subject: "Software Engineering",
          room: "Room 105",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          time: "09:00 - 10:00",
          subject: "Artificial Intelligence",
          room: "Lab 3",
        },
        {
          time: "11:00 - 12:00",
          subject: "Web Development",
          room: "Lab 1",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          time: "10:00 - 11:00",
          subject: "Data Structures",
          room: "Room 101",
        },
        {
          time: "12:00 - 01:00",
          subject: "Artificial Intelligence",
          room: "Lab 3",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          time: "09:00 - 10:00",
          subject: "Web Development",
          room: "Lab 1",
        },
        {
          time: "11:00 - 12:00",
          subject: "Computer Networks",
          room: "Lab 2",
        },
      ],
    },
  ];

  return (
    <div className="timetable-page">
      <div className="timetable-container">
        <div className="timetable-header">
          <div className="timetable-logo">UniTrack</div>

          <h1>Class Timetable</h1>

          <p>Your weekly class schedule.</p>
        </div>

        <div className="timetable-list">
          {timetable.map((day) => (
            <div className="day-card" key={day.day}>
              <h2>{day.day}</h2>

              <div className="day-classes">
                {day.classes.map((item, index) => (
                  <div className="class-item" key={index}>
                    <div className="class-time">
                      {item.time}
                    </div>

                    <div className="class-info">
                      <strong>{item.subject}</strong>
                      <span>{item.room}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timetable;