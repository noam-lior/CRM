import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

@inject("ClientsStore")
@observer
class EmailsSent extends Component {
    render() {
        const emailsSent = this.props.ClientsStore.emailsSent
        return (
            <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{emailsSent}</span>
                <p>Emails Sent</p>
            </div>
        )
    }

}

export default EmailsSent