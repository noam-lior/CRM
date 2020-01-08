import React, {Component} from 'react'
import Badges from '../Badges/Badges'
import Charts from '../Charts/Charts'
import './analytics.css'
import { observer, inject } from 'mobx-react'
@inject("ClientsStore")
@observer
class Analytics extends Component{
    render(){
    return (
        <div id="analytics">
            <Badges  />
            <Charts />
        </div>
    )}

}

export default Analytics