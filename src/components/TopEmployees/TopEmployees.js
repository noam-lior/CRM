import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import HorizontalBarChart from '../HorizontalBarChart/HorizontalBarChart'
@inject("ClientsStore")
@observer
class TopEmployees extends Component {
    render() {
        return (
            <div>
                <span>Top Employees</span>
                {/* data={this.props.topThreeEmployees} */}
                <HorizontalBarChart  />
            </div>
        )
    }

}

export default TopEmployees