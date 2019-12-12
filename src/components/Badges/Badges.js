import React from 'react'
import NewClients from '../NewClients/NewClients'
import EmailsSent from '../EmailsSent/EmailsSent'
import OutstandingClients from '../OutstandingClients/OutstandingClients'
import HottestCountry from '../HottestCountry/HottestCountry'

function Badges() {
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