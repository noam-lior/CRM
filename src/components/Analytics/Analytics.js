import React from 'react'
import Badges from '../Badges/Badges'
import Charts from '../Charts/Charts'
function Analytics(props) {
    return (
        <div>
            <Badges
                getMonthsNewClient={props.getMonthsNewClient}
                emailsSent={props.emailsSent} />
            <Charts />
        </div>
    )

}

export default Analytics