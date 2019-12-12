import React, { Component } from 'react'
import UpdateClient from '../UpdateClient/UpdateClient'
import AddClient from '../AddClient/AddClient'

function Actions(props){
    return (
        <div>
            <UpdateClient owners={props.owners} emailTypes={props.emailTypes} updateClientAction={props.updateClientAction} />
            <AddClient addNewClient={props.addNewClient} />
        </div>
    )
}

export default Actions