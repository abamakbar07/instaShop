import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Navigationbar from './pages/components/navigationbar/Navigationbar'
import Product from './pages/product/Product';
import Admin from './pages/admin/Admin';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Admin />
    </div>
  );
}

export default App;
