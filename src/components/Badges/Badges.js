import React from 'react'
import NewClients from '../NewClients/NewClients'
import EmailsSent from '../EmailsSent/EmailsSent'
import OutstandingClients from '../OutstandingClients/OutstandingClients.js'
import HottestCountry from '../HottestCountry/HottestCountry.js'

function Badges(props) {
    return (
        <div>
            <NewClients />
            <EmailsSent />
            <OutstandingClients />
            <HottestCountry />
        </div>
    )
}

export default Badges