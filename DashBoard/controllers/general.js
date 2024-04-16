import User from "../models/User.js";



export const getUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    }
    catch(err){
        res.status(404).json({message:err.message})
    }
}


export const getCourses = async(req, res)=>{
    try{
        const courses = await Course.find();
        const courseWithStats = await Promise.all(
            courses.map(async (course) => {
                const stat = await CourseStat.find({
                    CourseId: course._id,
                });
                return{
                    ...course._doc,
                    stat,
                };
            })
        )
        res.status(200).json(courseWithStats);
    } catch(error)
    {
        res.status(404).json({message: error.message});
    }
};


// export const getCustomers = async(req,res)=>{
//     try{
//         const customers = await User.find({role: "user"}).select("-password");
//         res.status(200).json(customers);
//     }
//     catch(error){
//         res.status(404).json({message: error.message});
//     }
// };



export const getGeography = async(req, res)=>{
    try{
        const users = await User.find();
        const mappedLocations = users.reduce((acc, {country}) =>{
            const countryISO3 = getCountryIso3(country);
            if(!acc[countryISO3])
            {
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;
        }, {});
        const formattedLocations = Object.entries(mappedLocations).map(
            ([country, count]) =>{
                return { id: country, value:count }
            }
        );
        res.status(200).json(formattedLocations);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};