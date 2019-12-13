import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NewClients(props){
    const emailsSent=props.getEmailsSent()
    return(
        <div>
            <FontAwesomeIcon icon={["far","fa-envelope"]} />
            <span>{emailsSent}</span>
            <p>Emails Sent</p>
        </div>
    )
}

export default NewClients