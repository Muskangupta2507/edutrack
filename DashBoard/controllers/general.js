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
export const getDashboardStats = async (req, res) => {
    try {
      // hardcoded values
      const currentMonth = "April";
      const currentYear = 2024;
      const currentDay = "2024-04-17";

      /* Overall Stats */
     
      const {
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
      } = overallStat[0];
  
      const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
        return month === currentMonth;
      });
      
      res.status(200).json({
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
        thisMonthStats,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };