import React from 'react'
import moment from 'moment'

function NewClients(props){
    const date=moment().format('LLLL')
    const month=date.split(" ")[1]
    const clients=props.getMonthsNewClients()
    return(
        <div>
            <span></span>
            <p>new {month} clients</p>
        </div>
    )
}

export default NewClients