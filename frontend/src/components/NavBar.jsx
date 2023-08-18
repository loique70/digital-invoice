import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='bg-gray-800 fixed top-0 w-full '>
      <div className="flex justify-between items-center px-8 py-4 text-white">
        <p className=" font-bold text-lg">Invoice-Assignment Frontend Application</p>
        <ul className='flex flex-row gap-3 items-center align-middle'>
          <li>
            <Link to={"/invoiceList"}>Invoices</Link>
          </li>
          <li>
            <Link to={"/customerList"} >Customers</Link>
          </li>
          <li>
            <Link to={"/addressList"}>Addresses</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
