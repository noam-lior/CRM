import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react'
import { faUser } from '@fortawesome/free-solid-svg-icons'

@inject("ClientsStore")
@observer

class OutstandingClients extends Component {
    render() {
        const outstandingClients = this.props.ClientsStore.outstandingClients
        return (
            <div>
                <FontAwesomeIcon icon={faUser} />
                <span>{outstandingClients}</span>
                <p>Outstanding Clients</p>
            </div>
        )
    }

}

export default OutstandingClients