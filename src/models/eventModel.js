import mongoose from '../db/mongodb'


class EventModel {
    event

    constructor() {
        let eventSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            participants: {
                type: String,
                required: true
            },
            details: {
                type: String,
                required: false
            },
            address: {
                type: String,
                required: false
            },
            date: {
                type: Date,
                required: true
            }
        })

        this.event = mongoose.model('event', eventSchema)
    }
}

export default new EventModel().event