import mongoose from "mongoose";

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
    }

},
{
  timeStamps:true  
}
);

const District = mongoose.model("District", districtSchema);
export default District;