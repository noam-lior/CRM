const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/crm')
const moment =require('moment')
const { count, filter, getSalesSinceLastMonth, getNewClients, getClientAcquisitionData } = require('./auxilaryFunctions')

router.get('/analytics', async function (req, res) {
    const newClients = await getNewClients()
    const emailsSent = await count(`SELECT count(*) AS count FROM client where emailType IS NOT NULL`)
    const outstandingClients = await count(`SELECT count(*) as count FROM client where sold=0`)
    const hottestCountry = await count('SELECT country,count(*) AS count FROM client GROUP BY country ORDER BY count desc LIMIT 1')
    //     const topEmployees = getTopEmployees() name: value[0,val]
    const topEmployees = await filter('SELECT o.name, count(*) AS count FROM client As c INNER JOIN owner AS o ON o.id=c.owner GROUP BY o.name  LIMIT 3')
    const groupByCountry = await filter('SELECT country,count(*) AS count FROM client GROUP BY country')
    const groupByEmailType = await filter('SELECT emailType,count(*) AS count FROM client WHERE emailType IS NOT NULL GROUP BY emailType')
    const groupByMonth = await filter('SELECT MONTH(firstContact) as month,count(*) AS count FROM client GROUP BY MONTH(firstContact)')
    const salesSinceLastMonth = await getSalesSinceLastMonth()
    const clientAcquisiton = await getClientAcquisitionData()
    const analytics = { newClients, emailsSent, outstandingClients, hottestCountry, topEmployees, groupByCountry, groupByEmailType, groupByMonth, salesSinceLastMonth, clientAcquisiton }
    res.send(analytics)
})

router.post('/add-client', async function (req, res) {
    const firstName = req.body.name
    const surname = req.body.surname
    const fullName = firstName + ' ' + surname
    const email = req.body.email
    const country = req.body.country
    const ownerName = req.body.owner
    const firstContact = moment().format('YYYY-MM-DD')
    let query = `SELECT id FROM owner WHERE name='${ownerName}'`
    let result = await sequelize.query(query)
    const ownerID = result[0][0].id
    query = `INSERT INTO client VALUES(NULL,'${fullName}','${email}','${firstContact}',0,'${country}',${ownerID},null)`
    await sequelize.query(query)
    res.send()
})

router.put('/updateClient', async function (req, res) {
    const name = req.body.name
    const field = req.body.field
    let value = req.body.value
    if (field === "owner") { value = await getOwnerID() }
    let query = `UPDATE client SET ${field}=${value} WHERE name='${name}'`
    await sequelize.query(query)
    res.send()
})

async function getOwnerID() {
    let query = `SELECT owner FROM client WHERE name='${name}'`
    let result = await sequelize.query(query)
    return result[0][0].owner
}
module.exports = router