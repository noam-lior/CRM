import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './addClient.css'
@inject("ClientsStore")
@observer
class AddClient extends Component {
    addClient=()=> {
        const name = document.getElementById("name-input").value
        const surname = document.getElementById("surname-input").value
        const country = document.getElementById('country-input').value
        const owner = document.getElementById('owner-input').value
        const email = document.getElementById('email-input').value
        const firstContact = new Date();
        const emailType = null;
        const sold = false;

        const newClient = { name, surname, country, owner, firstContact, sold, email, emailType }
        this.props.ClientsStore.addNewClient(newClient)
    }
    render() {
        return (<div id="add-client">
            <span id="add-client-title">ADD CLIENT</span>
            <div id="add-client-grid">
                <span id="name-label">First name:</span>
                <input name="name" id="name-input"></input>

                <span id="surname-label">Surname:</span>
                <input name="surname" id="surname-input"></input>

                <span id="country-label">Country:</span>
                <input name="country" id="country-input"></input>

                <span id="owner-label">Owner:</span>
                <input name="owner" id="owner-input"></input>

                <span id="email-label">Email:</span>
                <input name="email" id="email-input"></input>
            </div>
            <button id="add-client-button" onClick={this.addClient}>Add New Client</button>
        </div>
        )
    }
}

export default AddClient