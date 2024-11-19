import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const onDateChange = (date) => {
    setSelectedDate(date);
    const mockTasks = [
      { id: 1, title: "Team Meeting", date: "2024-11-20" },
      { id: 2, title: "Submit Assignment", date: "2024-11-20" },
    ];
    const filteredTasks = mockTasks.filter(
      (task) => new Date(task.date).toDateString() === date.toDateString()
    );
    setTasks(filteredTasks);
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Select a Date</h2>
      <Calendar onChange={onDateChange} value={selectedDate} />
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Tasks for {selectedDate.toDateString()}</h3>
        {tasks.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="p-4 bg-gray-100 rounded shadow">
                {task.title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No tasks for this date.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
