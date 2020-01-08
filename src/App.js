import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import moment from 'moment'
import { observer, inject } from 'mobx-react'

@inject("ClientsStore")
@observer

class App extends Component {

  componentDidMount = () => {
    setTimeout(() => {
      this.props.ClientsStore.loadData()
    }, 100)
  }

  updateClient = (id, newName, newSurname, newCountry) => {
    const data = this.state.data
    const currentClient = data.find(c => c._id === id)
    currentClient.name = newName;
    currentClient.surname = newSurname;
    currentClient.country = newCountry
  }

  render() {
    return (
      <div>
        <NavBar handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App;
