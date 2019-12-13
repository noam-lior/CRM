const data = require('./data.json')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/crm')
const moment =require('moment')
// insert owners
// let owners = {}
// for (let registry of data) {
//     if (!owners[registry["owner"]])
//         owners[registry["owner"]] = 1
// }
// owners=Object.keys(owners)
// for(let owner of owners)
// {
//     query=`INSERT INTO owner VALUES(null,'${owner}')`
//     sequelize.query(query)
// }

// insert clients
async function fillClient() {
    let query
    let result
    let name, email, firstContact, emailType, sold, country, owner
    for (registry of data) {
        ({ name, email, firstContact, emailType, sold, country, owner } = registry)

        //modify date
        firstContact = moment(firstContact).format('YYYY-MM-DD')
        // modify sold
        sold = sold ? 1 : 0
        // get owner id
        query = `SELECT id FROM owner WHERE name='${owner}'`
        result = await sequelize.query(query)
        owner = result[0][0].id
        query = emailType?
         `INSERT INTO client
         VALUES(null,'${name}','${email}','${firstContact}',${sold},'${country}',${owner},'${emailType}')`:
         `INSERT INTO client
         VALUES(null,'${name}','${email}','${firstContact}',${sold},'${country}',${owner},null)`
           sequelize.query(query)
    }
}

fillClient()