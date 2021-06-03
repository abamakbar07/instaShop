import React, { useState } from 'react'
import { API } from '../../config/api'
import "./dashboard.css"
import HeaderDashboard from './views/HeaderDashboard'
import BestProductsDashboard from './views/BestProductsDashboard'

const Dashboard = () => {
   
   return (
     <div className="Dashboard">
        <HeaderDashboard />
        <BestProductsDashboard />
     </div>
   );
}

export default Dashboard
