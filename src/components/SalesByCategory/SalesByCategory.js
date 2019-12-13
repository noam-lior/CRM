import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import VerticalBarChart from '../VerticalBarChart/VerticalBarChart'
@inject("ClientsStore")
@observer
class SalesByCategory extends Component {
    options = ["Country", "Month", "Owner"]
    render() {
        return (
            <div>
                <span>Sales By</span>
                {/* <select onChange={handleChange}>{options.map(o => { <option>{o}</option> })}</select> */}
                {/* data={data} */}
                <VerticalBarChart />
            </div>
        )

    }

}

export default SalesByCategory