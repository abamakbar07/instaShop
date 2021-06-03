import React, { useContext, useEffect } from 'react'
import "./dashboard.css"
import HeaderDashboard from './views/HeaderDashboard'
import BestProductsDashboard from './views/BestProductsDashboard'
import { ProductContext } from '../../components/context/ProductContext'
import { GetDataProduct } from '../../config/functions/product'

const Dashboard = () => {
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
     <div className="Dashboard">
        <HeaderDashboard />
        <BestProductsDashboard products={product.products} />
     </div>
   );
}

export default Dashboard
