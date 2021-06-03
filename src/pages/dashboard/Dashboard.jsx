import React, { useContext, useEffect } from 'react'
import { API, instagramAPI } from '../../config/api'
import "./dashboard.css"
import HeaderDashboard from './views/HeaderDashboard'
import BestProductsDashboard from './views/BestProductsDashboard'
import { ProductContext } from '../../components/context/ProductContext'

const Dashboard = () => {
   const [product, dispatchProduct] = useContext(ProductContext)

   const getData = async () => {
      try {
         const param = {
            params: {
               fields: "id,media_type,caption,media_url,thumbnail_url",
               access_token:
               "IGQVJWYzBqX2M1YU9KTnpjZAm9nbDRMLVVJTVhHNnQ2TEkzeTdxUFJHa2ItODNTWlNnMW5tdUs4WUxJZAjl6N2YxYXFQSVVYbDlJVFNhXzFPYThkdTBLWG9tenNacjRpVk52SmVnbXJkRTgyT2MxQ3FfNQZDZD",
            },
         };
         const result = await instagramAPI.get('/me/media', param)
         const data = result.data.data
         
         dispatchProduct({
            type: "GET_PRODUCTS",
            payload: {
               data,
            }
         })
         
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getData()
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
