
import GreetingSection from './GreetingSection.jsx';

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-6 p-8">
      <GreetingSection/>
      {/* Other sections (My Tasks, This Week's Content, etc.) will go here */}
    </div>
  );
};

export default HomePage;
