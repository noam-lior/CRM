import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import moment from 'moment'
class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      owners: [],
      emailTypes: [],
      monthsNewClients:0
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      let data = require('./data.json')
      this.separateFullName(data)
      this.formatDates(data)
      const owners=this.filterDuplicates(data,"owner")
      const emailTypes=this.filterDuplicates(data,"emailType")
      const monthsNewClients=this.getMonthsNewClients(data)
      this.setState({ data,owners,emailTypes,monthsNewClients })
    }, 100)
  }

  getMonthsNewClients(data){
    const currentMonth=moment().month()
    const currentYear=moment().year()
    const clientsArray=data.filter(d=> moment(d.firstContact).month()==currentMonth && moment(d.firstContact).year()==currentYear)
    const newClients=clientsArray.length
    return newClients
  }

  emailsSent=(data)=>
  {
    return data.filter(d=>d.emailType).length
  }

  
  separateFullName(data) {
    data.forEach(d => {
      const fullName = d.name.split(' ')
      d.name = fullName[0]
      d.surname = fullName[1]
    })
  }

  updateClient = (id, newName, newSurname, newCountry) => {
    const data = this.state.data
    const currentClient = data.find(c => c._id === id)
    currentClient.name = newName;
    currentClient.surname = newSurname;
    currentClient.country = newCountry
  }
  formatDates(data) {
    data.forEach(d => {
      const date = moment(d.firstContact)
      const year = date.format('YYYY');
      const month = date.format('MM')
      const day = date.format('DD');
      d.firstContact = month + '/' + day + '/' + year
    })
  }

  filterDuplicates = (data,field) => {
    let duplicateTracker = {}
    for (let registry of data)
      if (!duplicateTracker[registry[`${field}`]])
        duplicateTracker[registry[`${field}`]] = 1
    return Object.keys(duplicateTracker)
  }

  updateClientAction=(name,surname,field,value)=>{
    const data=this.state.data
    const currentClientIndex=data.findIndex(c=>c.name===name&& c.surname===surname)
    let newData=[...data]
    newData[currentClientIndex][field]=value
    this.setState({data:newData})
  }

  addNewClient=(newClient)=>{
    const data=this.state.data
    const newData=[...data]
    newData.push(newClient)
    this.setState({data:newData})
  }

  render() {
    return (
      <div>
        <NavBar data={this.state.data} owners={this.state.owners} emailTypes={this.state.emailTypes} updateClientAction={this.updateClientAction} addNewClient={this.addNewClient}/>
      </div>
    )
  }
}

export default App;
