import React, { Component } from 'react'
import PieChart from '../PieChart/PieChart'
import { observer, inject } from 'mobx-react'
@inject("ClientsStore")
@observer
class ClientAcquisition extends Component {
    render() {
        const analytics = this.props.ClientsStore.analytics
        return (
            <div id='client-acquisition'>
                <span>Client Acquisition</span>
                <PieChart data={analytics.clientAcquisition} />
            </div>

        )

    }
}

export default ClientAcquisition