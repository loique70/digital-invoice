import { apiSlice } from "../../app/api/apiSlice";
import {createEntityAdapter} from '@reduxjs/toolkit';

const customerAdapter = createEntityAdapter({});
const initialState = customerAdapter.getInitialState();

export const addressApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getAllAddress: builder.query({
            query: () => '/address/all',
            transformResponse:(response) =>{
                return response;
            },
            providesTags:["Address"]
        }),

        getAddressById: builder.query({
            query: (id) => `/address/${id}`,
            providesTags: ['Address'],
        }),
          

        getAddressPaginated: builder.query({
            query: (params) => ({
                url: "/address/paginated",
                params
            }),
            providesTags:["Address"]
        }),

        searchAddress: builder.query({
            query: (params) => ({
                url: "/address/search",
                params
            }),

            providesTags:["Address"]
        }),

        createAddress: builder.mutation({
            query: (address) =>({
                url:"/address",
                method: "POST",
                body: address
            }),
            invalidatesTags:['Address']
        }),
        
        updateAddress: builder.mutation({
            query: (address) => ({
                url: `/address/${address.id}`,
                method: "PUT",
                body: address
            }),

            invalidatesTags:["Address"]
        }),

        deleteAddress: builder.mutation({
            query: (id) => ({
                url: `/address/${id}`,
                method:"DELETE"
            }),

            invalidatesTags: ["Address"]
        })
    })
})


export const {
    useGetAllAddressQuery,
    useGetAddressByIdQuery,
    useGetAddressPaginatedQuery,
    useSearchAddressQuery,
    useCreateAddressMutation,
    useUpdateAddressMutation,
    useDeleteAddressMutation
} = addressApiSlice;