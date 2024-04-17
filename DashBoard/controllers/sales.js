// import CourseStat from "../models/CourseStat";
import CourseStat from "../models/CourseStat.js";

export const getSales = async (req,res)=>{
    try{
        const overallStats = await CourseStat.find();
        res.status(200).json(overallStats);
    }catch(error){
        res.status(404).json({message: error.message});
    }
};