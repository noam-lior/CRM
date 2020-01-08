import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faEnvelope, faUser, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import './badge.css'

function Badge(props) {
    const badge = props.badge
    return (
        <div id={badge.id} className="badge">
            <div id={`${badge.id}-icon`} className="icon-container">
                <FontAwesomeIcon icon={badge.icon} />
            </div>
            <div className="badge-info">
                <span className="badge-value">{badge.value}</span>
                <p className="badge-text">{badge.text}</p>
            </div>

        </div>
    )
}

export default Badge