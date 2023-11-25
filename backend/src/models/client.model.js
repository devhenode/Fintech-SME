const mongoose= require("mongoose")


const clientSchema = new mongoose.Schema({
    organizationName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:50
    },
    location:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    timeZone:{
        type:String,
    },
    currency:{
        type:String,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
    },
    clientType:{
        type:String,
        enum:["Individual","Corporate"],
        default:"Individual"
    
    },
    addedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    lastActive:{
        type:Date,
        default:Date.now
    }
},{timestamps:true})

const Client = mongoose.model("Client",clientSchema)

module.exports = Client