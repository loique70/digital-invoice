import { apiSlice } from "../../app/api/apiSlice";


export const invoiceApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getAllInvoice: builder.query({
            query: () => '/invoice/all',
            transformResponse:(response) =>{
                return response;
            },
            providesTags:["Invoice"]
        }),

        getInvoiceById: builder.query({
            query: (id) => `/invoice/${id}`,
            providesTags: ['Invoice'],
        }),
          

        getInvoicePaginated: builder.query({
            query: (params) => ({
                url: "/invoice/paginated",
                params
            }),
            providesTags:["Invoice"]
        }),

        searchInvoice: builder.query({
            query: (params) => ({
                url: "/invoice/search",
                params
            }),

            providesTags:["Invoice"]
        }),

        createInvoice: builder.mutation({
            query: (invoice) =>({
                url:"/invoice",
                method: "POST",
                body: invoice
            }),
            invalidatesTags:['Invoice']
        }),
        
        updateInvoice: builder.mutation({
            query: (invoice) => ({
                url: `/invoice/${invoice.id}`,
                method: "PUT",
                body: invoice
            }),

            invalidatesTags:["Invoice"]
        }),

        deleteInvoice: builder.mutation({
            query: (id) => ({
                url: `/invoice/${id}`,
                method:"DELETE"
            }),

            invalidatesTags: ["Invoice"]
        })
    })
})


export const {
    useGetAllInvoiceQuery,
    useGetInvoiceByIdQuery,
    useGetInvoicePaginatedQuery,
    useSearchInvoiceQuery,
    useCreateInvoiceMutation,
    useUpdateInvoiceMutation,
    useDeleteInvoiceMutation
} = invoiceApiSlice;