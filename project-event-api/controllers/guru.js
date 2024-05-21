const runValidation = require("../helpers/runValidation");
const responseHelpers = require("../helpers/responseHelper");
const { getUsernameGuru } = require("../models/guru");
const guru = require("../db/tables/guru");
const generateId = require("../helpers/generateId");
const { hashPassword } = require("../helpers/hash");
const { body, validationResult } = require('express-validator');

async function getDataGuru(req, res) {
    try {
        //get data tetapi tidak ngambil password, createdAt, updatedAt
        const data = await guru.findAll({
            attributes: {exclude: ['password', 'createdAt', 'updatedAt']}
        })
        // return data;
        return responseHelpers(res, 200, data)
    }
    catch {

    }

}
async function registerGuru(req, res) {
    const { name, username, password } = req.body;

    const validation = [
      body("name").notEmpty().withMessage("Name is required"),
      body("username").notEmpty().withMessage("Username is required"), 
      body("password").notEmpty().withMessage("Password is required")
    ];

    // const resValidation = await runValidation(validation, req)
    if(resValidation) return responseHelpers(res, 422, {status: false, message: 'Error validation fields', error: resValidation});

    try {
        //check username of database
        const existingUsername = await getUsernameGuru(username)
        if(existingUsername !== null) return responseHelpers(res, 409, {message: 'username already exist'})

        //hash and generateID
        const hashedPassword = await hashPassword(password)
        const idGuru = await generateId(20)

        //Register
        await guru.create({
            id: idGuru,
            name,
            username,
            password: hashedPassword
        })

        return responseHelpers(res, 201, {message: 'Successfully created teacher account'})
    }

    catch(error) {
        console.log(error)
        return responseHelpers(res, 500, {message: 'Internal server error'})
    }
}


module.exports = {registerGuru, getDataGuru}