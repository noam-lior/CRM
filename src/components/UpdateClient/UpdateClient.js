import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject("ClientsStore")
@observer
class UpdateClient extends Component {
    
    getName=()=>{
        const fullName=document.getElementById('client-input').value
        return fullName.split(' ')
    }
    handleAction=(e)=>{
        let [name,surname]=this.getName()
        const id=e.target.id
        const value=id==="sold"?true:document.getElementById(id+"-selector").value
        this.props.ClientsStore.updateClientAction(name,surname,id,value)
    }
    
    render() {
        const owners=this.props.ClientsStore.owners
        const emailTypes=this.props.ClientsStore.emailTypes
        return (<div id="update">
            <span>UPDATE</span> <br />
            
            <span>Client:</span>
            <input name="client" id="client-input" placeholder="client Name"></input><br />

            <span>Transfer Ownership to:</span>
            <select id="owner-selector">{owners.map(o=><option>{o}</option>)}</select>
            <button id="owner-button" onClick={this.handleAction}>Transfer</button><br />
            
            <span>Send Email:</span>
            <select id="email-selector">{emailTypes.map(t=><option>{t}</option>)}</select>
            <button id="emailType-button" onClick={this.handleAction}>Send</button><br />
            
            <span>Declare sale!</span>
            <button id="sold" onClick={this.handleAction}>Declare</button>
    </div>)

    }
}

export default UpdateClient