const { where } = require("../db/config")
const guru = require("../db/tables/guru")

async function getUsernameGuru(username) {
    try {
        const dataGuru = await guru.findOne({
            where: { username: username }
        })
        return dataGuru
    }
    catch (error) {

    }
}

async function getUsernameGuruByID(id) {
    try {
        const dataGuru = await guru.findOne({
            where: { id: id }
        })
        return dataGuru

    }
    catch (error) {

    }
}


module.exports = { getUsernameGuru, getUsernameGuruByID }
