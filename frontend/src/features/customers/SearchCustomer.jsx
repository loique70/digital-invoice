import React, { useState } from 'react'
import { useSearchCustomerQuery } from './customerApiSlice';

const SearchCustomer = () => {

  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const {data, error, isLoading} = useSearchCustomerQuery({name:submittedName, page:0, size:10});

  const handlerSearch = (e) =>{
    e.preventDefault();
    setSubmittedName(name);
  }

  return (
    <div className='mt-24 container m-auto'>
      <h2 className='text-2xl font-bold tracking-wider mb-3 text-center'>Search Customer page</h2>
      <form onSubmit={handlerSearch} className='flex justify-center items-center'>
        <input  className='ml-2 border px-2 py-2  w-96 border-r-0' placeholder='Search a customer' type='search' 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button className='bg-green-500 border py-2 px-2 text-white font-bold ml-0 border-l-0' type='submit'>Search</button>
      </form>

      <div className='flex justify-center mt-4'>
        {isLoading && <p>Loading data...</p>}
        {error && <p>Error to fetching data</p>}
        {data && (
            <ul className=''> 
                {
                    data.content.map(customer =>(
                        <li key={customer.id}>{customer.name}</li>
                    ))
                }
            </ul>
        )}
      </div>
    </div>
  )
}

export default SearchCustomer
