import React from 'react'
import NewClients from '../NewClients/NewClients'
import EmailsSent from '../EmailsSent/EmailsSent'
import OutstandingClients from '../OutstandingClients/OutstandingClients.js'
import HottestCountry from '../HottestCountry/HottestCountry'

function Badges(props) {
    return (
        <div>
            <NewClients getMonthsNewClient={props.getMonthsNewClient}/>
            <EmailsSent emailsSent={props.emailsSent}/>
            <OutstandingClients />
            <HottestCountry />
        </div>
    )
}

export default Badges