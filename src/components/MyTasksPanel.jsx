import React, { useState } from 'react';

const MyTasksPanel = () => {
  const [isInProgressOpen, setIsInProgressOpen] = useState(false);
  const [isToDoOpen, setIsToDoOpen] = useState(false);
  const [isUpcomingOpen, setIsUpcomingOpen] = useState(false);

  const ArrowIcon = ({ isOpen }) => (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0 md:max-w-none">
      <h2 className="text-lg font-semibold mb-4">My Tasks</h2>

      {/* Task Category: In Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base font-semibold text-purple-500">IN PROGRESS</span>
            <button
              onClick={() => setIsInProgressOpen(!isInProgressOpen)}
              className="focus:outline-none flex items-center"
            >
              <ArrowIcon isOpen={isInProgressOpen} />
            </button>
          </div>
          <span className="text-xs md:text-sm text-gray-500">1 task</span>
        </div>
        {isInProgressOpen && (
          <div className="bg-gray-50 p-3 mt-2 rounded-lg flex flex-wrap md:flex-nowrap justify-between items-center">
            <div className="w-full md:w-auto mb-2 md:mb-0">
              <p className="font-medium text-sm md:text-base">Museum visit reel editing</p>
              <p className="text-xs text-gray-500">Due: Today</p>
            </div>
            <span className="text-red-500 font-semibold text-sm">High Priority</span>
          </div>
        )}
      </div>

      {/* Task Category: To Do */}
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base font-semibold text-gray-500">TO DO</span>
            <button
              onClick={() => setIsToDoOpen(!isToDoOpen)}
              className="focus:outline-none flex items-center"
            >
              <ArrowIcon isOpen={isToDoOpen} />
            </button>
          </div>
          <span className="text-xs md:text-sm text-gray-500">1 task</span>
        </div>
        {isToDoOpen && (
          <div className="bg-gray-50 p-3 mt-2 rounded-lg flex flex-wrap md:flex-nowrap justify-between items-center">
            <div className="w-full md:w-auto mb-2 md:mb-0">
              <p className="font-medium text-sm md:text-base">Finish writing blog post</p>
              <p className="text-xs text-gray-500">Due: Tomorrow</p>
            </div>
            <span className="text-yellow-500 font-semibold text-sm">Medium Priority</span>
          </div>
        )}
      </div>

      {/* Task Category: Upcoming */}
      <div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base font-semibold text-orange-500">UPCOMING</span>
            <button
              onClick={() => setIsUpcomingOpen(!isUpcomingOpen)}
              className="focus:outline-none flex items-center"
            >
              <ArrowIcon isOpen={isUpcomingOpen} />
            </button>
          </div>
          <span className="text-xs md:text-sm text-gray-500">1 task</span>
        </div>
        {isUpcomingOpen && (
          <div className="bg-gray-50 p-3 mt-2 rounded-lg flex flex-wrap md:flex-nowrap justify-between items-center">
            <div className="w-full md:w-auto mb-2 md:mb-0">
              <p className="font-medium text-sm md:text-base">Plan next week's video shoot</p>
              <p className="text-xs text-gray-500">Due: Monday</p>
            </div>
            <span className="text-green-500 font-semibold text-sm">Low Priority</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTasksPanel;
