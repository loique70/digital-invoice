import React, { createRef } from 'react';
import { useDeleteInvoiceMutation, useGetAllInvoiceQuery } from './invoiceApiSlice'
import Invoices from './Invoices';
import ReactToPrint from 'react-to-print';
import { useNavigate } from 'react-router-dom';


const InvoiceList = () => {

  const {data:invoices, isLoading} = useGetAllInvoiceQuery();
  const [deleteInvoice] = useDeleteInvoiceMutation();
  const navigate = useNavigate();
  let componentRefs;


  const handlerDelete = async (id) =>{
    try {
      await deleteInvoice(id).unwrap();

    } catch (error) {
      console.log(error);
    }
  }

  const handlerUpdate = async(id) =>{
    try {
        navigate(`/editInvoice/${id}`);
    } catch (error) {
        console.log(error);
    }
}

  if(invoices && invoices.length > 0){
    componentRefs = Array.from({ length: invoices.length }, () => createRef());
  } else{
    console.log('Invoices is not contain something')
  }


  return (
    <div className=" container mx-auto mt-24 ">
      <div className='h-12'>
        <button onClick={() => navigate("/createInvoice")} className='rounded bg-slate-600 text-white px-6 py-2'>Create Invoice</button>
      </div>
      {!isLoading &&(
        <>
          {invoices.map((invoice, index) =>(
            <div  key={invoice.id} className=" bg-white shadow rounded mt-3 p-8  mb-16">
                <div className='align-middle'>
                  <ReactToPrint 
                    trigger={() =>(
                      <button  className='rounded bg-green-500 hover:bg-green-700 text-white px-2 py-2 font-bold'>Imprimer</button>
                      )}
                    content={() => componentRefs[index].current}
                    pageStyle="print"
                  />
                  <div className=' flex justify-end align-baseline'>
                    <a onClick={() => handlerUpdate(invoice.id)} className='hover:cursor-pointer px-4 text-indigo-600 hover:text-indigo-800'>Edit</a>
                    <a onClick={() => handlerDelete(invoice.id)} className=' text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</a>
                  </div>
                </div>

                <div ref={componentRefs[index]}>
                  <Invoices    key={invoice.id} invoice={invoice}/>
                </div>
            </div>
          ))}  
        </>
      )}
    </div>
  )
}

export default InvoiceList
