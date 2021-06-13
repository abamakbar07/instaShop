import React, { useContext, useEffect } from 'react'
import "./dashboard.css"
import HeaderDashboard from './views/HeaderDashboard'
import BestProductsDashboard from './views/BestProductsDashboard'
import { ProductContext } from '../../components/context/ProductContext'

const Dashboard = () => {
   const [product, dispatchProduct] = useContext(ProductContext)

   const getData = (x) => {
      return x.substring(x.search(" ")).slice(1, -1);
   }
   
   const pushData = async () => {
      for (let i = 0; i < product.products.length; i++) {
         const e = product.products[i]        
         const desc = e.caption
         const descSplit = desc.split('----------')
         const content = descSplit[1]
         const contentSplit = content.split(('_'))
         const tag = content.split("#").slice(1)
         
         const detail = {
            id: e.id,
            img: e.media_type === "VIDEO"
               ? e.thumbnail_url
               : e.media_url,
            name: getData(contentSplit[1]),
            size: getData(contentSplit[2]),
            variant: getData(contentSplit[3]),
            price: getData(contentSplit[4]),
            desc: descSplit[0],
            tag: tag.map((data) => data.slice(0, -1))
         }

         dispatchProduct({
            type: "SET_DETAIL_IN_ALLPRODUK",
            payload: {
               detail,
            }
         })
      }

   }

   useEffect(() => {
      if (product.productDetail) {
         dispatchProduct({
            type: "CLEAR_PRODUCT_DETAIL",
         })
      }
   }, [])

   useEffect(() => {
      if (product.products.length > 0 ) {
         pushData()
      }
   }, [product.products])

   return (
     <div className="Dashboard">
        <HeaderDashboard />
        <BestProductsDashboard />
     </div>
   );
}

export default Dashboard
