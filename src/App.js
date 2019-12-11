import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import moment from 'moment'
class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      let data = require('./data.json')
      this.separateFullName(data)
      this.formatDates(data)
      this.setState({ data })
    }, 100)
  }
  separateFullName(data) {
    data.forEach(d => {
      const fullName = d.name.split(' ')
      d.name = fullName[0]
      d.surname = fullName[1]
    })
  }

  formatDates(data){
    data.forEach(d => {
      const date = moment(d.firstContact)
      const year = date.format('YYYY');
      const month = date.format('MM')
      const day = date.format('DD');
      d.firstContact = month + '/' + day + '/' + year
    })
  }
  render() {
    return (
      <div>
        <NavBar data={this.state.data} />
      </div>
    )
  }
}

export default App;
