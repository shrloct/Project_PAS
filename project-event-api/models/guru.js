const guru = require("../db/tables/guru")

async function getUsernameGuru(username) {
    try {
        const dataGuru = await guru.findOne({
            where: {username: username}
        })
        return dataGuru
    }
    catch(error) {

    }
}

async function getUsernameGuruByID(id) {
    try{
        const dataGuru = await guru.findOne({
            where: {id: id}
        })
 
    }
    catch(error){

    }
}

async function getDataGuru() {
    
}


module.exports = {getUsernameGuru, getUsernameGuruByID}

// async function get() {
//     const res = await getUsernameGuru('fadhil_one_')
//     console.log(res)
// }
// get()