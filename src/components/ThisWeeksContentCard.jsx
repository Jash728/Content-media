import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import Modal from './Modal';

const ThisWeeksContentCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 md:p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0 md:max-w-none">
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center space-x-2">
          <FaCalendarAlt 
            className="text-orange-500 cursor-pointer" 
            onClick={openModal} 
          /> 
          <span>This Week's Content</span>
        </h2>
        <span className="text-xs text-gray-500">Nov 1 - Nov 7</span>
      </div>

      
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <span className={day === "Wed" ? "text-black font-semibold" : ""}>{day}</span>
            <span className="text-xs text-gray-400">{index + 1}</span>
          </div>
        ))}
      </div>

     
      <div className="mt-2 p-3 bg-orange-100 text-orange-600 rounded-lg">
        Fix studio location for dance reel
      </div>

     
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-lg font-semibold mb-4">Select a Date</h3>
        <DatePicker 
          selected={selectedDate} 
          onChange={(date) => setSelectedDate(date)} 
          inline 
        />
      </Modal>
    </div>
  );
};

export default ThisWeeksContentCard;
