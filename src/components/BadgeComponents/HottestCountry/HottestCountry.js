import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { observer, inject } from 'mobx-react'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

@inject("ClientsStore")
@observer

class HottestCountry extends Component {
    render() {
        const hottestCountry = this.props.ClientsStore.hottestCountry
        return (
            <div>
                <FontAwesomeIcon icon={faGlobeAmericas} />
                <span>{hottestCountry}</span>
                <p>Hottest Country</p>
            </div >
        )
    }
}


export default HottestCountry