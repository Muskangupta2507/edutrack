export const dataUser = [
  {
    name: 'Alice Thompson',
    email: 'alice@example.com',
    enrollmentDate: new Date('2024-01-05'), // Dummy enrollment date
    city: 'Paris',
    state: 'Île-de-France',
    country: 'France',
    continent: 'Europe', // Updated continent information
    course: 'Mobile App Development',
    contactNo: 8123456789,
    courseProgress: 60,
    courseType:"online"
  },
  {
    name: 'Bob Williams',
    email: 'bob@example.com',
    enrollmentDate: new Date('2023-12-15'), // Dummy enrollment date
    city: 'Tokyo',
    state: 'Tokyo',
    country: 'Japan',
    continent: 'Asia', // Updated continent information
    course: 'Artificial Intelligence',
    contactNo: 8234567890,
    courseProgress: 40,
    courseType:"online"
  },
  {
    name: 'Emily Davis',
    email: 'emily@example.com',
    enrollmentDate: new Date('2023-11-20'), // Dummy enrollment date
    city: 'Sydney',
    state: 'New South Wales',
    country: 'Australia',
    continent: 'Australia', // Updated continent information
    course: 'Cybersecurity',
    contactNo: 8345678901,
    courseProgress: 80,
    courseType:"online"
  },
  {
    name: 'James Brown',
    email: 'james@example.com',
    enrollmentDate: new Date('2023-10-10'), // Dummy enrollment date
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    country: 'Brazil',
    continent: 'South America', // Updated continent information
    course: 'Cloud Computing',
    contactNo: 8456789012,
    courseProgress: 90,
    courseType:"online"
  },
  {
    name: 'Sarah Garcia',
    email: 'sarah@example.com',
    enrollmentDate: new Date('2023-09-05'), // Dummy enrollment date
    city: 'Toronto',
    state: 'Ontario',
    country: 'Canada',
    continent: 'North America', // Updated continent information
    course: 'Big Data',
    contactNo: 8567890123,
    courseProgress: 55,
    courseType:"offline"
  },
  {
    name: 'Daniel Martinez',
    email: 'daniel@example.com',
    enrollmentDate: new Date('2023-08-20'), // Dummy enrollment date
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    continent: 'Asia', // Updated continent information
    course: 'Blockchain',
    contactNo: 8678901234,
    courseProgress: 75,
    courseType:"offline"
  },
  {
    name: 'Olivia Rodriguez',
    email: 'olivia@example.com',
    enrollmentDate: new Date('2023-07-15'), // Dummy enrollment date
    city: 'Cape Town',
    state: 'Western Cape',
    country: 'South Africa',
    continent: 'Africa', // Updated continent information
    course: 'Internet of Things',
    contactNo: 8789012345,
    courseProgress: 65,
    courseType:"offline"
  },
  {
    name: 'William Lee',
    email: 'william@example.com',
    enrollmentDate: new Date('2023-06-10'), // Dummy enrollment date
    city: 'Mexico City',
    state: 'Mexico City',
    country: 'Mexico',
    continent: 'North America', // Updated continent information
    course: 'Virtual Reality',
    contactNo: 8890123456,
    courseProgress: 85,
    courseType:"offline"
  },
];

export const dataCourse= [
  {
    _id: "63701d24f03239c72c00018e",
    name: "Mobile App Development",
    price: 311.71,
    description: "Learn to develop mobile applications for various platforms.",
    category: "Technology",
    rating: 1.15,
    supply: 1320,
  },
  {
    _id: "63701d24f03239c72c00018f",
    name: "Artificial Intelligence",
    price: 649.77,
    description: "Explore the field of artificial intelligence and machine learning.",
    category: "Technology",
    rating: 4.84,
    supply: 633,
  },
  {
    _id: "63701d24f03239c72c000190",
    name: "Cybersecurity",
    price: 576.06,
    description: "Study the techniques and tools used to secure digital systems and data.",
    category: "Security",
    rating: 1.48,
    supply: 977,
  },
  {
    _id: "63701d24f03239c72c000191",
    name: "Cloud Computing",
    price: 77.54,
    description: "Learn about cloud infrastructure and services for scalable applications.",
    category: "Technology",
    rating: 1.72,
    supply: 190,
  },
  {
    _id: "63701d24f03239867500012a",
    name: "Big Data",
    price: 293.64,
    description: "Study techniques for handling and analyzing large datasets.",
    category: "Data Science",
    rating: 4.1,
    supply: 235,
  },
  {
    _id: "63701d24f03239867500012b",
    name: "Blockchain",
    price: 361.14,
    description: "Explore the principles and applications of blockchain technology.",
    category: "Technology",
    rating: 1.92,
    supply: 1274,
  },
  {
    _id: "63701d24f03239867500012c",
    name: "Internet of Things",
    price: 219.56,
    description: "Learn about interconnected devices and IoT ecosystem development.",
    category: "Technology",
    rating: 3.52,
    supply: 212,
  },
  {
    _id: "63701d24f03239867500012d",
    name: "Virtual Reality",
    price: 16.91,
    description: "Explore immersive experiences and applications of virtual reality technology.",
    category: "Technology",
    rating: 4.1,
    supply: 655,
  },
];

