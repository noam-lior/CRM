import React from 'react'
import { observable, action, computed } from 'mobx'
import moment from 'moment'
import axios from 'axios'
export class ClientsStore {
    @observable data
    @observable analytics
    @computed get owners() { return this.filterDuplicates("owner") }
    @computed get emailTypes() { return this.filterDuplicates("emailType") }
    // @computed get monthsNewClients() {
    //     const currentMonth = moment().month()
    //     const currentYear = moment().year()
    //     const clientsArray = this.data.filter(d =>
    //         moment(d.firstContact).month() == currentMonth && moment(d.firstContact).year() == currentYear)
    //     const newClients = clientsArray.length
    //     return newClients
    // }

    // @computed get emailsSent() {
    //     return this.data.filter(d => d.emailType).length
    // }


    // @computed get hottestCountry(){

    // }

    @action loadData() {
        const data = require('../data.json')//  transfer to SQL
        this.data = data
        this.separateFullName()
        this.formatDates()
        this.loadAnalytics()
    }

    @action updateClientAction = async (name, surname, field, value) => {

        try {
            const body = { name: `${name} ${surname}`, surname, field, value }
            await axios.put('http://localhost:8990/updateClient', body)
            const currentClientIndex = this.data.findIndex(c => c.name === name && c.surname === surname)
            this.data[currentClientIndex][field] = value
        }
        catch (e) { console.log("invalid input") }
    }

    @action addNewClient = (newClient) => {
        axios.post('http://localhost:8990/add-client', newClient)
    }

    @action loadAnalytics = async () => {
        let data = await axios.get('http://localhost:8990/analytics')
        this.analytics = data.data;
    }

    separateFullName() {
        this.data.forEach(d => {
            const fullName = d.name.split(' ')
            d.name = fullName[0]
            d.surname = fullName[1]
        })
    }

    formatDates() {
        this.data.forEach(d => {
            const date = moment(d.firstContact)
            const year = date.format('YYYY');
            const month = date.format('MM')
            const day = date.format('DD');
            d.firstContact = month + '/' + day + '/' + year
        })
    }

    filterDuplicates = (field) => {
        let duplicateTracker = {}
        const data = this.data
        for (let registry of data)
            if (!duplicateTracker[registry[`${field}`]])
                duplicateTracker[registry[`${field}`]] = 1
        return Object.keys(duplicateTracker)
    }
}

