import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useGetStudentsQuery } from "../state/api";
import Header from "../Components/Header";
import { DataGrid } from "@mui/x-data-grid";
// import axios from "axios";
const Students = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetStudentsQuery();
  // const[student,setStudent] = useState([]);
  // useEffect(() => {
  //   getStudentList();
  // }, []);

  // function getStudentList() {
  //   axios
  //     .get("http://localhost:5000/student/students",{})
  //     .then((res) => {
  //       console.log("aa______", res.data);
  //     })
  //     .catch((err) => console.log("e_____", err));
  // }

  console.log("data", data);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 0.6,
    },
    {
      field: "course",
      headerName: "Course",
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.6,
    },
    {
      field: "contactNo",
      headerName: "Phone Number",
      flex: 0.5,
      // renderCell: (params) => {
      //   return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      // },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "courseProgress",
      headerName: "Course Progress(in %)",
      flex: 0.5,
    },
    {
      field: "courseType",
      headerName: "Course Type",
      flex: 0.6,
    },
    {
      field: "state",
      headerName: "State",
      flex: 0.6,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="STUDENT" subtitle="List of Students" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Students;
