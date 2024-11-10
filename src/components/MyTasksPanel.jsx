import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const MyTasksPanel = ({ tasks = { inProgress: [], toDo: [], upcoming: [] }, onAddTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');

  console.log('Received tasks in MyTasksPanel:', tasks);  
  const handleAddTask = () => {
    console.log(typeof onAddTask)
    if (typeof onAddTask != 'function') {
      console.error('onAddTask is not a function');
      return; 
    }

    const taskDueDate = new Date(taskDate);
    const today = new Date();
    const differenceInDays = Math.ceil((taskDueDate - today) / (1000 * 60 * 60 * 24));

    const newTask = { name: taskName, dueDate: taskDate };
    console.log("New Task:", newTask);

   
    onAddTask(newTask, differenceInDays);

   
    setTaskName('');
    setTaskDate('');

   
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0 md:max-w-none relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">My Tasks</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-purple-500 hover:text-purple-700 focus:outline-none"
          aria-label="Add new task"
        >
          <FaPlus className="w-5 h-5" />
        </button>
      </div>

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-semibold mb-4">Add New Task</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Task Name</label>
              <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                placeholder="Enter task name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <button
              onClick={handleAddTask}
              className="bg-purple-500 text-white px-4 py-2 rounded w-full"
            >
              Add Task
            </button>
          </div>
        </div>
      )}

   
      <div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm md:text-base font-semibold text-purple-500">IN PROGRESS</span>
            </div>
            <span className="text-xs md:text-sm text-gray-500">{tasks.inProgress?.length || 0} task(s)</span>
          </div>
          {tasks.inProgress?.map((task, index) => (
            <div key={index} className="bg-gray-50 p-3 mt-2 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base">{task.name}</p>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
              </div>
              <span className="text-red-500 font-semibold text-sm">High Priority</span>
            </div>
          ))}
        </div>

       
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm md:text-base font-semibold text-gray-500">TO DO</span>
            </div>
            <span className="text-xs md:text-sm text-gray-500">{tasks.toDo?.length || 0} task(s)</span>
          </div>
          {tasks.toDo?.map((task, index) => (
            <div key={index} className="bg-gray-50 p-3 mt-2 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base">{task.name}</p>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
              </div>
              <span className="text-yellow-500 font-semibold text-sm">Medium Priority</span>
            </div>
          ))}
        </div>

      
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm md:text-base font-semibold text-orange-500">UPCOMING</span>
            </div>
            <span className="text-xs md:text-sm text-gray-500">{tasks.upcoming?.length || 0} task(s)</span>
          </div>
          {tasks.upcoming?.map((task, index) => (
            <div key={index} className="bg-gray-50 p-3 mt-2 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium text-sm md:text-base">{task.name}</p>
                <p className="text-xs text-gray-500">Due: {task.dueDate}</p>
              </div>
              <span className="text-green-500 font-semibold text-sm">Low Priority</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default MyTasksPanel;
