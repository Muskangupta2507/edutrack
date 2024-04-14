import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name:{
            type :String,
            required : true,
            min: 2,
            max: 100
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        enrollmentDate: {
            type: Date,
            default: Date.now // Optional: set a default value to the current date
        },
        city:String,
        state:String,
        country:String,
        course:String,
        contactNo:{
            type:Number,
            unique:true
        },
        courseProgress:{
            type: Number,
            min:0,
            max:100
        }
    }
);

const User = mongoose.model("User",UserSchema);
export default User;