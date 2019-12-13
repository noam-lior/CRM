import React, { Component } from 'react'
import CustomizedTables from '../Table/Table'
import SimpleModal from '../Modal/Modal'
import { observer, inject } from 'mobx-react'

@inject("ClientsStore")
@observer
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            filteredClients: [],
            term: "",
            currentClientID:"",
            field:"name"
        }

    }
    componentWillMount() {
        this.setState({ filteredClients: this.props.ClientsStore.data })
    }

    handleRowClick = async (id) => {
        await this.setState({ currentClientID: id })
        console.log(this.state)
    }

    handleUpdate = (newName, newSurname, newCountry)=>{
        const currentClientID=this.state.currentClientID
        this.props.updateClient(currentClientID,newName,newSurname,newCountry)
    }

    handleSelection=e=>{
        this.setState({field:e.target.value})
    }
    handleChange = e => {
        const value = e.target.value.toLowerCase()
        const clients = this.props.ClientsStore.data
        let filteredClients
        if (value === "")
            filteredClients = clients
        else
            filteredClients = clients.filter(c => c[this.state.field].toLowerCase().startsWith(value))
        this.setState({ filteredClients, term: value })
    }
    render() {
        const filteredClients = this.state.filteredClients
        const fields=["name","surname","country","firstContact","emailType","sold","owner"]
        return (
            <div>
                search: <input onChange={this.handleChange} value={this.state.term}></input>
                <select placeholder="Name" onChange={this.handleSelection}>{fields.map(f => <option>{f}</option>)} </select>
                <CustomizedTables clients={filteredClients} handleRowClick={this.handleRowClick} />
                {/* <SimpleModal currentClient={filteredClients[0]} handleUpdate={this.handleUpdate} /> */}
            </div>
        )
    }
}

export default Clients