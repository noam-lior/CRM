import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NewClients(props){
    const date=moment().format('LLLL')
    const month=date.split(" ")[1]
    return(
        <div>
            <FontAwesomeIcon icon={["fas","fa-chart-line"]} />
            <span>{props.monthsNewClients}</span>
            <p>new {month} clients</p>
        </div>
    )
}

export default NewClients