import React, { Component } from 'react'
import UpdateClient from '../UpdateClient/UpdateClient'
import AddClient from '../AddClient/AddClient'

function Actions(){
    return (
        <div>
            <UpdateClient />
            <AddClient />
        </div>
    )
}

export default Actions