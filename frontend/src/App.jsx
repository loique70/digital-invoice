import { useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import AddressList from './features/addresses/AddressList'
import CreateCustomer from './features/customers/CreateCustomer'
import CustomerList from './features/customers/CustomerList'
import EditCustomer from './features/customers/EditCustomer'
import CreateAddress from './features/addresses/CreateAddress'
import EditAddress from './features/addresses/EditAddress'
import InvoiceList from './features/invoices/InvoiceList'
import CreateInvoice from './features/invoices/createInvoice'
import EditInvoice from './features/invoices/EditInvoice'
import SearchCustomer from './features/customers/SearchCustomer'


function App() {
  

  return (
    <>
      <NavBar />
      <main className='flex justify-center items-center '>
        <Routes>
          <Route index element={<InvoiceList />} />
          <Route path='/invoiceList' element={<InvoiceList />} />
          <Route path='/createInvoice' element={<CreateInvoice />} />
          <Route path='editInvoice/:id' element={<EditInvoice/>} />
          <Route path='invoice/:page' element={<InvoiceList />} />

          <Route path='/addressList' element={<AddressList />} />
          <Route path='createAddress' element={<CreateAddress/>} />
          <Route path='editAddress/:id' element={<EditAddress />} />
          {/* <Route index element={<CustomerList />} /> */}

          <Route path='/customerList' element={<CustomerList />} />
          <Route path='/createCustomer' element={<CreateCustomer />} />
          <Route path='/editCustomer/:id' element={<EditCustomer />} />
          <Route path='/searchCustomer' element={<SearchCustomer />} />
        </Routes>
      </main>
    </>
  )
}

export default App
