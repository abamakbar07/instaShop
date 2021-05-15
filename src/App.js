import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Navigationbar from './pages/components/navigationbar/Navigationbar'
import Product from './pages/product/Product';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Product />
    </div>
  );
}

export default App;