// export const dataCourseStat = [
//   {
//     Productid: "63701d24f03239c72c00018e",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 200, OfflineSale: 150},
//           {month: "February", OnlineSale: 250, OfflineSale: 180},
//           {month: "March", OnlineSale: 300, OfflineSale: 200},
//           {month: "April", OnlineSale: 350, OfflineSale: 220},
//           {month: "May", OnlineSale: 400, OfflineSale: 250},
//           {month: "June", OnlineSale: 450, OfflineSale: 270},
//           {month: "July", OnlineSale: 500, OfflineSale: 300},
//           {month: "August", OnlineSale: 550, OfflineSale: 320},
//           {month: "September", OnlineSale: 600, OfflineSale: 350},
//           {month: "October", OnlineSale: 650, OfflineSale: 380},
//           {month: "November", OnlineSale: 700, OfflineSale: 400},
//           {month: "December", OnlineSale: 750, OfflineSale: 420}
//         ],
//         totalYearlyOnlineSales: 6000,
//         totalYearlyOfflineSales: 3500
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 220, OfflineSale: 160},
//           {month: "February", OnlineSale: 270, OfflineSale: 190},
//           {month: "March", OnlineSale: 320, OfflineSale: 210},
//           {month: "April", OnlineSale: 370, OfflineSale: 230},
//           {month: "May", OnlineSale: 420, OfflineSale: 260},
//           {month: "June", OnlineSale: 470, OfflineSale: 280},
//           {month: "July", OnlineSale: 520, OfflineSale: 310},
//           {month: "August", OnlineSale: 570, OfflineSale: 330},
//           {month: "September", OnlineSale: 620, OfflineSale: 360},
//           {month: "October", OnlineSale: 670, OfflineSale: 390},
//           {month: "November", OnlineSale: 720, OfflineSale: 410},
//           {month: "December", OnlineSale: 770, OfflineSale: 430}
//         ],
//         totalYearlyOnlineSales: 6300,
//         totalYearlyOfflineSales: 3600
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 240, OfflineSale: 170},
//           {month: "February", OnlineSale: 290, OfflineSale: 200},
//           {month: "March", OnlineSale: 340, OfflineSale: 220},
//           {month: "April", OnlineSale: 390, OfflineSale: 240},
//           {month: "May", OnlineSale: 440, OfflineSale: 270},
//           {month: "June", OnlineSale: 490, OfflineSale: 290},
//           {month: "July", OnlineSale: 540, OfflineSale: 320},
//           {month: "August", OnlineSale: 590, OfflineSale: 340},
//           {month: "September", OnlineSale: 640, OfflineSale: 370},
//           {month: "October", OnlineSale: 690, OfflineSale: 400},
//           {month: "November", OnlineSale: 740, OfflineSale: 420},
//           {month: "December", OnlineSale: 790, OfflineSale: 440}
//         ],
//         totalYearlyOnlineSales: 6600,
//         totalYearlyOfflineSales: 3800
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 45000},
//       {name: "Europe", totalSales: 55000},
//       {name: "Africa", totalSales: 35000},
//       {name: "North America", totalSales: 60000},
//       {name: "South America", totalSales: 40000},
//       {name: "Australia", totalSales: 30000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239c72c00018f",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 180, OfflineSale: 120},
//           {month: "February", OnlineSale: 200, OfflineSale: 150},
//           {month: "March", OnlineSale: 220, OfflineSale: 160},
//           {month: "April", OnlineSale: 240, OfflineSale: 170},
//           {month: "May", OnlineSale: 260, OfflineSale: 180},
//           {month: "June", OnlineSale: 280, OfflineSale: 190},
//           {month: "July", OnlineSale: 300, OfflineSale: 200},
//           {month: "August", OnlineSale: 320, OfflineSale: 210},
//           {month: "September", OnlineSale: 340, OfflineSale: 220},
//           {month: "October", OnlineSale: 360, OfflineSale: 230},
//           {month: "November", OnlineSale: 380, OfflineSale: 240},
//           {month: "December", OnlineSale: 400, OfflineSale: 250}
//         ],
//         totalYearlyOnlineSales: 3500,
//         totalYearlyOfflineSales: 2500
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 190, OfflineSale: 130},
//           {month: "February", OnlineSale: 210, OfflineSale: 140},
//           {month: "March", OnlineSale: 230, OfflineSale: 150},
//           {month: "April", OnlineSale: 250, OfflineSale: 160},
//           {month: "May", OnlineSale: 270, OfflineSale: 170},
//           {month: "June", OnlineSale: 290, OfflineSale: 180},
//           {month: "July", OnlineSale: 310, OfflineSale: 190},
//           {month: "August", OnlineSale: 330, OfflineSale: 200},
//           {month: "September", OnlineSale: 350, OfflineSale: 210},
//           {month: "October", OnlineSale: 370, OfflineSale: 220},
//           {month: "November", OnlineSale: 390, OfflineSale: 230},
//           {month: "December", OnlineSale: 410, OfflineSale: 240}
//         ],
//         totalYearlyOnlineSales: 3600,
//         totalYearlyOfflineSales: 2600
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 200, OfflineSale: 140},
//           {month: "February", OnlineSale: 220, OfflineSale: 150},
//           {month: "March", OnlineSale: 240, OfflineSale: 160},
//           {month: "April", OnlineSale: 260, OfflineSale: 170},
//           {month: "May", OnlineSale: 280, OfflineSale: 180},
//           {month: "June", OnlineSale: 300, OfflineSale: 190},
//           {month: "July", OnlineSale: 320, OfflineSale: 200},
//           {month: "August", OnlineSale: 340, OfflineSale: 210},
//           {month: "September", OnlineSale: 360, OfflineSale: 220},
//           {month: "October", OnlineSale: 380, OfflineSale: 230},
//           {month: "November", OnlineSale: 400, OfflineSale: 240},
//           {month: "December", OnlineSale: 420, OfflineSale: 250}
//         ],
//         totalYearlyOnlineSales: 3700,
//         totalYearlyOfflineSales: 2700
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 40000},
//       {name: "Europe", totalSales: 50000},
//       {name: "Africa", totalSales: 30000},
//       {name: "North America", totalSales: 55000},
//       {name: "South America", totalSales: 35000},
//       {name: "Australia", totalSales: 25000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239c72c000190",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 150, OfflineSale: 100},
//           {month: "February", OnlineSale: 170, OfflineSale: 110},
//           {month: "March", OnlineSale: 190, OfflineSale: 120},
//           {month: "April", OnlineSale: 210, OfflineSale: 130},
//           {month: "May", OnlineSale: 230, OfflineSale: 140},
//           {month: "June", OnlineSale: 250, OfflineSale: 150},
//           {month: "July", OnlineSale: 270, OfflineSale: 160},
//           {month: "August", OnlineSale: 290, OfflineSale: 170},
//           {month: "September", OnlineSale: 310, OfflineSale: 180},
//           {month: "October", OnlineSale: 330, OfflineSale: 190},
//           {month: "November", OnlineSale: 350, OfflineSale: 200},
//           {month: "December", OnlineSale: 370, OfflineSale: 210}
//         ],
//         totalYearlyOnlineSales: 2700,
//         totalYearlyOfflineSales: 1800
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 160, OfflineSale: 110},
//           {month: "February", OnlineSale: 180, OfflineSale: 120},
//           {month: "March", OnlineSale: 200, OfflineSale: 130},
//           {month: "April", OnlineSale: 220, OfflineSale: 140},
//           {month: "May", OnlineSale: 240, OfflineSale: 150},
//           {month: "June", OnlineSale: 260, OfflineSale: 160},
//           {month: "July", OnlineSale: 280, OfflineSale: 170},
//           {month: "August", OnlineSale: 300, OfflineSale: 180},
//           {month: "September", OnlineSale: 320, OfflineSale: 190},
//           {month: "October", OnlineSale: 340, OfflineSale: 200},
//           {month: "November", OnlineSale: 360, OfflineSale: 210},
//           {month: "December", OnlineSale: 380, OfflineSale: 220}
//         ],
//         totalYearlyOnlineSales: 2800,
//         totalYearlyOfflineSales: 1900
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 170, OfflineSale: 120},
//           {month: "February", OnlineSale: 190, OfflineSale: 130},
//           {month: "March", OnlineSale: 210, OfflineSale: 140},
//           {month: "April", OnlineSale: 230, OfflineSale: 150},
//           {month: "May", OnlineSale: 250, OfflineSale: 160},
//           {month: "June", OnlineSale: 270, OfflineSale: 170},
//           {month: "July", OnlineSale: 290, OfflineSale: 180},
//           {month: "August", OnlineSale: 310, OfflineSale: 190},
//           {month: "September", OnlineSale: 330, OfflineSale: 200},
//           {month: "October", OnlineSale: 350, OfflineSale: 210},
//           {month: "November", OnlineSale: 370, OfflineSale: 220},
//           {month: "December", OnlineSale: 390, OfflineSale: 230}
//         ],
//         totalYearlyOnlineSales: 2900,
//         totalYearlyOfflineSales: 2000
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 35000},
//       {name: "Europe", totalSales: 45000},
//       {name: "Africa", totalSales: 25000},
//       {name: "North America", totalSales: 50000},
//       {name: "South America", totalSales: 30000},
//       {name: "Australia", totalSales: 20000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239c72c000191",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 120, OfflineSale: 80},
//           {month: "February", OnlineSale: 140, OfflineSale: 90},
//           {month: "March", OnlineSale: 160, OfflineSale: 100},
//           {month: "April", OnlineSale: 180, OfflineSale: 110},
//           {month: "May", OnlineSale: 200, OfflineSale: 120},
//           {month: "June", OnlineSale: 220, OfflineSale: 130},
//           {month: "July", OnlineSale: 240, OfflineSale: 140},
//           {month: "August", OnlineSale: 260, OfflineSale: 150},
//           {month: "September", OnlineSale: 280, OfflineSale: 160},
//           {month: "October", OnlineSale: 300, OfflineSale: 170},
//           {month: "November", OnlineSale: 320, OfflineSale: 180},
//           {month: "December", OnlineSale: 340, OfflineSale: 190}
//         ],
//         totalYearlyOnlineSales: 2200,
//         totalYearlyOfflineSales: 1400
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 130, OfflineSale: 90},
//           {month: "February", OnlineSale: 150, OfflineSale: 100},
//           {month: "March", OnlineSale: 170, OfflineSale: 110},
//           {month: "April", OnlineSale: 190, OfflineSale: 120},
//           {month: "May", OnlineSale: 210, OfflineSale: 130},
//           {month: "June", OnlineSale: 230, OfflineSale: 140},
//           {month: "July", OnlineSale: 250, OfflineSale: 150},
//           {month: "August", OnlineSale: 270, OfflineSale: 160},
//           {month: "September", OnlineSale: 290, OfflineSale: 170},
//           {month: "October", OnlineSale: 310, OfflineSale: 180},
//           {month: "November", OnlineSale: 330, OfflineSale: 190},
//           {month: "December", OnlineSale: 350, OfflineSale: 200}
//         ],
//         totalYearlyOnlineSales: 2300,
//         totalYearlyOfflineSales: 1500
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 140, OfflineSale: 100},
//           {month: "February", OnlineSale: 160, OfflineSale: 110},
//           {month: "March", OnlineSale: 180, OfflineSale: 120},
//           {month: "April", OnlineSale: 200, OfflineSale: 130},
//           {month: "May", OnlineSale: 220, OfflineSale: 140},
//           {month: "June", OnlineSale: 240, OfflineSale: 150},
//           {month: "July", OnlineSale: 260, OfflineSale: 160},
//           {month: "August", OnlineSale: 280, OfflineSale: 170},
//           {month: "September", OnlineSale: 300, OfflineSale: 180},
//           {month: "October", OnlineSale: 320, OfflineSale: 190},
//           {month: "November", OnlineSale: 340, OfflineSale: 200},
//           {month: "December", OnlineSale: 360, OfflineSale: 210}
//         ],
//         totalYearlyOnlineSales: 2400,
//         totalYearlyOfflineSales: 1600
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 30000},
//       {name: "Europe", totalSales: 40000},
//       {name: "Africa", totalSales: 20000},
//       {name: "North America", totalSales: 45000},
//       {name: "South America", totalSales: 25000},
//       {name: "Australia", totalSales: 15000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239867500012a",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 100, OfflineSale: 70},
//           {month: "February", OnlineSale: 120, OfflineSale: 80},
//           {month: "March", OnlineSale: 140, OfflineSale: 90},
//           {month: "April", OnlineSale: 160, OfflineSale: 100},
//           {month: "May", OnlineSale: 180, OfflineSale: 110},
//           {month: "June", OnlineSale: 200, OfflineSale: 120},
//           {month: "July", OnlineSale: 220, OfflineSale: 130},
//           {month: "August", OnlineSale: 240, OfflineSale: 140},
//           {month: "September", OnlineSale: 260, OfflineSale: 150},
//           {month: "October", OnlineSale: 280, OfflineSale: 160},
//           {month: "November", OnlineSale: 300, OfflineSale: 170},
//           {month: "December", OnlineSale: 320, OfflineSale: 180}
//         ],
//         totalYearlyOnlineSales: 2000,
//         totalYearlyOfflineSales: 1300
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 110, OfflineSale: 75},
//           {month: "February", OnlineSale: 130, OfflineSale: 85},
//           {month: "March", OnlineSale: 150, OfflineSale: 95},
//           {month: "April", OnlineSale: 170, OfflineSale: 105},
//           {month: "May", OnlineSale: 190, OfflineSale: 115},
//           {month: "June", OnlineSale: 210, OfflineSale: 125},
//           {month: "July", OnlineSale: 230, OfflineSale: 135},
//           {month: "August", OnlineSale: 250, OfflineSale: 145},
//           {month: "September", OnlineSale: 270, OfflineSale: 155},
//           {month: "October", OnlineSale: 290, OfflineSale: 165},
//           {month: "November", OnlineSale: 310, OfflineSale: 175},
//           {month: "December", OnlineSale: 330, OfflineSale: 185}
//         ],
//         totalYearlyOnlineSales: 2100,
//         totalYearlyOfflineSales: 1400
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 120, OfflineSale: 80},
//           {month: "February", OnlineSale: 140, OfflineSale: 90},
//           {month: "March", OnlineSale: 160, OfflineSale: 100},
//           {month: "April", OnlineSale: 180, OfflineSale: 110},
//           {month: "May", OnlineSale: 200, OfflineSale: 120},
//           {month: "June", OnlineSale: 220, OfflineSale: 130},
//           {month: "July", OnlineSale: 240, OfflineSale: 140},
//           {month: "August", OnlineSale: 260, OfflineSale: 150},
//           {month: "September", OnlineSale: 280, OfflineSale: 160},
//           {month: "October", OnlineSale: 300, OfflineSale: 170},
//           {month: "November", OnlineSale: 320, OfflineSale: 180},
//           {month: "December", OnlineSale: 340, OfflineSale: 190}
//         ],
//         totalYearlyOnlineSales: 2200,
//         totalYearlyOfflineSales: 1500
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 25000},
//       {name: "Europe", totalSales: 35000},
//       {name: "Africa", totalSales: 15000},
//       {name: "North America", totalSales: 40000},
//       {name: "South America", totalSales: 20000},
//       {name: "Australia", totalSales: 10000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239867500012b",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 90, OfflineSale: 60},
//           {month: "February", OnlineSale: 110, OfflineSale: 70},
//           {month: "March", OnlineSale: 130, OfflineSale: 80},
//           {month: "April", OnlineSale: 150, OfflineSale: 90},
//           {month: "May", OnlineSale: 170, OfflineSale: 100},
//           {month: "June", OnlineSale: 190, OfflineSale: 110},
//           {month: "July", OnlineSale: 210, OfflineSale: 120},
//           {month: "August", OnlineSale: 230, OfflineSale: 130},
//           {month: "September", OnlineSale: 250, OfflineSale: 140},
//           {month: "October", OnlineSale: 270, OfflineSale: 150},
//           {month: "November", OnlineSale: 290, OfflineSale: 160},
//           {month: "December", OnlineSale: 310, OfflineSale: 170}
//         ],
//         totalYearlyOnlineSales: 1800,
//         totalYearlyOfflineSales: 1100
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 100, OfflineSale: 65},
//           {month: "February", OnlineSale: 120, OfflineSale: 75},
//           {month: "March", OnlineSale: 140, OfflineSale: 85},
//           {month: "April", OnlineSale: 160, OfflineSale: 95},
//           {month: "May", OnlineSale: 180, OfflineSale: 105},
//           {month: "June", OnlineSale: 200, OfflineSale: 115},
//           {month: "July", OnlineSale: 220, OfflineSale: 125},
//           {month: "August", OnlineSale: 240, OfflineSale: 135},
//           {month: "September", OnlineSale: 260, OfflineSale: 145},
//           {month: "October", OnlineSale: 280, OfflineSale: 155},
//           {month: "November", OnlineSale: 300, OfflineSale: 165},
//           {month: "December", OnlineSale: 320, OfflineSale: 175}
//         ],
//         totalYearlyOnlineSales: 1900,
//         totalYearlyOfflineSales: 1200
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 110, OfflineSale: 70},
//           {month: "February", OnlineSale: 130, OfflineSale: 80},
//           {month: "March", OnlineSale: 150, OfflineSale: 90},
//           {month: "April", OnlineSale: 170, OfflineSale: 100},
//           {month: "May", OnlineSale: 190, OfflineSale: 110},
//           {month: "June", OnlineSale: 210, OfflineSale: 120},
//           {month: "July", OnlineSale: 230, OfflineSale: 130},
//           {month: "August", OnlineSale: 250, OfflineSale: 140},
//           {month: "September", OnlineSale: 270, OfflineSale: 150},
//           {month: "October", OnlineSale: 290, OfflineSale: 160},
//           {month: "November", OnlineSale: 310, OfflineSale: 170},
//           {month: "December", OnlineSale: 330, OfflineSale: 180}
//         ],
//         totalYearlyOnlineSales: 2000,
//         totalYearlyOfflineSales: 1300
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 20000},
//       {name: "Europe", totalSales: 30000},
//       {name: "Africa", totalSales: 10000},
//       {name: "North America", totalSales: 35000},
//       {name: "South America", totalSales: 15000},
//       {name: "Australia", totalSales: 8000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239867500012c",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 80, OfflineSale: 50},
//           {month: "February", OnlineSale: 100, OfflineSale: 60},
//           {month: "March", OnlineSale: 120, OfflineSale: 70},
//           {month: "April", OnlineSale: 140, OfflineSale: 80},
//           {month: "May", OnlineSale: 160, OfflineSale: 90},
//           {month: "June", OnlineSale: 180, OfflineSale: 100},
//           {month: "July", OnlineSale: 200, OfflineSale: 110},
//           {month: "August", OnlineSale: 220, OfflineSale: 120},
//           {month: "September", OnlineSale: 240, OfflineSale: 130},
//           {month: "October", OnlineSale: 260, OfflineSale: 140},
//           {month: "November", OnlineSale: 280, OfflineSale: 150},
//           {month: "December", OnlineSale: 300, OfflineSale: 160}
//         ],
//         totalYearlyOnlineSales: 1900,
//         totalYearlyOfflineSales: 1100
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 90, OfflineSale: 55},
//           {month: "February", OnlineSale: 110, OfflineSale: 65},
//           {month: "March", OnlineSale: 130, OfflineSale: 75},
//           {month: "April", OnlineSale: 150, OfflineSale: 85},
//           {month: "May", OnlineSale: 170, OfflineSale: 95},
//           {month: "June", OnlineSale: 190, OfflineSale: 105},
//           {month: "July", OnlineSale: 210, OfflineSale: 115},
//           {month: "August", OnlineSale: 230, OfflineSale: 125},
//           {month: "September", OnlineSale: 250, OfflineSale: 135},
//           {month: "October", OnlineSale: 270, OfflineSale: 145},
//           {month: "November", OnlineSale: 290, OfflineSale: 155},
//           {month: "December", OnlineSale: 310, OfflineSale: 165}
//         ],
//         totalYearlyOnlineSales: 2000,
//         totalYearlyOfflineSales: 1200
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 100, OfflineSale: 60},
//           {month: "February", OnlineSale: 120, OfflineSale: 70},
//           {month: "March", OnlineSale: 140, OfflineSale: 80},
//           {month: "April", OnlineSale: 160, OfflineSale: 90},
//           {month: "May", OnlineSale: 180, OfflineSale: 100},
//           {month: "June", OnlineSale: 200, OfflineSale: 110},
//           {month: "July", OnlineSale: 220, OfflineSale: 120},
//           {month: "August", OnlineSale: 240, OfflineSale: 130},
//           {month: "September", OnlineSale: 260, OfflineSale: 140},
//           {month: "October", OnlineSale: 280, OfflineSale: 150},
//           {month: "November", OnlineSale: 300, OfflineSale: 160},
//           {month: "December", OnlineSale: 320, OfflineSale: 170}
//         ],
//         totalYearlyOnlineSales: 2100,
//         totalYearlyOfflineSales: 1300
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 15000},
//       {name: "Europe", totalSales: 25000},
//       {name: "Africa", totalSales: 9000},
//       {name: "North America", totalSales: 30000},
//       {name: "South America", totalSales: 13000},
//       {name: "Australia", totalSales: 7000}
//     ]
//   },
//   {
//     Productid: "63701d24f03239867500012d",
//     yearlySales: [
//       {
//         year: "2022",
//         monthySales: [
//           {month: "January", OnlineSale: 70, OfflineSale: 40},
//           {month: "February", OnlineSale: 90, OfflineSale: 50},
//           {month: "March", OnlineSale: 110, OfflineSale: 60},
//           {month: "April", OnlineSale: 130, OfflineSale: 70},
//           {month: "May", OnlineSale: 150, OfflineSale: 80},
//           {month: "June", OnlineSale: 170, OfflineSale: 90},
//           {month: "July", OnlineSale: 190, OfflineSale: 100},
//           {month: "August", OnlineSale: 210, OfflineSale: 110},
//           {month: "September", OnlineSale: 230, OfflineSale: 120},
//           {month: "October", OnlineSale: 250, OfflineSale: 130},
//           {month: "November", OnlineSale: 270, OfflineSale: 140},
//           {month: "December", OnlineSale: 290, OfflineSale: 150}
//         ],
//         totalYearlyOnlineSales: 1700,
//         totalYearlyOfflineSales: 1000
//       },
//       {
//         year: "2023",
//         monthySales: [
//           {month: "January", OnlineSale: 80, OfflineSale: 45},
//           {month: "February", OnlineSale: 100, OfflineSale: 55},
//           {month: "March", OnlineSale: 120, OfflineSale: 65},
//           {month: "April", OnlineSale: 140, OfflineSale: 75},
//           {month: "May", OnlineSale: 160, OfflineSale: 85},
//           {month: "June", OnlineSale: 180, OfflineSale: 95},
//           {month: "July", OnlineSale: 200, OfflineSale: 105},
//           {month: "August", OnlineSale: 220, OfflineSale: 115},
//           {month: "September", OnlineSale: 240, OfflineSale: 125},
//           {month: "October", OnlineSale: 260, OfflineSale: 135},
//           {month: "November", OnlineSale: 280, OfflineSale: 145},
//           {month: "December", OnlineSale: 300, OfflineSale: 155}
//         ],
//         totalYearlyOnlineSales: 1800,
//         totalYearlyOfflineSales: 1100
//       },
//       {
//         year: "2024",
//         monthySales: [
//           {month: "January", OnlineSale: 90, OfflineSale: 50},
//           {month: "February", OnlineSale: 110, OfflineSale: 60},
//           {month: "March", OnlineSale: 130, OfflineSale: 70},
//           {month: "April", OnlineSale: 150, OfflineSale: 80},
//           {month: "May", OnlineSale: 170, OfflineSale: 90},
//           {month: "June", OnlineSale: 190, OfflineSale: 100},
//           {month: "July", OnlineSale: 210, OfflineSale: 110},
//           {month: "August", OnlineSale: 230, OfflineSale: 120},
//           {month: "September", OnlineSale: 250, OfflineSale: 130},
//           {month: "October", OnlineSale: 270, OfflineSale: 140},
//           {month: "November", OnlineSale: 290, OfflineSale: 150},
//           {month: "December", OnlineSale: 310, OfflineSale: 160}
//         ],
//         totalYearlyOnlineSales: 1900,
//         totalYearlyOfflineSales: 1200
//       }
//     ],
//     continentSale: [
//       {name: "Asia", totalSales: 14000},
//       {name: "Europe", totalSales: 24000},
//       {name: "Africa", totalSales: 8000},
//       {name: "North America", totalSales: 27000},
//       {name: "South America", totalSales: 12000},
//       {name: "Australia", totalSales: 6000}
//     ]
//   }
// ];


