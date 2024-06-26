import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Courses", "Students","Sales"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/general/user/${id}`,
      providesTags: ["User"],
    }),
    getCourse: build.query({
      query: () => "/student/courses",
      providesTags: ["Courses"],
    }),
    getStudents: build.query({
      query: () => "/student/students",
      providesTags: ["Students"],
    }),
    getDashboard: build.query({
      query: () => "/general/dashboard",
      providesTags: ["Dashboard"],
    }),
    getSales: build.query({
      query: () => "/sales/sales",
      providesTags: ["Sales"],
    }),
  }),
});

export const {
    useGetUserQuery, useGetCourseQuery, useGetStudentsQuery , useGetDashboardQuery, useGetSalesQuery
} = api