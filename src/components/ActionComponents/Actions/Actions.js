import React, { Component } from 'react'
import UpdateClient from '../UpdateClient/UpdateClient'
import AddClient from '../AddClient/AddClient'
import './actions.css'
function Actions(){
    return (
        <div id="actions">
            <UpdateClient />
            <AddClient />
        </div>
    )
}

export default Actions