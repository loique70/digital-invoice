import { apiSlice } from "../../app/api/apiSlice";
import {createEntityAdapter} from '@reduxjs/toolkit';

const customerAdapter = createEntityAdapter({});
const initialState = customerAdapter.getInitialState();

export const customerApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getAllCustomer: builder.query({
            query: () => '/customer/all',
            transformResponse:(response) =>{
                return response;
            },
            providesTags:["Customer"]
        }),

        getCustomerById: builder.query({
            query: (id) => `/customer/${id}`,
            providesTags: ['Customer'],
        }),
          

        getCustomersPaginated: builder.query({
            query: (params) => ({
                url: "/customer/paginated",
                params
            }),
            providesTags:["Customer"]
        }),

        searchCustomer: builder.query({
            query: (params) => ({
                url: "/customer/search",
                params
            }),

            providesTags:["Customer"]
        }),

        createCustomer: builder.mutation({
            query: (customer) =>({
                url:"/customer",
                method: "POST",
                body: customer
            }),
            invalidatesTags:['Customer']
        }),
        
        updateCustomer: builder.mutation({
            query: (customer) => ({
                url: `/customer/${customer.id}`,
                method: "PUT",
                body: customer
            }),

            invalidatesTags:["Customer"]
        }),

        deleteCustomer: builder.mutation({
            query: (id) => ({
                url: `/customer/${id}`,
                method:"DELETE"
            }),

            invalidatesTags: ["Customer"]
        })
    })
})


export const {
    useGetAllCustomerQuery,
    useGetCustomerByIdQuery,
    useGetCustomersPaginatedQuery,
    useSearchCustomerQuery,
    useCreateCustomerMutation,
    useUpdateCustomerMutation,
    useDeleteCustomerMutation
} = customerApiSlice;