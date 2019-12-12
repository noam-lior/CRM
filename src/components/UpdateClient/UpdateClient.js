import React, { Component } from 'react'

class UpdateClient extends Component {
    
    getName=()=>{
        const fullName=document.getElementById('client-input').value
        return fullName.split(' ')
    }
    handleAction=(e)=>{
        let [name,surname]=this.getName()
        const id=e.target.id
        const value=id==="sold"?true:document.getElementById(id+"-selector").value
        this.props.updateClientAction(name,surname,id,value)
    }
    
    render() {
        const owners=this.props.owners
        const emailTypes=this.props.emailTypes
        return (<div>
            <span>UPDATE</span> <br />
            <label for="client">Client:</label>
            <input name="client" id="client-input" placeholder="client Name"></input><br />

            <label for="owner">Transfer Ownership to:</label>
            <select id="owner-selector">{owners.map(o=><option>{o}</option>)}</select>
            <button id="owner" onClick={this.handleAction}>Transfer</button><br />
            
            <label for="email">Send Email:</label>
            <select id="emailType-selector">{emailTypes.map(t=><option>{t}</option>)}</select>
            <button id="emailType" onClick={this.handleAction}>Send</button><br />
            
            <label for="sold">Declare sale!</label>
            <button id="sold" onClick={this.handleAction}>Declare</button>
    </div>)

    }
}

export default UpdateClient