import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDeleteCustomerMutation, useGetAllCustomerQuery} from './customerApiSlice';
import Customers from './Customers';
import {HiSearch} from 'react-icons/hi'



const CustomerList = () => {
  
  const navigate = useNavigate();
   
  const {data: customers, isLoading} = useGetAllCustomerQuery();
  const [deleteCustomer] = useDeleteCustomerMutation();
  

  const handlerDelete = async(id) =>{
    try {
        await deleteCustomer(id).unwrap();
    } catch (error) {
        console.log(error);
    }
  }

  

  return (
    <div className='container mx-auto my-8 mt-24'>
      <div className='h-12 flex justify-between mb-4'>
        <button onClick={() => navigate("/createCustomer")} className='rounded bg-slate-600 text-white px-6 py-2'>Create Customer</button>
        <Link to='/searchCustomer'>
          <HiSearch />
        </Link>
      </div>

      <div className='flex border-b shadow'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Name</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Email</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Phone</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Address</th>
                    <th className='text-right font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>actions</th>
                </tr>
            </thead>
            {!isLoading && (
                <tbody>
                    {customers.map(customer =>(
                        <Customers  customer={customer}  handlerDelete={handlerDelete} key={customer.id}/>
                    ))}
                </tbody>
            )}
            
        </table>
      </div>
    </div>
  )
}

export default CustomerList
