import reqRes from '../middlewares/reqRes'
import express from 'express'
// import userAuth from '../middlewares/userAuth'
import userController from '../controller/userController'

class userRoutes {
    router

    constructor() {
        this.router = express.Router()
        this.routes()
    }

    //signin of the user 
    signin(req, res) {
            userController.signin(req.body)
                .then((result) => {
                    reqRes.responseHandler('signin successful', result, res);
                    res.end()
                })
                .catch((err) => {
                    reqRes.httpErrorHandler(err, res);
                    res.end();
                })
    }

    //sign up of the user
    signup(req, res) {
            console.log("signup ente", req.body)
            userController.signup(req.body)
                .then((result) => {
                    reqRes.responseHandler('signup successful', result, res);
                    res.end()
                })
                .catch((err) => {
                    reqRes.httpErrorHandler(err, res);
                    res.end();
                })
    }



    routes() {
        this.router.post('/signin', this.signin)
        this.router.post('/signup', this.signup)
    }
}

export default new userRoutes().router