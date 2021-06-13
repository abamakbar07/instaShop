import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Navigationbar from './pages/components/navigationbar/Navigationbar'
import Product from './pages/product/Product';
import ProductDetail from './pages/productDetail/ProductDetail';
import { useContext, useEffect } from 'react';
import { ProductContext } from './components/context/ProductContext';
import { GetDataProduct } from './config/functions/product';
import Cart from './pages/cart/Cart';

function App() {
   const [product, dispatchProduct] = useContext(ProductContext)
   useEffect(() => {
      GetDataProduct().then((data) => {
         dispatchProduct({
            type: "GET_PRODUCTS",
            payload: {
               data,
            }
         })
      })

      if (product.productDetail) {
         dispatchProduct({
         type: "CLEAR_PRODUCT_DETAIL",
         })
      }

   }, [])
   
   return (
      <Router>

      <div className="App">
         <Navigationbar />
         <div className="pt-5">
            <Switch>
               <Route path="/" exact component={Dashboard} />
               <Route path="/cart" exact component={Cart} />
               <Route path="/product" exact component={Product} />
               <Route path="/product/:id" exact component={ProductDetail} />
            </Switch>
         </div>
      </div>
      </Router>
   );
}

export default App;
