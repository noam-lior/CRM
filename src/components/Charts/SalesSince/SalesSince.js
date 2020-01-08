import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import LineChart from '../LineChart/LineChart'
@inject("ClientsStore")
@observer
class SalesSince extends Component {
    render() {
        const analytics=this.props.ClientsStore.analytics
        return (
            <div id="sales-since-last-month">
                <span>Sales Since Last Month</span>
                <LineChart  data={analytics.salesSinceLastMonth}/>
            </div>
        )
    }

}

export default SalesSince