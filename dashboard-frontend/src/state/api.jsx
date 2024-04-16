import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getGeography } from "../controllers/client";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl}),
    reducerPath: "adminApi",
    tagTypes: ["User","Products","Customers,Geography"],
    endpoints:(build)=>({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getCourses: build.query({
            query: (id) => `general/courses/${id}`,
            providesTags: ["Courses"],
        }),
        // getCustomers: build.query({
        //     query: () => `general/customers/${id}`,
        //     providesTags: ["Customers"],
        // }),
        getGeography: build.query({
            query: () => "client/geography",
            providesTags: ["Geography"]
        })
    }),
});

export const { 
    useGetUserQuery, 
    useGetCoursesQuery, 
    useGetCustomersQuery,
    useGetGeographyQuery,
} = api;

