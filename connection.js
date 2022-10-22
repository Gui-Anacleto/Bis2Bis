const mongoose  = require('mongoose')

const uri = process.env.STRING_CONNECTION

const connect = async () => {
    db = mongoose.connect(uri)

    return {
        db
    }
}

module.exports = {
    connect,
}