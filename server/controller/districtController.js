import District from "../models/districtModel.js";

export const getDistrict = async (req,res)=>{
    const pageSize = 5
    const page = Number(req.query.page)|| 1

    const keyword = req.query.keyword
    ?{
        name:{
            $regex:req.query.keyword,
            $options:"i"
        }
    }
    :{}

    const count = await District.countDocuments({...keyword})

    const districts = await District.find({...keyword})
    .limit(pageSize)
    .skip(pageSize * (page -1 ))

    res.json({
        districts,
        page,
        pages:Math.ceil(count / pageSize)
    })

}