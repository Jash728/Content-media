import { useState } from "react";


const Sidebar = () => {
  // State to track the active link
  const [active, setActive] = useState("Home");

  // Function to handle active state change
  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="w-64 h-screen bg-gray-50 flex flex-col justify-between p-4 shadow-lg">
      {/* User Profile */}
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://via.placeholder.com/100" // Replace with actual profile image
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <h2 className="mt-4 text-lg font-semibold">Akshita Gupta</h2>
        <span className="text-green-500 text-sm">Online</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4">
        <button
          onClick={() => handleActive("Ideate")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
            active === "Ideate" ? "bg-orange-200 text-orange-700" : "text-gray-700"
          } hover:text-purple-600`}
        >
          <span>⚡</span> <span>Ideate</span>
        </button>
        <button
          onClick={() => handleActive("Home")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
            active === "Home" ? "bg-orange-200 text-orange-700" : "text-gray-700"
          } hover:text-purple-600`}
        >
          <span>🏠</span> <span>Home</span>
        </button>
        <button
          onClick={() => handleActive("Plan")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
            active === "Plan" ? "bg-orange-200 text-orange-700" : "text-gray-700"
          } hover:text-purple-600`}
        >
          <span>📅</span> <span>Plan</span>
        </button>
        <button
          onClick={() => handleActive("Calendar")}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
            active === "Calendar" ? "bg-orange-200 text-orange-700" : "text-gray-700"
          } hover:text-purple-600`}
        >
          <span>📅</span> <span>Calendar</span>
        </button>
      </nav>

      {/* Settings and Logout */}
      <div className="mt-auto">
        <button
          onClick={() => handleActive("Settings")}
          className={`block text-left w-full px-3 py-2 rounded-lg ${
            active === "Settings" ? "bg-orange-200 text-orange-700" : "text-gray-700"
          } hover:text-purple-600 mb-4`}
        >
          Settings
        </button>
        <button
          onClick={() => handleActive("Logout")}
          className={`block text-left w-full px-3 py-2 rounded-lg ${
            active === "Logout" ? "bg-orange-200 text-orange-700" : "text-gray-700"
          } hover:text-purple-600 mb-8`}
        >
          Logout
        </button>

        {/* Invite People Card */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg p-4 flex flex-col items-center">
          <p className="text-sm">Refer and get early access to new updates and features.</p>
          <button className="mt-2 bg-white text-purple-600 rounded-full px-4 py-1 text-sm font-semibold">
            Invite people
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
