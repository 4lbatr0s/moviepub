const mongoose = require("mongoose")

async function main(){
    await mongoose.connect("mongodb://localhost/moviepub", {
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    console.log("connected to moviepub database")
}


main()