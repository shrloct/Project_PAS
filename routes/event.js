var express = require('express')
const { body } = require('express-validator')
const { addEvent, deleteEvent, updatedEvent } = require('../controllers/event')
const validate = require('../middleware/validate')
const router = express.Router()


const validations = [
    body("name").notEmpty().withMessage("name is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("category").notEmpty().withMessage("category is required"),
    body("date").notEmpty().withMessage("date is required"),
    body("event_date").notEmpty().withMessage("event_date is required"),
    body("location").notEmpty().withMessage("location is required"),
    body("max_participant").notEmpty().withMessage("max_participant is required"),
    body("status").notEmpty().withMessage("status is required"),
    body("email").notEmpty().isEmail().withMessage("email is required")
]

router.post('/create', addEvent)
router.post('/create', validate(validations), addEvent);
router.put('/update/', validate(validations), updatedEvent);
router.post('/delete/:id', validate(validations), deleteEvent);

module.exports = router