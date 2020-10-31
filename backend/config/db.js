const mongoose = require('mongoose')

module.exports = async function(mongoURI) {
    try {
        let conn = await mongoose.connect(mongoURI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        })

        console.log(`Connected to ${conn.connection.host}...`)
    }
    catch(err) {
        throw err
        process.exit(1)
    }
}
