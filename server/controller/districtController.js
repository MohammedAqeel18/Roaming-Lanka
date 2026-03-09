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


export const createDistrict = async(req,res)=>{
    const {name,province,description,image} = req.body;

    const district = new District({
        name,
        province,
        description,
        image
    })

    const createdDistrict = await district.save()

    res.status(201).json(createdDistrict);
}

export const getDistrictById = async(req,res)=>{

    const district = await District.findById(req.params.id)

    if(district){
        res.json(district)
    }else{
        res.status(404)
    
    throw new Error("District not found")
    }
}

export const updateDistrict = async (req,res)=>{
    const district = await District.findById(req.params.id)

    if(district){
        district.name = req.body.name || district.name;
        district.province = req.body.province || district.province;
        district.description = req.body.description || district.description;
        district.image = req.body.image || district.image;

        const updatedDistrict = await district.save()

            res.json(updatedDistrict)
        
    }else{
        res.status(404)
        throw new Error("District not found")
    }
}

export const deleteDistrict = async (req,res)=>{

const district = await District.findById(req.params.id)

if(district){
    await district.deleteOne()

    res.json({message:"District is Deleted"})
}else{
    res.status(404)
    throw new Error("District not found")
}

}


export const createDistrictReview = async(req,res)=>{
    const {rating,comment} = req.body;

    const district = await District.findById(req.params.id)

    if(district){
        const alreadyReviewed = district.reviews.find(
            (r) => r.user.toString()=== req.user._id.toString()
        )

        if(alreadyReviewed){
            res.status(400)
            throw new Error("District already reviewed")
        }

        const review = {
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id
        }

        district.reviews.push(review)

        district.numReviews = district.reviews.length

        district.rating = 
        district.reviews.reduce((acc,item)=> item.rating + acc,0) / district.reviews.length

        await district.save()

        res.status(201).json({message:"review added"})
    }else{
        res.status(404)
        throw new Error("District not found")
    }
}