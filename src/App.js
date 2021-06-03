import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Navigationbar from './pages/components/navigationbar/Navigationbar'
import Product from './pages/product/Product';
import ProductDetail from './pages/productDetail/ProductDetail';
// import Admin from './pages/admin/Admin';

function App() {
  return (
    <Router>

    <div className="App">
      <Navigationbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={Product} />
        <Route path="/product/:id" exact component={ProductDetail} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
