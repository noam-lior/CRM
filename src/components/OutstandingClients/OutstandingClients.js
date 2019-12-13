import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NewClients(props){

    const clients=props.getOutstandingClients()
    return(
        <div>
            <FontAwesomeIcon icon={["fas","fa-chart-line"]} />
            <span>clients</span>
            <p>new {month} clients</p>
        </div>
    )
}

export default NewClients