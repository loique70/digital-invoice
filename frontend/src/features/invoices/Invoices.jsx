import React from 'react';



const  Invoices = ({invoice}) => {

  // Obtenir la date et l'heure actuelles
  const currentDate = new Date(Date.now());

  // Formater la date en utilisant toLocaleDateString
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div >
      
      <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold mb-4">Invoice #{invoice.invoiceNumber}</h2>
        <p className="text-lg mb-4"> Invoice Date:{formattedDate}</p>
      </div>

      <div className="flex justify-between mb-8">
        <div className=''>
          <h3 className="text-lg font-bold mb-2 ">Customer</h3>
            <div className='flex space-x-3'>
              <span  className='font-bold '>Name:</span>
              <p>{invoice.customer.name}</p>
              <span className='font-bold'>Email:</span>
              <p>{invoice.customer.email}</p>
              <span className='font-bold'>Phone:</span>
              <p>{invoice.customer.phone}</p>
            </div>

            <div className='flex space-x-3'>
              <span className='font-bold'>Street:</span>
              <p>{invoice.customer.address.street}</p>
              <span className='font-bold'>City:</span>
              <p>{invoice.customer.address.city}</p>
              <span className='font-bold'>State:</span>
              <p>{invoice.customer.address.state}</p>
            </div>
            <div className='flex space-x-3 '>
              <span className='font-bold'>zipCode:</span>
              <p>{invoice.customer.address.zipCode}</p>
              <span className='font-bold'>Country:</span>
              <p>{invoice.customer.address.country}</p>
            </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Billing Address</h3>
          <p>{invoice.billingAddress.street}</p>
          <p>{invoice.billingAddress.city}, {invoice.billingAddress.state} {invoice.billingAddress.zipCode}</p>
          <p>{invoice.billingAddress.country}</p>
        </div>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className='bg-gray-50'>
          <tr>
            <th className="py-2 px-4 border-b border-gray-300">Item</th>
            <th className="py-2 px-4 border-b border-gray-300">Quantity</th>
            <th className="py-2 px-4 border-b border-gray-300">Price</th>
            <th className="py-2 px-4 border-b border-gray-300">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-300">{item.name}</td>
              <td className="py-2 px-4 border-b border-gray-300">{item.quantity}</td>
              <td className="py-2 px-4 border-b border-gray-300">{item.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b border-gray-300">{item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-8">
        <div className="text-right">
          <p className="text-lg font-bold mb-2">Total Amount</p>
          <p>{invoice.totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
