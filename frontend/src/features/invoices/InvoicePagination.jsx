import React, { useState, useEffect } from 'react';
import { useGetInvoicePaginatedQuery } from './invoiceApiSlice';
import {MdNavigateNext, MdNavigatePrevious} from 'react-icons/md';


const  InvoicePagination = () =>{
  const [page, setPage] = useState(0);
  const pageSize = 10;

  // Récupérer les données paginées de l'API
  const { data, isLoading, error } = useGetInvoicePaginatedQuery({ page, size: pageSize });

 // Mettre à jour la page lorsque les données changent
  useEffect(() => {
    if (data && data.number !== page) {
      setPage(data.number);
    }
  }, [data, page]);

// Gérer le changement de page
  const handlePageChange = (newPage) => {
    setPage(newPage);
  }
  

  return (
    <div className='mb-24 space-x-3'>
      <ul>
        {data.content.map((invoice) => (
          <li key={invoice.id}>{invoice.name}</li>
        ))}
      </ul>
      <button className='rounded bg-green-500 text-white px-2 py-2'
        onClick={() => {
            setPage((prevPage) => Math.max(prevPage - 1, 0));
            console.log('Previous button clicked');
        }}
       >
           <MdNavigatePrevious />
       </button>

        <button
            className='rounded bg-green-500 text-white px-2 py-2'
            onClick={() => {
                setPage((prevPage) => Math.min(prevPage + 1, data.totalPages - 1));
                console.log('Next button clicked');
            }}
        >
          <MdNavigateNext />
        </button>
    </div>
  );
}

export default InvoicePagination
