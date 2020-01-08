import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import HorizontalBarChart from '../Charts/HorizontalBarChart/HorizontalBarChart'
@inject("ClientsStore")
@observer
class TopEmployees extends Component {
    render() {
        const analytics=this.props.ClientsStore.analytics
        return (
            <div id="top-employees">
                <span>Top Employees</span>
                <HorizontalBarChart  data={analytics.topEmployees}/>
            </div>
        )
    }

}

export default TopEmployees