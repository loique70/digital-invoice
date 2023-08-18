import React from 'react';
import { useNavigate } from 'react-router-dom';

const Addresses = ({address, handlerDelete}) => {
 
  const navigate = useNavigate();

  const handlerUpdate = async(id) =>{
        try {
            navigate(`/editAddress/${id}`);
        } catch (error) {
            console.log(error);
        }
  }  

  return (
    <>
    <tr key={address.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {address.street}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {address.city}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {address.state}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {address.zipCode}
            </div>
        </td>

        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>
                {address.country}
            </div>
        </td>

        <td className='text-right px-6 py-4 whitespace-nowrap'>
            <a onClick={() => handlerUpdate(address.id)} className='hover:cursor-pointer px-4 text-indigo-600 hover:text-indigo-800'>Edit</a>
            <a onClick={() => handlerDelete(address.id)} className=' text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
        </td>
    </tr>
    </>
  )
}

export default Addresses
