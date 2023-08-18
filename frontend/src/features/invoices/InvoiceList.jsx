import React, { createRef, useEffect, useState } from 'react';
import { useDeleteInvoiceMutation } from './invoiceApiSlice'
import Invoices from './Invoices';
import ReactToPrint from 'react-to-print';
import { useNavigate,  } from 'react-router-dom';
import { useGetInvoicePaginatedQuery } from './invoiceApiSlice';
import {MdNavigateNext, MdNavigateBefore } from 'react-icons/md';


const InvoiceList = () => {

  // const {data:invoices, isLoading} = useGetAllInvoiceQuery();
  const [deleteInvoice] = useDeleteInvoiceMutation();
  const navigate = useNavigate();
  
  let componentRefs;
  const [page, setPage] = useState(0);
  const pageSize = 3;

  // Récupérer les données paginées de l'API
  const { data:invoices, isLoading} = useGetInvoicePaginatedQuery({ page, size: pageSize });

  // Mettre à jour la page lorsque les données changent
  useEffect(() => {
    if (invoices && invoices.number !== page) {
      setPage(invoices.number);
    }
  }, [invoices, page]);

  // Gérer le changement de page
  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/invoice/paginated?page=${newPage}&size=${pageSize}`)
  }

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

  if(invoices && invoices.content.length > 0){
    componentRefs = Array.from({ length: invoices.content.length }, () => createRef());
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
          {invoices.content.map((invoice, index) =>(
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

          {/* Afficher la pagination */}
          <div className="flex justify-center mt-8 mb-6">
            <button
              className="px-4 py-2 mx-1 rounded bg-green-500 text-white"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 0}
            >
              <MdNavigateBefore />
            </button>
            {[...Array(invoices.totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-1 ${index === page ? 'bg-gray-200' : ''}`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="rounded bg-green-500 text-white px-4 py-2 mx-1"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === invoices.totalPages - 1}
            >
              <MdNavigateNext />
            </button>
          </div> 
        </>
      )}
      
    </div>
  )
}

export default InvoiceList
