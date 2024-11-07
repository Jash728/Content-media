const ExperienceCard = () => {
    return (
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto md:mx-0 md:max-w-none">
        <h2 className="text-lg font-semibold mb-4">Experience</h2>
        <div className="flex items-center space-x-2 mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span> 
          <p className="text-gray-600">Our common language: Chai</p>
        </div>
        <button className="px-3 py-1 bg-purple-500 text-white rounded-lg text-sm hover:bg-purple-600">
          Add new experience
        </button>
      </div>
    );
  };
  

  export default ExperienceCard;