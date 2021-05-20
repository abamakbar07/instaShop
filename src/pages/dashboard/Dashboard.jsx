import React, { useState } from 'react'
import { API } from '../../config/api'
import "./dashboard.css"
import HeaderDashboard from './views/HeaderDashboard'
import BestProductsDashboard from './views/BestProductsDashboard'

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
        <HeaderDashboard />
        <BestProductsDashboard />
     </div>
   );
}

export default Dashboard
