import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Navigationbar from './pages/components/navigationbar/Navigationbar'
import Product from './pages/product/Product';
// import Admin from './pages/admin/Admin';

function App() {
  return (
    <Router>

    <div className="App">
      <Navigationbar />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={Product} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
