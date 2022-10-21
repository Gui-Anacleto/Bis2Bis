const mongoose  = require('mongoose')

const uri = "mongodb+srv://root:toor@cluster0.qr1noc5.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    db = mongoose.connect(uri)

    return {
        db
    }
}

module.exports = {
    connect,
}