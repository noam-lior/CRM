const moment = require('moment')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/crm')
const date = moment()
async function getNewClients() {
    const [startDate, endDate] = getStartEndDates()
    return count(`SELECT count(*) count FROM client where firstContact>='${startDate}' AND firstContact<='${endDate}'`)
}

function getStartEndDates() {
    const date = moment()
    let currentMonth = date.month()
    currentMonth = currentMonth == 12 ? 1 : currentMonth + 1
    const currentYear = date.year()
    const startDate = `${currentYear}-${currentMonth}-01`
    const endDate = `${currentYear}-${currentMonth}-31`
    return [startDate, endDate]
}

async function getClientAcquisitionData() {
    const lastMonthDate = date.subtract(30, 'd').format('YYYY-MM-DD')
    const sixMonthsAgo = date.subtract(6, 'months').format('YYYY-MM-DD')
    const twelveMonthsAgo = date.subtract(12, 'months').format('YYYY-MM-DD')
    const selection = 'SELECT count(*) AS count FROM client WHERE '
    queries = [
        `${selection} firstContact>='${lastMonthDate}'`,
        `${selection} firstContact>='${twelveMonthsAgo}' AND firstContact<='${sixMonthsAgo}'`,
        `${selection} firstContact<'${twelveMonthsAgo}'`
    ]

    const clientAcquisition=[]
    const names = ["salesLastMonth", "sales6To12Months", "salesPreviousYears"]
    for (let queryIndex in queries) {
        result = await count(queries[queryIndex])
        clientAcquisition.push({ "name":names[queryIndex],"value":result})
    }
        return clientAcquisition
}
async function getSalesSinceLastMonth() {
    const lastMonthDate = date.subtract(30, 'd').format('YYYY-MM-DD')
    let query = `SELECT firstContact as month,count(*) AS count
        FROM client 
        WHERE firstContact>='${lastMonthDate}'
        GROUP BY date(firstContact) 
        ORDER BY firstContact`
    return await filter(query)
}

async function count(query) {
    let result = await sequelize.query(query)
    return result[0][0].count
}

async function filter(query) {
    let result = await sequelize.query(query)
    return result[0]
}

module.exports = { count, filter, getSalesSinceLastMonth, getNewClients, getClientAcquisitionData }