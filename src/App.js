import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Navigationbar from './pages/components/Navigationbar'

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Dashboard />
    </div>
  );
}

export default App;
