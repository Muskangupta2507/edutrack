import React, { useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";

const OverviewChart = ({ isDashboard = false, view }) => {
  // Static data
  const dataCourseStat = {
    yearlySales: [
      {
        year: "2024",
        monthySales: [
          { month: "January", OnlineSale: 130, OfflineSale: 65 },
          { month: "February", OnlineSale: 140, OfflineSale: 70 },
          { month: "March", OnlineSale: 150, OfflineSale: 75 },
          { month: "April", OnlineSale: 160, OfflineSale: 80 },
          { month: "May", OnlineSale: 170, OfflineSale: 85 },
          { month: "June", OnlineSale: 180, OfflineSale: 90 },
          { month: "July", OnlineSale: 190, OfflineSale: 95 },
          { month: "August", OnlineSale: 200, OfflineSale: 100 },
          { month: "September", OnlineSale: 210, OfflineSale: 105 },
          { month: "October", OnlineSale: 220, OfflineSale: 110 },
          { month: "November", OnlineSale: 230, OfflineSale: 115 },
          { month: "December", OnlineSale: 240, OfflineSale: 120 },
        ],
        totalYearlyOnlineSales: 2070,
        totalYearlyOfflineSales: 1035,
      },
      {
        year: "2023",
        monthySales: [
          { month: "January", OnlineSale: 120, OfflineSale: 60 },
          { month: "February", OnlineSale: 130, OfflineSale: 65 },
          { month: "March", OnlineSale: 140, OfflineSale: 70 },
          { month: "April", OnlineSale: 150, OfflineSale: 75 },
          { month: "May", OnlineSale: 160, OfflineSale: 80 },
          { month: "June", OnlineSale: 170, OfflineSale: 85 },
          { month: "July", OnlineSale: 180, OfflineSale: 90 },
          { month: "August", OnlineSale: 190, OfflineSale: 95 },
          { month: "September", OnlineSale: 200, OfflineSale: 100 },
          { month: "October", OnlineSale: 210, OfflineSale: 105 },
          { month: "November", OnlineSale: 220, OfflineSale: 110 },
          { month: "December", OnlineSale: 230, OfflineSale: 115 },
        ],
        totalYearlyOnlineSales: 2100,
        totalYearlyOfflineSales: 1050,
      },
      {
        year: "2022",
        monthySales: [
          { month: "January", OnlineSale: 0, OfflineSale: 50 },
          { month: "February", OnlineSale: 110, OfflineSale: 55 },
          { month: "March", OnlineSale: 120, OfflineSale: 60 },
          { month: "April", OnlineSale: 130, OfflineSale: 65 },
          { month: "May", OnlineSale: 140, OfflineSale: 70 },
          { month: "June", OnlineSale: 150, OfflineSale: 75 },
          { month: "July", OnlineSale: 160, OfflineSale: 80 },
          { month: "August", OnlineSale: 170, OfflineSale: 85 },
          { month: "September", OnlineSale: 180, OfflineSale: 90 },
          { month: "October", OnlineSale: 190, OfflineSale: 95 },
          { month: "November", OnlineSale: 200, OfflineSale: 100 },
          { month: "December", OnlineSale: 0, OfflineSale: 105 },
        ],
        totalYearlyOnlineSales: 1950,
        totalYearlyOfflineSales: 975,
      },
    ],
  };

  const formattedData = useMemo(() => {
    // Choose the appropriate year's sales data based on the view
    const selectedYearData = dataCourseStat.yearlySales.find(
      (year) => year.year === view
    );
    if (!selectedYearData) return [];

    return [
      {
        id: "Online Sales",
        data: selectedYearData.monthySales.map((monthData) => ({
          x: monthData.month,
          y: monthData.OnlineSale,
        })),
      },
      {
        id: "Offline Sales",
        data: selectedYearData.monthySales.map((monthData) => ({
          x: monthData.month,
          y: monthData.OfflineSale,
        })),
      },
    ];
  }, [view]);

  return (
    <ResponsiveLine
      data={formattedData}
      margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      enableArea={isDashboard}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        format: (v) => {
          if (isDashboard) return v.slice(0, 3);
          return v;
        },
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? "" : "Month",
        legendOffset: 36,
        legendPosition: "middle",
        tickTextColor: "#ffffff", // Change label color to white
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard
          ? ""
          : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
        legendOffset: -60,
        legendPosition: "middle",
        tickTextColor: "#ffffff", // Change label color to white
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default OverviewChart;
