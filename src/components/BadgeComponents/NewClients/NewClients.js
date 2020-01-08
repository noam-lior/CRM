import React, { Component } from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

@inject("ClientsStore")
@observer
class NewClients extends Component {
    render() {
        const date = moment().format('LLLL')
        const month = date.split(" ")[1]
        return (
            <div id="new-clients">
                <FontAwesomeIcon icon={faChartLine}/>
                <span>{this.props.ClientsStore.monthsNewClients}</span>
                <p>new {month} clients</p>
            </div>
        )
    }

}

export default NewClients