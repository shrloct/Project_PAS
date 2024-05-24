const event = require("../db/tables/event");
const generateId = require("../helpers/generateId");
const responseHelpers = require("../helpers/responseHelper");


async function addEvent(req, res) {
    const { name, description, category, event_date, location, max_participant, status, email } = req.body

    const guru_id = req.data.id

    //tambahin rull sesuai yang di atas, kalau bukan email jangan tambahin isEmail
    const id = await generateId(10)
    
    try {
        
        await event.create({
            id,
            guru_id,
            name,
            description,
            category,
            event_date,
            location,
            max_participant,
            status,
            email
        });

        return responseHelpers(res, 201, { message: 'Successfully created event' });

    }
    catch (error) {
        console.log(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    };
};

async function updatedEvent(req, res) {
    const { name, description, location, max_participant } = req.body;
    const eventId = 'g65W13oOIK';

    try {
        const [updated] = await Event.update(
            {
                name,
                description,
                category,
                event_date,
                location,
                max_participant,
                email
            },
            {
                where: { id: eventId }
            }
        );

        if (updated) {
            return responseHelpers(res, 200, { message: 'Successfully updated event' });
        } else {
            return responseHelpers(res, 404, { message: 'Event not found' });
        }
    } catch (error) {
        console.error(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
}

async function deleteEvent(req, res) {
    const event_id = 'g65Nl30OIK';
    try {
        await id.event.delete({
            where: {
                id: event_id
            }
        });
        return responseHelpers(res, 201, { message: 'Successfully delete event' });
    } catch (error) {
        console.log(error);
        return responseHelpers(res, 500, { message: 'Internal server error' });
    }
}

module.exports = { addEvent, updatedEvent, deleteEvent };