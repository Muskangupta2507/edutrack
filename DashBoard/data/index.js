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

export const dataCourseStat = [
  {
    Productid: "63701d24f03239c72c00018e",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 200, OfflineSale: 150},
          {month: "February", OnlineSale: 250, OfflineSale: 180},
          {month: "March", OnlineSale: 300, OfflineSale: 200},
          {month: "April", OnlineSale: 350, OfflineSale: 220},
          {month: "May", OnlineSale: 400, OfflineSale: 250},
          {month: "June", OnlineSale: 450, OfflineSale: 270},
          {month: "July", OnlineSale: 500, OfflineSale: 300},
          {month: "August", OnlineSale: 550, OfflineSale: 320},
          {month: "September", OnlineSale: 600, OfflineSale: 350},
          {month: "October", OnlineSale: 650, OfflineSale: 380},
          {month: "November", OnlineSale: 700, OfflineSale: 400},
          {month: "December", OnlineSale: 750, OfflineSale: 420}
        ],
        totalYearlyOnlineSales: 6000,
        totalYearlyOfflineSales: 3500
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 220, OfflineSale: 160},
          {month: "February", OnlineSale: 270, OfflineSale: 190},
          {month: "March", OnlineSale: 320, OfflineSale: 210},
          {month: "April", OnlineSale: 370, OfflineSale: 230},
          {month: "May", OnlineSale: 420, OfflineSale: 260},
          {month: "June", OnlineSale: 470, OfflineSale: 280},
          {month: "July", OnlineSale: 520, OfflineSale: 310},
          {month: "August", OnlineSale: 570, OfflineSale: 330},
          {month: "September", OnlineSale: 620, OfflineSale: 360},
          {month: "October", OnlineSale: 670, OfflineSale: 390},
          {month: "November", OnlineSale: 720, OfflineSale: 410},
          {month: "December", OnlineSale: 770, OfflineSale: 430}
        ],
        totalYearlyOnlineSales: 6300,
        totalYearlyOfflineSales: 3600
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 240, OfflineSale: 170},
          {month: "February", OnlineSale: 290, OfflineSale: 200},
          {month: "March", OnlineSale: 340, OfflineSale: 220},
          {month: "April", OnlineSale: 390, OfflineSale: 240},
          {month: "May", OnlineSale: 440, OfflineSale: 270},
          {month: "June", OnlineSale: 490, OfflineSale: 290},
          {month: "July", OnlineSale: 540, OfflineSale: 320},
          {month: "August", OnlineSale: 590, OfflineSale: 340},
          {month: "September", OnlineSale: 640, OfflineSale: 370},
          {month: "October", OnlineSale: 690, OfflineSale: 400},
          {month: "November", OnlineSale: 740, OfflineSale: 420},
          {month: "December", OnlineSale: 790, OfflineSale: 440}
        ],
        totalYearlyOnlineSales: 6600,
        totalYearlyOfflineSales: 3800
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 45000},
      {name: "Europe", totalSales: 55000},
      {name: "Africa", totalSales: 35000},
      {name: "North America", totalSales: 60000},
      {name: "South America", totalSales: 40000},
      {name: "Australia", totalSales: 30000}
    ]
  },
  {
    Productid: "63701d24f03239c72c00018f",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 180, OfflineSale: 120},
          {month: "February", OnlineSale: 200, OfflineSale: 150},
          {month: "March", OnlineSale: 220, OfflineSale: 160},
          {month: "April", OnlineSale: 240, OfflineSale: 170},
          {month: "May", OnlineSale: 260, OfflineSale: 180},
          {month: "June", OnlineSale: 280, OfflineSale: 190},
          {month: "July", OnlineSale: 300, OfflineSale: 200},
          {month: "August", OnlineSale: 320, OfflineSale: 210},
          {month: "September", OnlineSale: 340, OfflineSale: 220},
          {month: "October", OnlineSale: 360, OfflineSale: 230},
          {month: "November", OnlineSale: 380, OfflineSale: 240},
          {month: "December", OnlineSale: 400, OfflineSale: 250}
        ],
        totalYearlyOnlineSales: 3500,
        totalYearlyOfflineSales: 2500
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 190, OfflineSale: 130},
          {month: "February", OnlineSale: 210, OfflineSale: 140},
          {month: "March", OnlineSale: 230, OfflineSale: 150},
          {month: "April", OnlineSale: 250, OfflineSale: 160},
          {month: "May", OnlineSale: 270, OfflineSale: 170},
          {month: "June", OnlineSale: 290, OfflineSale: 180},
          {month: "July", OnlineSale: 310, OfflineSale: 190},
          {month: "August", OnlineSale: 330, OfflineSale: 200},
          {month: "September", OnlineSale: 350, OfflineSale: 210},
          {month: "October", OnlineSale: 370, OfflineSale: 220},
          {month: "November", OnlineSale: 390, OfflineSale: 230},
          {month: "December", OnlineSale: 410, OfflineSale: 240}
        ],
        totalYearlyOnlineSales: 3600,
        totalYearlyOfflineSales: 2600
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 200, OfflineSale: 140},
          {month: "February", OnlineSale: 220, OfflineSale: 150},
          {month: "March", OnlineSale: 240, OfflineSale: 160},
          {month: "April", OnlineSale: 260, OfflineSale: 170},
          {month: "May", OnlineSale: 280, OfflineSale: 180},
          {month: "June", OnlineSale: 300, OfflineSale: 190},
          {month: "July", OnlineSale: 320, OfflineSale: 200},
          {month: "August", OnlineSale: 340, OfflineSale: 210},
          {month: "September", OnlineSale: 360, OfflineSale: 220},
          {month: "October", OnlineSale: 380, OfflineSale: 230},
          {month: "November", OnlineSale: 400, OfflineSale: 240},
          {month: "December", OnlineSale: 420, OfflineSale: 250}
        ],
        totalYearlyOnlineSales: 3700,
        totalYearlyOfflineSales: 2700
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 40000},
      {name: "Europe", totalSales: 50000},
      {name: "Africa", totalSales: 30000},
      {name: "North America", totalSales: 55000},
      {name: "South America", totalSales: 35000},
      {name: "Australia", totalSales: 25000}
    ]
  },
  {
    Productid: "63701d24f03239c72c000190",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 150, OfflineSale: 100},
          {month: "February", OnlineSale: 170, OfflineSale: 110},
          {month: "March", OnlineSale: 190, OfflineSale: 120},
          {month: "April", OnlineSale: 210, OfflineSale: 130},
          {month: "May", OnlineSale: 230, OfflineSale: 140},
          {month: "June", OnlineSale: 250, OfflineSale: 150},
          {month: "July", OnlineSale: 270, OfflineSale: 160},
          {month: "August", OnlineSale: 290, OfflineSale: 170},
          {month: "September", OnlineSale: 310, OfflineSale: 180},
          {month: "October", OnlineSale: 330, OfflineSale: 190},
          {month: "November", OnlineSale: 350, OfflineSale: 200},
          {month: "December", OnlineSale: 370, OfflineSale: 210}
        ],
        totalYearlyOnlineSales: 2700,
        totalYearlyOfflineSales: 1800
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 160, OfflineSale: 110},
          {month: "February", OnlineSale: 180, OfflineSale: 120},
          {month: "March", OnlineSale: 200, OfflineSale: 130},
          {month: "April", OnlineSale: 220, OfflineSale: 140},
          {month: "May", OnlineSale: 240, OfflineSale: 150},
          {month: "June", OnlineSale: 260, OfflineSale: 160},
          {month: "July", OnlineSale: 280, OfflineSale: 170},
          {month: "August", OnlineSale: 300, OfflineSale: 180},
          {month: "September", OnlineSale: 320, OfflineSale: 190},
          {month: "October", OnlineSale: 340, OfflineSale: 200},
          {month: "November", OnlineSale: 360, OfflineSale: 210},
          {month: "December", OnlineSale: 380, OfflineSale: 220}
        ],
        totalYearlyOnlineSales: 2800,
        totalYearlyOfflineSales: 1900
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 170, OfflineSale: 120},
          {month: "February", OnlineSale: 190, OfflineSale: 130},
          {month: "March", OnlineSale: 210, OfflineSale: 140},
          {month: "April", OnlineSale: 230, OfflineSale: 150},
          {month: "May", OnlineSale: 250, OfflineSale: 160},
          {month: "June", OnlineSale: 270, OfflineSale: 170},
          {month: "July", OnlineSale: 290, OfflineSale: 180},
          {month: "August", OnlineSale: 310, OfflineSale: 190},
          {month: "September", OnlineSale: 330, OfflineSale: 200},
          {month: "October", OnlineSale: 350, OfflineSale: 210},
          {month: "November", OnlineSale: 370, OfflineSale: 220},
          {month: "December", OnlineSale: 390, OfflineSale: 230}
        ],
        totalYearlyOnlineSales: 2900,
        totalYearlyOfflineSales: 2000
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 35000},
      {name: "Europe", totalSales: 45000},
      {name: "Africa", totalSales: 25000},
      {name: "North America", totalSales: 50000},
      {name: "South America", totalSales: 30000},
      {name: "Australia", totalSales: 20000}
    ]
  },
  {
    Productid: "63701d24f03239c72c000191",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 120, OfflineSale: 80},
          {month: "February", OnlineSale: 140, OfflineSale: 90},
          {month: "March", OnlineSale: 160, OfflineSale: 100},
          {month: "April", OnlineSale: 180, OfflineSale: 110},
          {month: "May", OnlineSale: 200, OfflineSale: 120},
          {month: "June", OnlineSale: 220, OfflineSale: 130},
          {month: "July", OnlineSale: 240, OfflineSale: 140},
          {month: "August", OnlineSale: 260, OfflineSale: 150},
          {month: "September", OnlineSale: 280, OfflineSale: 160},
          {month: "October", OnlineSale: 300, OfflineSale: 170},
          {month: "November", OnlineSale: 320, OfflineSale: 180},
          {month: "December", OnlineSale: 340, OfflineSale: 190}
        ],
        totalYearlyOnlineSales: 2200,
        totalYearlyOfflineSales: 1400
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 130, OfflineSale: 90},
          {month: "February", OnlineSale: 150, OfflineSale: 100},
          {month: "March", OnlineSale: 170, OfflineSale: 110},
          {month: "April", OnlineSale: 190, OfflineSale: 120},
          {month: "May", OnlineSale: 210, OfflineSale: 130},
          {month: "June", OnlineSale: 230, OfflineSale: 140},
          {month: "July", OnlineSale: 250, OfflineSale: 150},
          {month: "August", OnlineSale: 270, OfflineSale: 160},
          {month: "September", OnlineSale: 290, OfflineSale: 170},
          {month: "October", OnlineSale: 310, OfflineSale: 180},
          {month: "November", OnlineSale: 330, OfflineSale: 190},
          {month: "December", OnlineSale: 350, OfflineSale: 200}
        ],
        totalYearlyOnlineSales: 2300,
        totalYearlyOfflineSales: 1500
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 140, OfflineSale: 100},
          {month: "February", OnlineSale: 160, OfflineSale: 110},
          {month: "March", OnlineSale: 180, OfflineSale: 120},
          {month: "April", OnlineSale: 200, OfflineSale: 130},
          {month: "May", OnlineSale: 220, OfflineSale: 140},
          {month: "June", OnlineSale: 240, OfflineSale: 150},
          {month: "July", OnlineSale: 260, OfflineSale: 160},
          {month: "August", OnlineSale: 280, OfflineSale: 170},
          {month: "September", OnlineSale: 300, OfflineSale: 180},
          {month: "October", OnlineSale: 320, OfflineSale: 190},
          {month: "November", OnlineSale: 340, OfflineSale: 200},
          {month: "December", OnlineSale: 360, OfflineSale: 210}
        ],
        totalYearlyOnlineSales: 2400,
        totalYearlyOfflineSales: 1600
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 30000},
      {name: "Europe", totalSales: 40000},
      {name: "Africa", totalSales: 20000},
      {name: "North America", totalSales: 45000},
      {name: "South America", totalSales: 25000},
      {name: "Australia", totalSales: 15000}
    ]
  },
  {
    Productid: "63701d24f03239867500012a",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 100, OfflineSale: 70},
          {month: "February", OnlineSale: 120, OfflineSale: 80},
          {month: "March", OnlineSale: 140, OfflineSale: 90},
          {month: "April", OnlineSale: 160, OfflineSale: 100},
          {month: "May", OnlineSale: 180, OfflineSale: 110},
          {month: "June", OnlineSale: 200, OfflineSale: 120},
          {month: "July", OnlineSale: 220, OfflineSale: 130},
          {month: "August", OnlineSale: 240, OfflineSale: 140},
          {month: "September", OnlineSale: 260, OfflineSale: 150},
          {month: "October", OnlineSale: 280, OfflineSale: 160},
          {month: "November", OnlineSale: 300, OfflineSale: 170},
          {month: "December", OnlineSale: 320, OfflineSale: 180}
        ],
        totalYearlyOnlineSales: 2000,
        totalYearlyOfflineSales: 1300
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 110, OfflineSale: 75},
          {month: "February", OnlineSale: 130, OfflineSale: 85},
          {month: "March", OnlineSale: 150, OfflineSale: 95},
          {month: "April", OnlineSale: 170, OfflineSale: 105},
          {month: "May", OnlineSale: 190, OfflineSale: 115},
          {month: "June", OnlineSale: 210, OfflineSale: 125},
          {month: "July", OnlineSale: 230, OfflineSale: 135},
          {month: "August", OnlineSale: 250, OfflineSale: 145},
          {month: "September", OnlineSale: 270, OfflineSale: 155},
          {month: "October", OnlineSale: 290, OfflineSale: 165},
          {month: "November", OnlineSale: 310, OfflineSale: 175},
          {month: "December", OnlineSale: 330, OfflineSale: 185}
        ],
        totalYearlyOnlineSales: 2100,
        totalYearlyOfflineSales: 1400
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 120, OfflineSale: 80},
          {month: "February", OnlineSale: 140, OfflineSale: 90},
          {month: "March", OnlineSale: 160, OfflineSale: 100},
          {month: "April", OnlineSale: 180, OfflineSale: 110},
          {month: "May", OnlineSale: 200, OfflineSale: 120},
          {month: "June", OnlineSale: 220, OfflineSale: 130},
          {month: "July", OnlineSale: 240, OfflineSale: 140},
          {month: "August", OnlineSale: 260, OfflineSale: 150},
          {month: "September", OnlineSale: 280, OfflineSale: 160},
          {month: "October", OnlineSale: 300, OfflineSale: 170},
          {month: "November", OnlineSale: 320, OfflineSale: 180},
          {month: "December", OnlineSale: 340, OfflineSale: 190}
        ],
        totalYearlyOnlineSales: 2200,
        totalYearlyOfflineSales: 1500
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 25000},
      {name: "Europe", totalSales: 35000},
      {name: "Africa", totalSales: 15000},
      {name: "North America", totalSales: 40000},
      {name: "South America", totalSales: 20000},
      {name: "Australia", totalSales: 10000}
    ]
  },
  {
    Productid: "63701d24f03239867500012b",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 90, OfflineSale: 60},
          {month: "February", OnlineSale: 110, OfflineSale: 70},
          {month: "March", OnlineSale: 130, OfflineSale: 80},
          {month: "April", OnlineSale: 150, OfflineSale: 90},
          {month: "May", OnlineSale: 170, OfflineSale: 100},
          {month: "June", OnlineSale: 190, OfflineSale: 110},
          {month: "July", OnlineSale: 210, OfflineSale: 120},
          {month: "August", OnlineSale: 230, OfflineSale: 130},
          {month: "September", OnlineSale: 250, OfflineSale: 140},
          {month: "October", OnlineSale: 270, OfflineSale: 150},
          {month: "November", OnlineSale: 290, OfflineSale: 160},
          {month: "December", OnlineSale: 310, OfflineSale: 170}
        ],
        totalYearlyOnlineSales: 1800,
        totalYearlyOfflineSales: 1100
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 100, OfflineSale: 65},
          {month: "February", OnlineSale: 120, OfflineSale: 75},
          {month: "March", OnlineSale: 140, OfflineSale: 85},
          {month: "April", OnlineSale: 160, OfflineSale: 95},
          {month: "May", OnlineSale: 180, OfflineSale: 105},
          {month: "June", OnlineSale: 200, OfflineSale: 115},
          {month: "July", OnlineSale: 220, OfflineSale: 125},
          {month: "August", OnlineSale: 240, OfflineSale: 135},
          {month: "September", OnlineSale: 260, OfflineSale: 145},
          {month: "October", OnlineSale: 280, OfflineSale: 155},
          {month: "November", OnlineSale: 300, OfflineSale: 165},
          {month: "December", OnlineSale: 320, OfflineSale: 175}
        ],
        totalYearlyOnlineSales: 1900,
        totalYearlyOfflineSales: 1200
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 110, OfflineSale: 70},
          {month: "February", OnlineSale: 130, OfflineSale: 80},
          {month: "March", OnlineSale: 150, OfflineSale: 90},
          {month: "April", OnlineSale: 170, OfflineSale: 100},
          {month: "May", OnlineSale: 190, OfflineSale: 110},
          {month: "June", OnlineSale: 210, OfflineSale: 120},
          {month: "July", OnlineSale: 230, OfflineSale: 130},
          {month: "August", OnlineSale: 250, OfflineSale: 140},
          {month: "September", OnlineSale: 270, OfflineSale: 150},
          {month: "October", OnlineSale: 290, OfflineSale: 160},
          {month: "November", OnlineSale: 310, OfflineSale: 170},
          {month: "December", OnlineSale: 330, OfflineSale: 180}
        ],
        totalYearlyOnlineSales: 2000,
        totalYearlyOfflineSales: 1300
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 20000},
      {name: "Europe", totalSales: 30000},
      {name: "Africa", totalSales: 10000},
      {name: "North America", totalSales: 35000},
      {name: "South America", totalSales: 15000},
      {name: "Australia", totalSales: 8000}
    ]
  },
  {
    Productid: "63701d24f03239867500012c",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 80, OfflineSale: 50},
          {month: "February", OnlineSale: 100, OfflineSale: 60},
          {month: "March", OnlineSale: 120, OfflineSale: 70},
          {month: "April", OnlineSale: 140, OfflineSale: 80},
          {month: "May", OnlineSale: 160, OfflineSale: 90},
          {month: "June", OnlineSale: 180, OfflineSale: 100},
          {month: "July", OnlineSale: 200, OfflineSale: 110},
          {month: "August", OnlineSale: 220, OfflineSale: 120},
          {month: "September", OnlineSale: 240, OfflineSale: 130},
          {month: "October", OnlineSale: 260, OfflineSale: 140},
          {month: "November", OnlineSale: 280, OfflineSale: 150},
          {month: "December", OnlineSale: 300, OfflineSale: 160}
        ],
        totalYearlyOnlineSales: 1900,
        totalYearlyOfflineSales: 1100
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 90, OfflineSale: 55},
          {month: "February", OnlineSale: 110, OfflineSale: 65},
          {month: "March", OnlineSale: 130, OfflineSale: 75},
          {month: "April", OnlineSale: 150, OfflineSale: 85},
          {month: "May", OnlineSale: 170, OfflineSale: 95},
          {month: "June", OnlineSale: 190, OfflineSale: 105},
          {month: "July", OnlineSale: 210, OfflineSale: 115},
          {month: "August", OnlineSale: 230, OfflineSale: 125},
          {month: "September", OnlineSale: 250, OfflineSale: 135},
          {month: "October", OnlineSale: 270, OfflineSale: 145},
          {month: "November", OnlineSale: 290, OfflineSale: 155},
          {month: "December", OnlineSale: 310, OfflineSale: 165}
        ],
        totalYearlyOnlineSales: 2000,
        totalYearlyOfflineSales: 1200
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 100, OfflineSale: 60},
          {month: "February", OnlineSale: 120, OfflineSale: 70},
          {month: "March", OnlineSale: 140, OfflineSale: 80},
          {month: "April", OnlineSale: 160, OfflineSale: 90},
          {month: "May", OnlineSale: 180, OfflineSale: 100},
          {month: "June", OnlineSale: 200, OfflineSale: 110},
          {month: "July", OnlineSale: 220, OfflineSale: 120},
          {month: "August", OnlineSale: 240, OfflineSale: 130},
          {month: "September", OnlineSale: 260, OfflineSale: 140},
          {month: "October", OnlineSale: 280, OfflineSale: 150},
          {month: "November", OnlineSale: 300, OfflineSale: 160},
          {month: "December", OnlineSale: 320, OfflineSale: 170}
        ],
        totalYearlyOnlineSales: 2100,
        totalYearlyOfflineSales: 1300
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 15000},
      {name: "Europe", totalSales: 25000},
      {name: "Africa", totalSales: 9000},
      {name: "North America", totalSales: 30000},
      {name: "South America", totalSales: 13000},
      {name: "Australia", totalSales: 7000}
    ]
  },
  {
    Productid: "63701d24f03239867500012d",
    yearlySales: [
      {
        year: "2022",
        monthySales: [
          {month: "January", OnlineSale: 70, OfflineSale: 40},
          {month: "February", OnlineSale: 90, OfflineSale: 50},
          {month: "March", OnlineSale: 110, OfflineSale: 60},
          {month: "April", OnlineSale: 130, OfflineSale: 70},
          {month: "May", OnlineSale: 150, OfflineSale: 80},
          {month: "June", OnlineSale: 170, OfflineSale: 90},
          {month: "July", OnlineSale: 190, OfflineSale: 100},
          {month: "August", OnlineSale: 210, OfflineSale: 110},
          {month: "September", OnlineSale: 230, OfflineSale: 120},
          {month: "October", OnlineSale: 250, OfflineSale: 130},
          {month: "November", OnlineSale: 270, OfflineSale: 140},
          {month: "December", OnlineSale: 290, OfflineSale: 150}
        ],
        totalYearlyOnlineSales: 1700,
        totalYearlyOfflineSales: 1000
      },
      {
        year: "2023",
        monthySales: [
          {month: "January", OnlineSale: 80, OfflineSale: 45},
          {month: "February", OnlineSale: 100, OfflineSale: 55},
          {month: "March", OnlineSale: 120, OfflineSale: 65},
          {month: "April", OnlineSale: 140, OfflineSale: 75},
          {month: "May", OnlineSale: 160, OfflineSale: 85},
          {month: "June", OnlineSale: 180, OfflineSale: 95},
          {month: "July", OnlineSale: 200, OfflineSale: 105},
          {month: "August", OnlineSale: 220, OfflineSale: 115},
          {month: "September", OnlineSale: 240, OfflineSale: 125},
          {month: "October", OnlineSale: 260, OfflineSale: 135},
          {month: "November", OnlineSale: 280, OfflineSale: 145},
          {month: "December", OnlineSale: 300, OfflineSale: 155}
        ],
        totalYearlyOnlineSales: 1800,
        totalYearlyOfflineSales: 1100
      },
      {
        year: "2024",
        monthySales: [
          {month: "January", OnlineSale: 90, OfflineSale: 50},
          {month: "February", OnlineSale: 110, OfflineSale: 60},
          {month: "March", OnlineSale: 130, OfflineSale: 70},
          {month: "April", OnlineSale: 150, OfflineSale: 80},
          {month: "May", OnlineSale: 170, OfflineSale: 90},
          {month: "June", OnlineSale: 190, OfflineSale: 100},
          {month: "July", OnlineSale: 210, OfflineSale: 110},
          {month: "August", OnlineSale: 230, OfflineSale: 120},
          {month: "September", OnlineSale: 250, OfflineSale: 130},
          {month: "October", OnlineSale: 270, OfflineSale: 140},
          {month: "November", OnlineSale: 290, OfflineSale: 150},
          {month: "December", OnlineSale: 310, OfflineSale: 160}
        ],
        totalYearlyOnlineSales: 1900,
        totalYearlyOfflineSales: 1200
      }
    ],
    continentSale: [
      {name: "Asia", totalSales: 14000},
      {name: "Europe", totalSales: 24000},
      {name: "Africa", totalSales: 8000},
      {name: "North America", totalSales: 27000},
      {name: "South America", totalSales: 12000},
      {name: "Australia", totalSales: 6000}
    ]
  }
];