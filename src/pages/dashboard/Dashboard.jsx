import React, { useState } from 'react'
import { API } from '../../config/api'

const Dashboard = () => {
   const [data, setData] = useState({})

   const getData = async () => {
      try {
         const result = await API.get('/products')
         setData({
            data: result.data
         })
      } catch (error) {
         setData({
            status: "Error fetch Data"
         })
      }
   }

   return (
     <div className="Dashboard">
        DASHBOARD
        <button onClick={getData}>Get produk</button>
        <div>
           {JSON.stringify(data)}
        </div>
     </div>
   );
}

export default Dashboard
