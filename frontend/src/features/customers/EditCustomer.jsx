
import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form';
import {  useGetCustomerByIdQuery, useUpdateCustomerMutation } from './customerApiSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditCustomer = () => {

 const [updateCustomer] = useUpdateCustomerMutation();
 const {register, handleSubmit, reset, formState:{errors}} = useForm();   
 const navigate = useNavigate();
 const {id} = useParams();
  
 const {data: customer} = useGetCustomerByIdQuery(id);
    
 const onSubmit = async (data) =>{
    if(!data) return {};
    await updateCustomer({...data, id}).unwrap();
    
    navigate('/customerList');
 }  
 
 useEffect(() => {
    if (customer) {
      reset(customer);
    }
  }, [customer, reset]);

  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <div className='px-8 py-8'>
        <div className='font-thin tracking-wider text-2xl'>
            <h1>Update a Customer</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'> Name</label>
                <input type='text' {...register("name", {required:true})} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.name && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>Email</label>
                <input type='email' {...register("email", {required:true})} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.email && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>Phone</label>
                <input type='tel' {...register("phone", {required:true})} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.phone && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <h2>Address</h2>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>Street</label>
                <input type='text' {...register('address.street', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.address?.street && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>City</label>
                <input type='text' {...register('address.city', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.address?.city && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>State</label>
                <input type='text' {...register('address.state', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.address?.state && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>zipCode</label>
                <input type='text' {...register('address.zipCode', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.address?.zipCode && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>Country</label>
                <input type='text' {...register('address.country', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.address?.country && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4 space-x-4 pt-4'>
                <button className='rounded text-white font-semibold bg-green-600 hover:bg-green-700 py-2 px-6'>Update</button>
                <button className='rounded text-white font-semibold bg-red-600 hover:bg-red-700 py-2 px-6'>Clear</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default EditCustomer
