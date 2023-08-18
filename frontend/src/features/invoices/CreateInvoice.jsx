
import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateInvoiceMutation } from './invoiceApiSlice';

const CreateInvoice = () => {

 const [createNewInvoice] = useCreateInvoiceMutation();    
 const {register, handleSubmit, reset, formState:{errors}} = useForm();   
 const [items, setItems] = useState([{ name: '', quantity: 0, price: 0.0, total: 0.0 }]);
 const navigate = useNavigate();

 const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 0, price: 0.0, total: 0.0 }]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

 const calculateTotalAmount = (items) => {
    let totalAmount = 0;
    if (Array.isArray(items)) {
      items.forEach(item => {
        totalAmount += item.total;
      });
    }
    return totalAmount;
  }
  


 const onSubmit = async (data) =>{
    if(!data) return {};
    
    //Calculer la valeur de total pour chaque élément
    data.items = data.items.map(item => ({
        ...item,
        total: item.quantity * item.price
    }));

    data.totalAmount = calculateTotalAmount(data.items);
    await createNewInvoice(data).unwrap();
    reset({
        name:'',
        email:'',
        phone:'',
        address:{
            street:'',
            city:"",
            state:'',
            zipCode:'',
            country:''
        }
    });
    console.log(data)
    navigate('/invoiceList');
 }  

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto mt-24 mb-96'>
      <div className='px-8 py-8'>
        <div className='font-thin tracking-wider text-2xl'>
            <h1 className='text-center mb-4'>Create a new Invoice</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-2 gap-8'>
                <div className='mr-24'>
                    <h2>Customer</h2>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>Invoice Number</label>
                        <input placeholder='Ex: INV001' type='text' {...register("invoiceNumber", {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.invoiceNumber && <span className='text-red-400  block ml-0 '>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600 '>Name</label>
                        <input placeholder='Ex: Loique' type='text' {...register("customer.name", {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.customer?.name && <span className='text-red-400  block ml-0'>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600 '>Email</label>
                        <input placeholder='Ex:nike@gmail.com' type='email' {...register("customer.email", {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.customer?.email && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>Phone</label>
                        <input placeholder='Ex:670-886-288' type='tel' {...register("customer.phone", {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.customer?.phone && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>

                    <h2>Address</h2>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>Street</label>
                        <input placeholder='124 Douala' type='text' {...register('customer.address.street', { required: true })} className='h-8 w-full px-2  py-2 border mt-2'/>
                        {errors.customer?.address?.street && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>City</label>
                        <input placeholder='Ex: Dschang' type='text' {...register('customer.address.city', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.customer?.address?.city && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>State</label>
                        <input  placeholder='Ex: West' type='text' {...register('customer.address.state', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.customer?.address?.state && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>zipCode</label>
                        <input placeholder='Ex: 237' type='text' {...register('customer.address.zipCode', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.customer?.address?.zipCode && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>

                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>Country</label>
                        <input placeholder='Ex: Cameroon' type='text' {...register('customer.address.country', { required: true })} className='h-8 w-full px-2 py-2
                        border mt-2'/>
                        {errors.customer?.address?.country && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>
                </div>


                <div>
                    <div className='flex justify-around items-center'>
                        <h2>Items</h2>
                        <button onClick={handleAddItem} className=' rounded-full text-center text-white h-10 w-10 font-semibold bg-green-600 hover:bg-green-700 py-2 px-2'>+</button>
                    </div>
                    {items.map((item, index) =>(
                        <div key={index}>
                            <div className='justify-center items-center h-14 w-full my-4'>
                                <label className='block text-sm font-normal text-gray-600'> Name</label>
                                <input placeholder='Ex: Apple' type='text' {...register(`items.${index}.name`, {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                                {errors.items?.[index]?.name && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                            </div>

                            <div className='justify-center items-center h-14 w-full my-4'>
                                <label className='block text-sm font-normal text-gray-600'>Quantity</label>
                                <input placeholder='Ex: 2' type='number' {...register(`items.${index}.quantity`, {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                                {errors.items?.[index]?.quantity && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                            </div>

                            <div className='justify-center items-center h-14 w-full my-4'>
                                <label className='block text-sm font-normal text-gray-600'>Price</label>
                                <input placeholder='Ex: 10.0' type='number' {...register(`items.${index}.price`, {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                                {errors.items?.[index]?.price && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                            </div>

                            {/* <div className='justify-center items-center h-14 w-full my-4'>
                                <label className='block text-sm font-normal text-gray-600'>Total</label>
                                <input  type='number' {...register(`items.${index}.total`, {required:true})} className='h-8 w-full px-2 py-2 border mt-2'/>
                                {errors.items?.[index]?.total && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                            </div> */}
                        </div>
                    ))}
                    
                    
                    <h2>Address</h2>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>Street</label>
                        <input type='text' {...register('billingAddress.street', { required: true })} className='h-8 w-full px-2  py-2 border mt-2'/>
                        {errors.billingAddress?.street && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>City</label>
                        <input type='text' {...register('billingAddress.city', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.billingAddress?.city && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>State</label>
                        <input type='text' {...register('billingAddress.state', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.billingAddress?.state && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>zipCode</label>
                        <input type='text' {...register('billingAddress.zipCode', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.billingAddress?.zipCode && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>
                    <div className='justify-center items-center h-14 w-full my-4'>
                        <label className='block text-sm font-normal text-gray-600'>Country</label>
                        <input type='text' {...register('billingAddress.country', { required: true })} className='h-8 w-full px-2 py-2 border mt-2'/>
                        {errors.billingAddress?.country && <span className='text-red-400 block ml-0'>Ce champ est requis</span>}
                    </div>
                </div>
            </div>
            <div className='justify-center items-center h-14 w-full my-4 space-x-4 pt-4'>
                <button  className=' rounded text-white font-semibold bg-green-600 hover:bg-green-700 py-2 px-6'>Create</button>
                <button className='rounded text-white font-semibold bg-red-600 hover:bg-red-700 py-2 px-6'>Clear</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateInvoice
