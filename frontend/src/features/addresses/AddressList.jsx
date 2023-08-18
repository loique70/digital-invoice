import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteAddressMutation, useGetAllAddressQuery } from './addressApiSlice';
import Addresses from './Addresses';


const AddressList = () => {
  
  const navigate = useNavigate();
   
  const {data: addresses, isLoading} = useGetAllAddressQuery();
  const [deleteAddress] = useDeleteAddressMutation();
  
  

  const handlerDelete = async(id) =>{
    try {
        await deleteAddress(id).unwrap();
    } catch (error) {
        console.log(error);
    }
  }

  

  return (
    <div className='container mx-auto my-8 mt-24'>
      <div className='h-12'>
        <button onClick={() => navigate("/createAddress")} className='rounded bg-slate-600 text-white px-6 py-2'>Create Address</button>
      </div>

      <div className='flex border-b shadow'>
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Street</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>City</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>State</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>ziPCode</th>
                    <th className='text-left font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>Country</th>
                    <th className='text-right font-medium text-gray-500 uppercase px-6 py-3 tracking-wider'>actions</th>
                </tr>
            </thead>
            {!isLoading && (
                <tbody>
                    {addresses.map(address =>(
                        <Addresses  address={address}  handlerDelete={handlerDelete} key={address.id}/>
                    ))}
                </tbody>
            )}
            
        </table>
      </div>
    </div>
  )
}

export default AddressList
