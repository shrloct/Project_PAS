const event = require("../db/tables/event")
const {body} = require('express-validator')
const runValidation = require("../helpers/runValidation")

async function addEvent(req, res) {
    const {name, description, category, date, location, max_participant, status, email} = req.body
    const id_guru = req.guru.id

    //tambahin rull sesuai yang di atas, kalau bukan email jangan tambahin isEmail
    const validations = [
        body("email").notEmpty().isEmail().withMessage("email is required")
    ]

    const resultValidations = await runValidation(validations, req)
    if(resultValidations) return responseHelpers(res, 422, {status: false, message: 'Error validation fields', error: resultValidations});


    try {
        await event.create({
            id_guru,
            name,
            description,
            category,
            date,
            location,
            max_participant,
            status,
            email
        })

        return responseHelpers(res, 201, {message: 'Successfully created event'})

    }
    catch(error) {
        console.log(error)
        return responseHelpers(res, 500, {message: 'Internal server error'})
    }
}