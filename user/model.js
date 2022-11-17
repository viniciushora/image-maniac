const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'usuario (de 5 ate 20 caracteres)'],
        maxlength: 20,
        minlength: 5,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'senha deve ser maior que 3 caracteres'],
        minlength: 3,
    }
})

module.exports = mongoose.model('User', UserSchema)
