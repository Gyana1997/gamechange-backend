import eventModel from '../models/eventModel'
import cred from '../config/const'

class eventController {

    constructor() { }

    //get pollist 
    getEvents(data) {
        
        return new Promise((resolve, reject) => {
            eventModel.find({})
                .then((events) => {
                    resolve(events)
                })
                .catch((err) => {
                    reject({ code: 500, msg: "Error while getting events", error: err })
                })
        })
    }

    addEvent(data) {

        return new Promise((resolve, reject) => {
            eventModel.findOne({
                    "name": data.name
                })
                .then((event) => {
                    if(event){
                        reject({ code: 500, msg: "Event already exist", error: event })
                    } else {
                        let eveModel = new eventModel(data)
                        return eveModel.save()
                    }
                })
                .then((isSaved) => {
                    if(isSaved){
                        resolve(isSaved)
                    }
                })
                .catch((err) => {
                    console.log("111111", err)
                    reject({ code: 500, msg: "Error while adding event", error: err })
                })
        })
    }

    getEventById(data) {
        console.log("controller ku asuchi ", data)
        return new Promise((resolve, reject) => {
            eventModel.findOne({
                    "_id": data.id
                })
                .then((event) => {
                    if(event){
                        resolve(event)
                    }
                })
                .catch((err) => {
                    console.log("111111", err)
                    reject({ code: 500, msg: "Error while adding event", error: err })
                })
        })
    }

    
}


export default new eventController()
