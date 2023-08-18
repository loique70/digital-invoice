import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customers = ({customer, handlerDelete}) => {
 
  const navigate = useNavigate();

  const handlerUpdate = async(id) =>{
        try {
            navigate(`/editCustomer/${id}`);
        } catch (error) {
            console.log(error);
        }
  }  

  return (
    <>
    <tr key={customer.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {customer.name}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {customer.email}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {customer.phone}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {customer.address.street} {customer.address.city} {customer.address.state} {customer.address.zipCode} {customer.address.country}
            </div>
        </td>

        <td className='text-right px-6 py-4 whitespace-nowrap'>
            <a onClick={() => handlerUpdate(customer.id)} className='hover:cursor-pointer px-4 text-indigo-600 hover:text-indigo-800'>Edit</a>
            <a onClick={() => handlerDelete(customer.id)} className=' text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
        </td>
    </tr>
    </>
  )
}

export default Customers
