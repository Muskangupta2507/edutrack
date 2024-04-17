import mongoose from "mongoose";

const CourseStatSchema = new mongoose.Schema(
//   {
//     Productid:String,
//     yearlySales:[
//       {
//         year : String,
//         monthySales : [
//           {
//             month:String,
//             OnlineSale:Number,
//             OfflineSale:Number
//           }
//         ],
//         totalYearlyOnlineSales:Number,
//         totalYearlyOfflineSales:Number,
//       }
//     ],
//     continentSale:[
//       {
//         name:String,
//         totalSales:Number
//       }
//     ]
//   },
//   { timestamps: true }
// );

// const Course = mongoose.model("Courses", CourseStatSchema);
// export default Course;

  {
    Productid:String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ]
  },
  { timestamps: true }
);

const Course = mongoose.model("Courses", CourseStatSchema);
export default Course;