import React from 'react'
import TopEmployees from '../TopEmployees/TopEmployees'
import SalesByCategory from  './SalesByCategory/SalesByCategory'
import ClientAcquisition from './ClientAcquisition/ClientAcquisition'
import SalesSince from './SalesSince/SalesSince'
import './charts.css'
function Charts(){
    return (
        <div id="charts">
           <TopEmployees/>
           <SalesByCategory/>
           <SalesSince/>
           <ClientAcquisition/>
        </div>
    )
}

export default Charts