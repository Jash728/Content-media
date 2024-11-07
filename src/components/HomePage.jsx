import GreetingSection from "./GreetingSection";
import MyTasksPanel from "./MyTasksPanel";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-6 p-4 md:p-8">
      <GreetingSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MyTasksPanel />
      </div>
    </div>
  );
};

export default HomePage;
