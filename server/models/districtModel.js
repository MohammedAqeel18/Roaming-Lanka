import mongoose from "mongoose";


const reviewSchema = mongoose.Schema({
    
        name:{
            type:String,
            required:true
        },

        rating:{
            type:Number,
            required:true
        },

        comment:{
            type:String,
            required:true
        },
        user: {
            type:mongoose.Schema.ObjectId,
            required:true,
            ref:"User"
        }
    
},
{
    timeStamps:true
}
)

const districtSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    province:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String
    },

    reviews:[reviewSchema],

    rating:{
        type:Number,
        default:0
    },

    numReviews:{
        type:Number,
        default:0
    }

},
{
  timeStamps:true  
}
);




const District = mongoose.model("District", districtSchema);
export default District;