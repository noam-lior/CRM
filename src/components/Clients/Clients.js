import React, {Component} from 'react'
import CustomizedTables from '../Table/Table'
import Popup from '../Popup/Popup'
class Clients extends Component{
    constructor(){
        super()
        this.state={
            filteredClients:[],
            term:""
        }

    }
    componentWillMount(){
        this.setState({filteredClients:this.props.data})       
    }
    handleChange=e=>{
        const value=e.target.value.toLowerCase()
        const clients=this.props.data
        let filteredClients
        if(value==="")
            filteredClients=clients
        else
            filteredClients=clients.filter(c=>c.name.toLowerCase().startsWith(value))   
        this.setState({filteredClients,term:value})
    }
    render(){
        const filteredClients=this.state.filteredClients
        return(
            <div>
                search: <input onChange={this.handleChange} value={this.state.term}></input>
                <select placeholder="Name">{filteredClients.map(c=><option>{c.name}</option>)}</select>
                <CustomizedTables clients={this.state.filteredClients}/>
                <Popup /> 
                {/* style={{display:"none"}} */}
            </div>
        )
    }
}

export default Clients