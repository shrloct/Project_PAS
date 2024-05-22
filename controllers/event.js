const event = require("../db/tables/event")
const { body } = require('express-validator')
const runValidation = require("../helpers/runValidation")
const responseHelpers = require("../helpers/responseHelper")
const generateId = require("../helpers/generateId")

async function addEvent(req, res) {
    const { name, description, category, date, location, max_participant, status, email } = req.body
    const id_guru = 'THqCbWoaCCvk1d7lvphb'

    //tambahin rull sesuai yang di atas, kalau bukan email jangan tambahin isEmail
    const validations = [
        body("name").notEmpty().withMessage("name is required"),
        body("description").notEmpty().withMessage("description is required"),
        body("category").notEmpty().withMessage("category is required"),
        body("date").notEmpty().withMessage("date is required"),
        body("location").notEmpty().withMessage("location is required"),
        body("max_participant").notEmpty().withMessage("max_participant is required"),
        body("status").notEmpty().withMessage("status is required"),
        body("email").notEmpty().isEmail().withMessage("email is required")
    ]

    const resultValidations = await runValidation(validations, req)
    if (resultValidations) return responseHelpers(res, 422, { status: false, message: 'Error validation fields', error: resultValidations });

    const id = await generateId(10);

    try {
        await event.create({
            id,
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

        return responseHelpers(res, 201, { message: 'Successfully created event' })

    }
    catch (error) {
        console.log(error)
        return responseHelpers(res, 500, { message: 'Internal server error' })
    }
}

async function updateEvent(req, res) {
    const { name, description, category, date, location, max_participant, status, email } = req.body
    const id_guru = 'THqCbWoaCCvk1d7lvphb'
    try {
        await event.update({
            id_guru, name, description, category, date, location, max_participant, status, email
        })
        return responseHelpers(res, 201, { message: 'Successfully update event' })
    }
    catch (error) {
        console.log(error);
        return responseHelpers(res, 500, { message: 'Internal server error' })
    }
}

module.exports = { addEvent, updateEvent }