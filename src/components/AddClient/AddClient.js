import React, {Component} from 'react'
import { observer, inject } from 'mobx-react'

@inject("ClientsStore")
@observer
class AddClient extends Component{
    addClient(){
        const name=document.getElementById("name-input").value
        const surname=document.getElementById("surname-input").value
        const country=document.getElementById('country-input').value
        const owner=document.getElementById('owner-input').value
        const email=document.getElementById('email-input').value
        const firstContact=new Date();
        const emailType=null;
        const sold=false;

        const newClient={name,surname,country,owner,firstContact,sold,email,emailType}
        this.props.ClientsStore.addNewClient(newClient)
    }
    render(){
        return (<div>
            <span>ADD CLIENT</span><br />
            <label for="name">First name:</label>
            <input name="name" id="name-input"></input><br />

            <label for="surname">Surname:</label>
            <input name="surname" id="surname-input"></input><br />
            
            <label for="country">Country:</label>
            <input name="country" id="country-input"></input><br />
            
            <label for="owner">Owner:</label>
            <input name="owner" id="owner-input"></input><br />
            
            <label for="email">Email:</label>
            <input name="email" id="email-input"></input><br />
            
            <button id="add-client" onClick={this.addClient}>Add New Client</button>
    </div>)
    }
}

export default AddClient