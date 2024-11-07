
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content Area */}
    <div className="flex-grow p-6">
      <HomePage />
    </div>
  </div>
  );
}

export default App;
