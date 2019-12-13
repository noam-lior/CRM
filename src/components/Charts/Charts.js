import React from 'react'
import TopEmployees from '../TopEmployees/TopEmployees'
import SalesByCategory from  '../SalesByCategory/SalesByCategory'
function Charts(){
    return (
        <div>
           <TopEmployees/>
           <SalesByCategory/>
           {/* <SalesSince/> */}
           {/* <ClientAcquisition/> */}
        </div>
    )
}

export default Charts