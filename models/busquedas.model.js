const {Schema, model} = require("mongoose");

const busquedasSchema = new Schema(
    {
        description:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        lat:{
            type:number, 
            required:true
        },
        lon:{
            type:number, 
            required:true
        },
        country:{
            type:String, 
            required:true
        }, 
        image:{
            type:String, 
            required:true
        },
        temp:{
            type:Number, 
            required:true
        }, 
    }
)