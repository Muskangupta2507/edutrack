import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.REACT_APP_BASE_URL}),
    reducerPath:"adminApi",
    tagTypes:["User","Courses","Students"],
    endpoints:(build)=>({
        getUser:build.query({
            query:(id)=>`general/user/${id}`,
            providesTags:["User"]
        }),
        getCourse:build.query({
            query:()=>"student/courses",
            providesTags:["Courses"],
        }),
        getStudents:build.query({
            query:() => "student/students",
            providesTags:["Students"],
        }),
        getDashboard: build.query({
          query: () => "general/dashboard",
          providesTags: ["Dashboard"],
        }),
    }),
});

export const {
    useGetUserQuery, useGetCourseQuery, useGetStudentsQuery , useGetDashboardQuery
} = api