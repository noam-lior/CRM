import React, { Component } from 'react'
import { faChartLine, faEnvelope, faUserCircle, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import Badge from '../Badge/Badge'
import moment from 'moment'
import './badges.css'
import { observer, inject } from 'mobx-react'
@inject("ClientsStore")
@observer
class Badges extends Component {
    render() {
        const ClientsStore = this.props.ClientsStore
        const date = moment().format('LLLL')
        const month = date.split(" ")[1]
        const analytics=ClientsStore.analytics
        const badgesData = [
            {
                id: 'new-clients',
                icon: faChartLine,
                value: analytics.newClients,
                text: `new ${month} clients`
            },

            {
                id: 'emails-sent',
                icon: faEnvelope,
                value: analytics.emailsSent,
                text: `Emails Sent`
            },

            {
                id: 'outstanding-clients',
                icon: faUserCircle,
                value: analytics.outstandingClients,
                text: `Outstanding Clients`
            },

            {
                id: 'hottest-country',
                icon: faGlobeAmericas,
                value: analytics.hottestCountry,
                text: `Hottest Country`
            }
        ]

        return (
            <div id="badges">
                {badgesData.map(b => <Badge badge={b} />)}
            </div>
        )
    }
}
export default Badges