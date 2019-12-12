import React, { Component } from 'react'
import CustomizedTables from '../Table/Table'
import SimpleModal from '../Modal/Modal'
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            filteredClients: [],
            term: "",
            currentClientID:""
        }

    }
    componentWillMount() {
        this.setState({ filteredClients: this.props.data })
    }

    handleRowClick = (id) => {
        this.setState({ currentClientID: id })
    }

    handleUpdate = (newName, newSurname, newCountry)=>{
        const currentClientID=this.state.currentClientID
        this.props.updateClient(currentClientID,newName,newSurname,newCountry)
    }

    handleChange = e => {
        const value = e.target.value.toLowerCase()
        const clients = this.props.data
        let filteredClients
        if (value === "")
            filteredClients = clients
        else
            filteredClients = clients.filter(c => c.name.toLowerCase().startsWith(value))
        this.setState({ filteredClients, term: value })
    }
    render() {
        const filteredClients = this.state.filteredClients
        return (
            <div>
                search: <input onChange={this.handleChange} value={this.state.term}></input>
                <select placeholder="Name">{filteredClients.map(c => <option>{c.name}</option>)}</select>
                <CustomizedTables clients={this.state.filteredClients} handleRowClick={this.handleRowClick} />
                {/* <SimpleModal currentClient={filteredClients[0]} handleUpdate={this.handleUpdate} /> */}
            </div>
        )
    }
}

export default Clients