export const dataCourseStat = [
  {
    _id: "6371259df03239e680000035",
    productId: "63701d24f03239c72c00018e",
    yearlySalesTotal: 7152,
    yearlyTotalSoldUnits: 1414,
    monthlyData: [
      { month: "january", totalSales: 574, totalUnits: 93 },
      { month: "february", totalSales: 290, totalUnits: 337 },
      { month: "march", totalSales: 947, totalUnits: 182 },
      { month: "april", totalSales: 774, totalUnits: 490 },
      { month: "may", totalSales: 707, totalUnits: 320 },
      { month: "june", totalSales: 468, totalUnits: 3 },
      { month: "july", totalSales: 346, totalUnits: 15 },
      { month: "august", totalSales: 838, totalUnits: 456 },
      { month: "september", totalSales: 193, totalUnits: 341 },
      { month: "october", totalSales: 76, totalUnits: 231 },
      { month: "november", totalSales: 305, totalUnits: 219 },
      { month: "december", totalSales: 90, totalUnits: 1 },
    ],
  },
  {
    _id: "6371259ef032398675000198",
    productId: "63701d24f03239c72c00018f",
    yearlySalesTotal: 2192,
    yearlyTotalSoldUnits: 1169,
    monthlyData: [
      { month: "january", totalSales: 738, totalUnits: 275 },
      { month: "february", totalSales: 938, totalUnits: 71 },
      { month: "march", totalSales: 24, totalUnits: 400 },
      { month: "april", totalSales: 423, totalUnits: 174 },
      { month: "may", totalSales: 875, totalUnits: 238 },
      { month: "june", totalSales: 376, totalUnits: 471 },
      { month: "july", totalSales: 364, totalUnits: 78 },
      { month: "august", totalSales: 510, totalUnits: 223 },
      { month: "september", totalSales: 395, totalUnits: 109 },
      { month: "october", totalSales: 279, totalUnits: 68 },
      { month: "november", totalSales: 604, totalUnits: 174 },
      { month: "december", totalSales: 701, totalUnits: 422 },
    ],
  },
  {
    _id: "6371259df03239b7f7000083",
    productId: "63701d24f03239c72c000190",
    yearlySalesTotal: 4356,
    yearlyTotalSoldUnits: 4305,
    monthlyData: [
      { month: "january", totalSales: 606, totalUnits: 471 },
      { month: "february", totalSales: 688, totalUnits: 15 },
      { month: "march", totalSales: 563, totalUnits: 293 },
      { month: "april", totalSales: 39, totalUnits: 300 },
      { month: "may", totalSales: 573, totalUnits: 219 },
      { month: "june", totalSales: 226, totalUnits: 206 },
      { month: "july", totalSales: 638, totalUnits: 223 },
      { month: "august", totalSales: 884, totalUnits: 401 },
      { month: "september", totalSales: 118, totalUnits: 151 },
      { month: "october", totalSales: 307, totalUnits: 265 },
      { month: "november", totalSales: 997, totalUnits: 351 },
      { month: "december", totalSales: 234, totalUnits: 462 },
    ],
  },
  {
    _id: "6371259df03239444100035a",
    productId: "63701d24f03239c72c000191",
    yearlySalesTotal: 9976,
    yearlyTotalSoldUnits: 3579,
    monthlyData: [
      { month: "january", totalSales: 298, totalUnits: 394 },
      { month: "february", totalSales: 261, totalUnits: 435 },
      { month: "march", totalSales: 756, totalUnits: 209 },
      { month: "april", totalSales: 985, totalUnits: 404 },
      { month: "may", totalSales: 247, totalUnits: 464 },
      { month: "june", totalSales: 853, totalUnits: 134 },
      { month: "july", totalSales: 264, totalUnits: 433 },
      { month: "august", totalSales: 290, totalUnits: 195 },
      { month: "september", totalSales: 186, totalUnits: 401 },
      { month: "october", totalSales: 194, totalUnits: 275 },
      { month: "november", totalSales: 534, totalUnits: 131 },
      { month: "december", totalSales: 680, totalUnits: 234 },
    ],
  },
  {
    _id: "6371259df03239eb0c000002",
    productId: "63701d24f03239867500012b",
    yearlySalesTotal: 4819,
    yearlyTotalSoldUnits: 4228,
    monthlyData: [
      { month: "january", totalSales: 682, totalUnits: 269 },
      { month: "february", totalSales: 565, totalUnits: 199 },
      { month: "march", totalSales: 136, totalUnits: 212 },
      { month: "april", totalSales: 149, totalUnits: 459 },
      { month: "may", totalSales: 709, totalUnits: 36 },
      { month: "june", totalSales: 939, totalUnits: 262 },
      { month: "july", totalSales: 916, totalUnits: 241 },
      { month: "august", totalSales: 547, totalUnits: 94 },
      { month: "september", totalSales: 764, totalUnits: 453 },
      { month: "october", totalSales: 348, totalUnits: 286 },
      { month: "november", totalSales: 849, totalUnits: 389 },
      { month: "december", totalSales: 480, totalUnits: 13 },
    ],
  },
  {
    _id: "6371259df032395b33000198",
    productId: "63701d24f03239867500012c",
    yearlySalesTotal: 4091,
    yearlyTotalSoldUnits: 4832,
    monthlyData: [
      { month: "january", totalSales: 866, totalUnits: 189 },
      { month: "february", totalSales: 35, totalUnits: 104 },
      { month: "march", totalSales: 937, totalUnits: 325 },
      { month: "april", totalSales: 574, totalUnits: 39 },
      { month: "may", totalSales: 239, totalUnits: 304 },
      { month: "june", totalSales: 932, totalUnits: 263 },
      { month: "july", totalSales: 238, totalUnits: 427 },
      { month: "august", totalSales: 658, totalUnits: 447 },
      { month: "september", totalSales: 419, totalUnits: 470 },
      { month: "october", totalSales: 299, totalUnits: 135 },
      { month: "november", totalSales: 415, totalUnits: 396 },
      { month: "december", totalSales: 291, totalUnits: 319 },
    ],
  },
  {
    _id: "6371259df03239d591000395",
    productId: "63701d24f03239867500012d",
    yearlySalesTotal: 6435,
    yearlyTotalSoldUnits: 4627,
    monthlyData: [
      { month: "january", totalSales: 558, totalUnits: 206 },
      { month: "february", totalSales: 394, totalUnits: 99 },
      { month: "march", totalSales: 440, totalUnits: 239 },
      { month: "april", totalSales: 676, totalUnits: 223 },
      { month: "may", totalSales: 112, totalUnits: 416 },
      { month: "june", totalSales: 451, totalUnits: 19 },
      { month: "july", totalSales: 1000, totalUnits: 346 },
      { month: "august", totalSales: 798, totalUnits: 441 },
      { month: "september", totalSales: 652, totalUnits: 340 },
      { month: "october", totalSales: 816, totalUnits: 164 },
      { month: "november", totalSales: 874, totalUnits: 163 },
      { month: "december", totalSales: 230, totalUnits: 146 },
    ],
  },
  {
    _id: "6371259df032395694000083",
    productId: "63701d24f03239b7f7000015",
    yearlySalesTotal: 3309,
    yearlyTotalSoldUnits: 2331,
    monthlyData: [
      { month: "january", totalSales: 118, totalUnits: 317 },
      { month: "february", totalSales: 47, totalUnits: 181 },
      { month: "march", totalSales: 810, totalUnits: 498 },
      { month: "april", totalSales: 230, totalUnits: 455 },
      { month: "may", totalSales: 353, totalUnits: 15 },
      { month: "june", totalSales: 799, totalUnits: 409 },
      { month: "july", totalSales: 56, totalUnits: 440 },
      { month: "august", totalSales: 158, totalUnits: 90 },
      { month: "september", totalSales: 459, totalUnits: 374 },
      { month: "october", totalSales: 162, totalUnits: 169 },
      { month: "november", totalSales: 102, totalUnits: 74 },
      { month: "december", totalSales: 338, totalUnits: 129 },
    ]
  },
  {
    _id: "6371259df032396b8e000083",
    productId: "63701d24f03239b7f7000016",
    yearlySalesTotal: 5264,
    yearlyTotalSoldUnits: 1782,
    monthlyData: [
      { month: "january", totalSales: 635, totalUnits: 368 },
      { month: "february", totalSales: 732, totalUnits: 2 },
      { month: "march", totalSales: 294, totalUnits: 363 },
      { month: "april", totalSales: 478, totalUnits: 82 },
      { month: "may", totalSales: 438, totalUnits: 116 },
      { month: "june", totalSales: 911, totalUnits: 20 },
      { month: "july", totalSales: 722, totalUnits: 119 },
      { month: "august", totalSales: 739, totalUnits: 55 },
      { month: "september", totalSales: 646, totalUnits: 7 },
      { month: "october", totalSales: 177, totalUnits: 222 },
      { month: "november", totalSales: 111, totalUnits: 31 },
      { month: "december", totalSales: 122, totalUnits: 284 },
    ]
  },
  {
    _id: "6371259df03239bef0000198",
    productId: "63701d24f03239b7f7000017",
    yearlySalesTotal: 3238,
    yearlyTotalSoldUnits: 2564,
    monthlyData: [
      { month: "january", totalSales: 929, totalUnits: 91 },
      { month: "february", totalSales: 734, totalUnits: 44 },
      { month: "march", totalSales: 709, totalUnits: 204 },
      { month: "april", totalSales: 368, totalUnits: 268 },
      { month: "may", totalSales: 280, totalUnits: 197 },
      { month: "june", totalSales: 261, totalUnits: 388 },
      { month: "july", totalSales: 369, totalUnits: 122 },
      { month: "august", totalSales: 793, totalUnits: 78 },
      { month: "september", totalSales: 164, totalUnits: 477 },
      { month: "october", totalSales: 805, totalUnits: 349 },
      { month: "november", totalSales: 667, totalUnits: 286 },
      { month: "december", totalSales: 676, totalUnits: 498 },
    ],
  },
  {
    _id: "6371259df03239f793000002",
    productId: "63701d24f03239b7f7000018",
    yearlySalesTotal: 7954,
    yearlyTotalSoldUnits: 4999,
    monthlyData: [
      { month: "january", totalSales: 692, totalUnits: 306 },
      { month: "february", totalSales: 310, totalUnits: 286 },
      { month: "march", totalSales: 635, totalUnits: 40 },
      { month: "april", totalSales: 589, totalUnits: 60 },
      { month: "may", totalSales: 714, totalUnits: 339 },
      { month: "june", totalSales: 855, totalUnits: 357 },
      { month: "july", totalSales: 209, totalUnits: 281 },
      { month: "august", totalSales: 65, totalUnits: 106 },
      { month: "september", totalSales: 184, totalUnits: 92 },
      { month: "october", totalSales: 311, totalUnits: 418 },
      { month: "november", totalSales: 295, totalUnits: 196 },
      { month: "december", totalSales: 542, totalUnits: 414 },
    ],
  },
  {
    _id: "6371259df03239528f000083",
    productId: "63701d24f0323944410002ec",
    yearlySalesTotal: 5826,
    yearlyTotalSoldUnits: 3386,
    monthlyData: [
      { month: "january", totalSales: 760, totalUnits: 333 },
      { month: "february", totalSales: 93, totalUnits: 335 },
      { month: "march", totalSales: 594, totalUnits: 72 },
      { month: "april", totalSales: 371, totalUnits: 494 },
      { month: "may", totalSales: 892, totalUnits: 106 },
      { month: "june", totalSales: 22, totalUnits: 38 },
      { month: "july", totalSales: 556, totalUnits: 277 },
      { month: "august", totalSales: 642, totalUnits: 438 },
      { month: "september", totalSales: 755, totalUnits: 66 },
      { month: "october", totalSales: 120, totalUnits: 41 },
      { month: "november", totalSales: 534, totalUnits: 247 },
      { month: "december", totalSales: 131, totalUnits: 311 },
    ],
  },
  {
    _id: "6371259ef03239f09e0001fc",
    productId: "63701d24f0323944410002ed",
    yearlySalesTotal: 2947,
    yearlyTotalSoldUnits: 1203,
    monthlyData: [
      { month: "january", totalSales: 686, totalUnits: 154 },
      { month: "february", totalSales: 927, totalUnits: 455 },
      { month: "march", totalSales: 946, totalUnits: 227 },
      { month: "april", totalSales: 77, totalUnits: 137 },
      { month: "may", totalSales: 272, totalUnits: 72 },
      { month: "june", totalSales: 476, totalUnits: 268 },
      { month: "july", totalSales: 432, totalUnits: 71 },
      { month: "august", totalSales: 875, totalUnits: 60 },
      { month: "september", totalSales: 88, totalUnits: 418 },
      { month: "october", totalSales: 190, totalUnits: 392 },
      { month: "november", totalSales: 89, totalUnits: 199 },
      { month: "december", totalSales: 820, totalUnits: 58 },
    ],
  },
  {
    _id: "6371259df03239db69000198",
    productId: "63701d24f0323944410002ee",
    yearlySalesTotal: 2128,
    yearlyTotalSoldUnits: 703,
    monthlyData: [
      { month: "january", totalSales: 472, totalUnits: 67 },
      { month: "february", totalSales: 862, totalUnits: 24 },
      { month: "march", totalSales: 732, totalUnits: 287 },
      { month: "april", totalSales: 996, totalUnits: 210 },
      { month: "may", totalSales: 796, totalUnits: 8 },
      { month: "june", totalSales: 348, totalUnits: 71 },
      { month: "july", totalSales: 729, totalUnits: 175 },
      { month: "august", totalSales: 811, totalUnits: 313 },
      { month: "september", totalSales: 88, totalUnits: 44 },
      { month: "october", totalSales: 199, totalUnits: 24 },
      { month: "november", totalSales: 364, totalUnits: 373 },
      { month: "december", totalSales: 301, totalUnits: 85 },
    ],
  },
  {
    _id: "6371259df03239b913000083",
    productId: "63701d24f0323944410002ef",
    yearlySalesTotal: 7841,
    yearlyTotalSoldUnits: 3889,
    monthlyData: [
      { month: "january", totalSales: 489, totalUnits: 324 },
      { month: "february", totalSales: 674, totalUnits: 111 },
      { month: "march", totalSales: 600, totalUnits: 235 },
      { month: "april", totalSales: 763, totalUnits: 220 },
      { month: "may", totalSales: 943, totalUnits: 376 },
      { month: "june", totalSales: 164, totalUnits: 243 },
      { month: "july", totalSales: 119, totalUnits: 43 },
      { month: "august", totalSales: 83, totalUnits: 306 },
      { month: "september", totalSales: 574, totalUnits: 276 },
      { month: "october", totalSales: 606, totalUnits: 232 },
      { month: "november", totalSales: 971, totalUnits: 435 },
      { month: "december", totalSales: 580, totalUnits: 106 },
    ],
  },
  {
    _id: "6371259df03239cdc5000083",
    productId: "63701d24f03239d81e000015",
    yearlySalesTotal: 5994,
    yearlyTotalSoldUnits: 2338,
    monthlyData: [
      { month: "january", totalSales: 507, totalUnits: 269 },
      { month: "february", totalSales: 295, totalUnits: 22 },
      { month: "march", totalSales: 660, totalUnits: 276 },
      { month: "april", totalSales: 56, totalUnits: 483 },
      { month: "may", totalSales: 320, totalUnits: 478 },
      { month: "june", totalSales: 80, totalUnits: 480 },
      { month: "july", totalSales: 920, totalUnits: 262 },
      { month: "august", totalSales: 848, totalUnits: 38 },
      { month: "september", totalSales: 366, totalUnits: 257 },
      { month: "october", totalSales: 922, totalUnits: 46 },
      { month: "november", totalSales: 870, totalUnits: 446 },
      { month: "december", totalSales: 185, totalUnits: 385 },
    ],
  },
  {
    _id: "6371259df032399c00000198",
    productId: "63701d24f03239d81e000016",
    yearlySalesTotal: 5650,
    yearlyTotalSoldUnits: 2225,
    monthlyData: [
      { month: "january", totalSales: 119, totalUnits: 100 },
      { month: "february", totalSales: 16, totalUnits: 233 },
      { month: "march", totalSales: 30, totalUnits: 492 },
      { month: "april", totalSales: 825, totalUnits: 367 },
      { month: "may", totalSales: 901, totalUnits: 16 },
      { month: "june", totalSales: 595, totalUnits: 34 },
      { month: "july", totalSales: 309, totalUnits: 168 },
      { month: "august", totalSales: 836, totalUnits: 35 },
      { month: "september", totalSales: 594, totalUnits: 258 },
      { month: "october", totalSales: 640, totalUnits: 292 },
      { month: "november", totalSales: 707, totalUnits: 492 },
      { month: "december", totalSales: 914, totalUnits: 60 },
    ],
    
  },
  {
    _id: "6371259df0323986f3000198",
    productId: "63701d24f03239d81e000017",
    yearlySalesTotal: 1016,
    yearlyTotalSoldUnits: 2672,
    monthlyData: [
      { month: "january", totalSales: 121, totalUnits: 281 },
      { month: "february", totalSales: 616, totalUnits: 295 },
      { month: "march", totalSales: 605, totalUnits: 79 },
      { month: "april", totalSales: 143, totalUnits: 333 },
      { month: "may", totalSales: 685, totalUnits: 269 },
      { month: "june", totalSales: 953, totalUnits: 94 },
      { month: "july", totalSales: 426, totalUnits: 100 },
      { month: "august", totalSales: 467, totalUnits: 96 },
      { month: "september", totalSales: 376, totalUnits: 45 },
      { month: "october", totalSales: 727, totalUnits: 46 },
      { month: "november", totalSales: 774, totalUnits: 240 },
      { month: "december", totalSales: 451, totalUnits: 377 },
    ],
  },
  {
    _id: "6371259df03239d40b0000d3",
    productId: "63701d24f03239d81e000018",
    yearlySalesTotal: 7368,
    yearlyTotalSoldUnits: 1734,
    monthlyData: [
      { month: "january", totalSales: 301, totalUnits: 330 },
      { month: "february", totalSales: 46, totalUnits: 405 },
      { month: "march", totalSales: 729, totalUnits: 258 },
      { month: "april", totalSales: 369, totalUnits: 227 },
      { month: "may", totalSales: 428, totalUnits: 433 },
      { month: "june", totalSales: 864, totalUnits: 180 },
      { month: "july", totalSales: 56, totalUnits: 283 },
      { month: "august", totalSales: 212, totalUnits: 257 },
      { month: "september", totalSales: 494, totalUnits: 143 },
      { month: "october", totalSales: 983, totalUnits: 125 },
      { month: "november", totalSales: 58, totalUnits: 473 },
      { month: "december", totalSales: 896, totalUnits: 479 },
    ],
    
  },
  {
    _id: "6371259df03239d40b0000d4",
    productId: "63701d24f032390a34000327",
    yearlySalesTotal: 7667,
    yearlyTotalSoldUnits: 2377,
    monthlyData: [
      { month: "january", totalSales: 674, totalUnits: 279 },
      { month: "february", totalSales: 625, totalUnits: 480 },
      { month: "march", totalSales: 897, totalUnits: 199 },
      { month: "april", totalSales: 236, totalUnits: 94 },
      { month: "may", totalSales: 365, totalUnits: 277 },
      { month: "june", totalSales: 86, totalUnits: 281 },
      { month: "july", totalSales: 919, totalUnits: 370 },
      { month: "august", totalSales: 876, totalUnits: 415 },
      { month: "september", totalSales: 892, totalUnits: 435 },
      { month: "october", totalSales: 904, totalUnits: 238 },
      { month: "november", totalSales: 969, totalUnits: 227 },
      { month: "december", totalSales: 248, totalUnits: 321 },
    ],
    
  },
  {
    _id: "6371259ef03239d40b0000d5",
    productId: "63701d24f032390a34000328",
    yearlySalesTotal: 6058,
    yearlyTotalSoldUnits: 4381,
    monthlyData: [
      { month: "january", totalSales: 312, totalUnits: 75 },
      { month: "february", totalSales: 601, totalUnits: 128 },
      { month: "march", totalSales: 498, totalUnits: 284 },
      { month: "april", totalSales: 336, totalUnits: 145 },
      { month: "may", totalSales: 584, totalUnits: 323 },
      { month: "june", totalSales: 345, totalUnits: 136 },
      { month: "july", totalSales: 334, totalUnits: 356 },
      { month: "august", totalSales: 496, totalUnits: 124 },
      { month: "september", totalSales: 720, totalUnits: 347 },
      { month: "october", totalSales: 699, totalUnits: 476 },
      { month: "november", totalSales: 436, totalUnits: 485 },
      { month: "december", totalSales: 610, totalUnits: 46 },
    ],
    
  },
  {
    _id: "6371259ef03239d40b0000d6",
    productId: "63701d24f032390a34000329",
    yearlySalesTotal: 6371,
    yearlyTotalSoldUnits: 68,
    monthlyData: [
      { month: "january", totalSales: 213, totalUnits: 431 },
      { month: "february", totalSales: 162, totalUnits: 361 },
      { month: "march", totalSales: 208, totalUnits: 289 },
      { month: "april", totalSales: 725, totalUnits: 180 },
      { month: "may", totalSales: 923, totalUnits: 345 },
      { month: "june", totalSales: 492, totalUnits: 322 },
      { month: "july", totalSales: 380, totalUnits: 190 },
      { month: "august", totalSales: 303, totalUnits: 15 },
      { month: "september", totalSales: 165, totalUnits: 39 },
      { month: "october", totalSales: 240, totalUnits: 354 },
      { month: "november", totalSales: 17, totalUnits: 411 },
      { month: "december", totalSales: 478, totalUnits: 146 },
    ]
    
  },
  {
    _id: "6371259ef03239d40b0000d7",
    productId: "63701d24f032390a3400032a",
    yearlySalesTotal: 6612,
    yearlyTotalSoldUnits: 2642,
    monthlyData: [
      { month: "january", totalSales: 173, totalUnits: 340 },
      { month: "february", totalSales: 996, totalUnits: 188 },
      { month: "march", totalSales: 442, totalUnits: 74 },
      { month: "april", totalSales: 387, totalUnits: 281 },
      { month: "may", totalSales: 256, totalUnits: 257 },
      { month: "june", totalSales: 799, totalUnits: 270 },
      { month: "july", totalSales: 594, totalUnits: 58 },
      { month: "august", totalSales: 207, totalUnits: 181 },
      { month: "september", totalSales: 147, totalUnits: 236 },
      { month: "october", totalSales: 681, totalUnits: 99 },
      { month: "november", totalSales: 272, totalUnits: 157 },
      { month: "december", totalSales: 880, totalUnits: 303 },
    ],
    
  },
  {
    _id: "6371259ef03239d40b0000d8",
    productId: "63701d24f032395b3300012a",
    yearlySalesTotal: 2803,
    yearlyTotalSoldUnits: 2247,
    monthlyData: [
      { month: "january", totalSales: 391, totalUnits: 252 },
      { month: "february", totalSales: 453, totalUnits: 117 },
      { month: "march", totalSales: 664, totalUnits: 208 },
      { month: "april", totalSales: 79, totalUnits: 196 },
      { month: "may", totalSales: 49, totalUnits: 433 },
      { month: "june", totalSales: 400, totalUnits: 37 },
      { month: "july", totalSales: 278, totalUnits: 387 },
      { month: "august", totalSales: 591, totalUnits: 226 },
      { month: "september", totalSales: 125, totalUnits: 480 },
      { month: "october", totalSales: 129, totalUnits: 84 },
      { month: "november", totalSales: 183, totalUnits: 452 },
      { month: "december", totalSales: 518, totalUnits: 72 },
    ]
    
  },
  {
    _id: "6371259ff03239d40b0000d9",
    productId: "63701d24f032395b3300012b",
    yearlySalesTotal: 9751,
    yearlyTotalSoldUnits: 1501,
    monthlyData: [
      { month: "january", totalSales: 947, totalUnits: 116 },
      { month: "february", totalSales: 312, totalUnits: 53 },
      { month: "march", totalSales: 382, totalUnits: 134 },
      { month: "april", totalSales: 469, totalUnits: 313 },
      { month: "may", totalSales: 884, totalUnits: 461 },
      { month: "june", totalSales: 786, totalUnits: 256 },
      { month: "july", totalSales: 683, totalUnits: 409 },
      { month: "august", totalSales: 109, totalUnits: 2 },
      { month: "september", totalSales: 954, totalUnits: 157 },
      { month: "october", totalSales: 528, totalUnits: 206 },
      { month: "november", totalSales: 193, totalUnits: 486 },
      { month: "december", totalSales: 768, totalUnits: 407 },
    ]
  },
  {
    _id: "6371259ff03239d40b0000da",
    productId: "63701d24f032395b3300012c",
    yearlySalesTotal: 1810,
    yearlyTotalSoldUnits: 4730,
    monthlyData: [
      { month: "january", totalSales: 50, totalUnits: 164 },
      { month: "february", totalSales: 61, totalUnits: 232 },
      { month: "march", totalSales: 75, totalUnits: 54 },
      { month: "april", totalSales: 996, totalUnits: 272 },
      { month: "may", totalSales: 193, totalUnits: 393 },
      { month: "june", totalSales: 176, totalUnits: 274 },
      { month: "july", totalSales: 742, totalUnits: 158 },
      { month: "august", totalSales: 242, totalUnits: 294 },
      { month: "september", totalSales: 440, totalUnits: 230 },
      { month: "october", totalSales: 105, totalUnits: 175 },
      { month: "november", totalSales: 578, totalUnits: 31 },
      { month: "december", totalSales: 935, totalUnits: 387 },
    ]
  },
  {
    _id: "6371259ff03239d40b0000db",
    productId: "63701d24f032395b3300012d",
    yearlySalesTotal: 5256,
    yearlyTotalSoldUnits: 4776,
    monthlyData: [
      { month: "january", totalSales: 909, totalUnits: 122 },
      { month: "february", totalSales: 677, totalUnits: 182 },
      { month: "march", totalSales: 832, totalUnits: 259 },
      { month: "april", totalSales: 780, totalUnits: 153 },
      { month: "may", totalSales: 537, totalUnits: 421 },
      { month: "june", totalSales: 103, totalUnits: 461 },
      { month: "july", totalSales: 931, totalUnits: 270 },
      { month: "august", totalSales: 309, totalUnits: 330 },
      { month: "september", totalSales: 206, totalUnits: 100 },
      { month: "october", totalSales: 634, totalUnits: 79 },
      { month: "november", totalSales: 269, totalUnits: 110 },
      { month: "december", totalSales: 892, totalUnits: 228 },
    ]
  },
  {
    _id: "637125a0f03239d40b0000dc",
    productId: "63701d25f03239d591000327",
    yearlySalesTotal: 2421,
    yearlyTotalSoldUnits: 4366,
    monthlyData: [
      { month: "january", totalSales: 647, totalUnits: 221 },
      { month: "february", totalSales: 507, totalUnits: 286 },
      { month: "march", totalSales: 47, totalUnits: 235 },
      { month: "april", totalSales: 535, totalUnits: 446 },
      { month: "may", totalSales: 488, totalUnits: 416 },
      { month: "june", totalSales: 312, totalUnits: 400 },
      { month: "july", totalSales: 713, totalUnits: 54 },
      { month: "august", totalSales: 751, totalUnits: 11 },
      { month: "september", totalSales: 726, totalUnits: 44 },
      { month: "october", totalSales: 466, totalUnits: 79 },
      { month: "november", totalSales: 483, totalUnits: 270 },
      { month: "december", totalSales: 983, totalUnits: 392 },
    ]
  },
  {
    _id: "637125a0f03239d40b0000dd",
    productId: "63701d25f03239d591000328",
    yearlySalesTotal: 9959,
    yearlyTotalSoldUnits: 2071,
    monthlyData: [
      { month: "january", totalSales: 401, totalUnits: 451 },
      { month: "february", totalSales: 894, totalUnits: 403 },
      { month: "march", totalSales: 821, totalUnits: 136 },
      { month: "april", totalSales: 873, totalUnits: 123 },
      { month: "may", totalSales: 852, totalUnits: 410 },
      { month: "june", totalSales: 166, totalUnits: 39 },
      { month: "july", totalSales: 955, totalUnits: 189 },
      { month: "august", totalSales: 648, totalUnits: 28 },
      { month: "september", totalSales: 34, totalUnits: 271 },
      { month: "october", totalSales: 622, totalUnits: 417 },
      { month: "november", totalSales: 658, totalUnits: 439 },
      { month: "december", totalSales: 250, totalUnits: 67 },
    ]
  },
];

