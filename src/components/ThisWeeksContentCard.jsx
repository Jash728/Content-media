import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import Modal from './Modal';

const ThisWeeksContentCard = ({ tasks = {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [weekTasks, setWeekTasks] = useState([]);
  const [tasksForTheWeek, setTasksForTheWeek] = useState(tasks);

  
  const getTasksForDate = (date) => {
    
    const allTasks = [...tasks.inProgress, ...tasks.toDo, ...tasks.upcoming];

    return allTasks.filter(
      (task) => new Date(task.dueDate).toDateString() === date.toDateString()
    );
  };

 
  const initializeWeekTasks = () => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const tasksForWeek = Array.from({ length: 7 }).map((_, index) => {
      const dayDate = new Date(startOfWeek);
      dayDate.setDate(startOfWeek.getDate() + index);
      return { date: dayDate, tasks: getTasksForDate(dayDate) };
    });

    setWeekTasks(tasksForWeek);
  };

 
  useEffect(() => {
    console.log('Received tasks:', tasks); 
    setTasksForTheWeek(tasks); 
    initializeWeekTasks(); 
  }, [tasks]); 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const startOfWeek = new Date();
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0 md:max-w-none">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center space-x-2">
          <FaCalendarAlt className="text-orange-500 cursor-pointer" onClick={openModal} />
          <span>This Week's Content</span>
        </h2>
        <span className="text-xs text-gray-500">Week of {startOfWeek.toLocaleDateString()}</span>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        {weekTasks.map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className={day.date.toDateString() === new Date().toDateString() ? "text-black font-semibold" : ""}>
              {day.date.toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <span className="text-xs text-gray-400">{day.date.getDate()}</span>
            {day.tasks && day.tasks.length > 0 ? (
              day.tasks.map((task, taskIndex) => (
                <span key={taskIndex} className="text-xs text-orange-500">
                  {task.name}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-400">No tasks</span>
            )}
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} inline />
      </Modal>
    </div>
  );
};

export default ThisWeeksContentCard;
