import { observable, action, computed } from 'mobx'
import moment from 'moment'
export class ClientsStore {
    @observable data

    @computed get owners() { return this.filterDuplicates("owner") }
    @computed get emailTypes() { return this.filterDuplicates("emailType") }
    @computed get monthsNewClients() {
        const currentMonth = moment().month()
        const currentYear = moment().year()
        const clientsArray = this.data.filter(d =>
            moment(d.firstContact).month() == currentMonth && moment(d.firstContact).year() == currentYear)
        const newClients = clientsArray.length
        return newClients
    }

    @computed get emailsSent() {
        return this.data.filter(d => d.emailType).length
    }


    // @computed get hottestCountry(){
        
    // }

    @action loadData() {
        this.data = require('../data.json')
        this.separateFullName()
        this.formatDates()
    }

    @action updateClientAction = (name, surname, field, value) => {
        const currentClientIndex = this.data.findIndex(c => c.name === name && c.surname === surname)
        this.data[currentClientIndex][field] = value
    }

    @action addNewClient = (newClient) => {
        this.data.push(newClient)
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

