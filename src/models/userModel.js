import mongoose from '../db/mongodb'


class UserModel {
    user

    constructor() {

        let userSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
                required: true,
                default: ''
            },
            token: {
                type: String,
                required: false,
                default: ''
            }
        })

        this.user = mongoose.model('user', userSchema)
    }
}

export default new UserModel().user