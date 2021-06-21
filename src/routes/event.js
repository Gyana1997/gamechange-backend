import reqRes from '../middlewares/reqRes'
import express from 'express'
import userAuth from '../middlewares/userAuth'
import eventController from '../controller/eventController'

class eventRoutes {
    router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    //get event  list 
    getEventList(req, res) {
            eventController.getEvents(req)
                .then((result) => {
                    reqRes.responseHandler('Events fetched', result, res);
                    res.end()
                })
                .catch((err) => {
                    reqRes.httpErrorHandler(err, res);
                    res.end();
                })
    }

    //add event in database 
    addEvent(req, res) {

            eventController.addEvent(req.body)
                .then((result) => {
                    reqRes.responseHandler('Event Added', result, res);
                    res.end()
                })
                .catch((err) => {
                    reqRes.httpErrorHandler(err, res);
                    res.end();
                })
    }

    //get event by ID
    getEventById(req, res) {

        console.log("asuchi ki nai", req.params.id)
        eventController.getEventById(req.params)
                .then((result) => {
                    reqRes.responseHandler('Got the event', result, res);
                    res.end()
                })
                .catch((err) => {
                    reqRes.httpErrorHandler(err, res);
                    res.end();
                })
    }


    routes() {
        this.router.post('/add', userAuth, this.addEvent)
        this.router.get('/list', userAuth, this.getEventList)
        this.router.get('/:id', userAuth, this.getEventById)
    }
}

export default new eventRoutes().router