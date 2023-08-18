import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath:"api",
    tagTypes:["Customer", "Address", "Invoice"],
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8001/api/"}),
    endpoints: (builder) => ({

    })
})