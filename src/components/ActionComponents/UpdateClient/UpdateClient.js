import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import './updateClient.css'
@inject("ClientsStore")
@observer
class UpdateClient extends Component {

    getName = () => {
        const fullName = document.getElementById('client-input').value
        return fullName.split(' ')
    }
    handleAction = (e) => {
        let [name, surname] = this.getName()
        let id = e.target.id
        id=id.split('-')[0]
        id=id==='email'?'emailType':id;
        const value = id === "sold" ? true : document.getElementById(id + "-selector").value
        this.props.ClientsStore.updateClientAction(name, surname, id, value)
    }

    render() {
        const owners = this.props.ClientsStore.owners
        const emailTypes = this.props.ClientsStore.emailTypes
        return (<div id="update-client">
            <span id="update-title">UPDATE</span>
            <div id="update">
                <div id="client-name">
                    <span >Client:</span>
                    <input name="client" id="client-input" placeholder="client Name"></input>
                </div>

                <span id="owner-label">Transfer Ownership to:</span>
                <select id="owner-selector">{owners.map(o => <option>{o}</option>)}</select>
                <button id="owner-button" onClick={this.handleAction}>Transfer</button>

                <span id="email-label">Send Email:</span>

                <select id="email-selector" placeholder="Email-Type">{emailTypes.filter(t => t !== "null").map(t => <option>{t}</option>)}</select>
                <button id="email-button" onClick={this.handleAction}>Send</button>

                <span id="sold-label">Declare sale!</span>
                <button id="sold-button" onClick={this.handleAction}>Declare</button>
            </div>
        </div>
        )

    }
}

export default UpdateClient