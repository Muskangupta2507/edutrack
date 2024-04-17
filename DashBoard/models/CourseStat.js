import mongoose from "mongoose";

const CourseStatSchema = new mongoose.Schema(
  {
    yearlySales:[
      {
        year : String,
        monthySales : [
          {
            month:String,
            OnlineSale:Number,
            OfflineSale:Number
          }
        ],
        totalYearlyOnlineSales:Number,
        totalYearlyOfflineSales:Number,
      }
    ],
    continentSale:[
      {
        name:String,
        totalSales:Number
      }
    ]
  },
  { timestamps: true }
);

const CourseStat = mongoose.model("CourseStat", CourseStatSchema);
export default CourseStat;