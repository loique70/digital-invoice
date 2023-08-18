
import React from 'react'
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateAddressMutation } from './addressApiSlice';

const CreateAddress = () => {

 const [createNewAddress] = useCreateAddressMutation();    
 const {register, handleSubmit, reset, formState:{errors}} = useForm();   
 const navigate = useNavigate();

 const onSubmit = async (data) =>{
    if(!data) return {};
    await createNewAddress(data).unwrap();
    reset({
        street:'',
        city:"",
        state:'',
        zipCode:'',
        country:''  
    });
    console.log(data)
    navigate('/AddressList');
 }  
  return (
    <div className='flex max-w-2xl shadow border-b mx-auto'>
      <div className='px-8 py-8'>
        <div className='font-thin tracking-wider text-2xl'>
            <h1>Create a new Address</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>Street</label>
                <input type='text' {...register("street", {required:true})} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.street && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>City</label>
                <input type='text' {...register("city", {required:true})} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.city && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>State</label>
                <input type='text' {...register("state", {required:true})} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.state && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
        
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>zipCode</label>
                <input type='text' {...register('zipCode', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.zipCode && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
            <div className='justify-center items-center h-14 w-full my-4'>
                <label className='block text-sm font-normal text-gray-600'>Country</label>
                <input type='text' {...register('country', { required: true })} className='h-10 w-96 px-2 py-2 border mt-2'/>
                {errors.country && <span className='text-red-400 ml-3'>Ce champ est requis</span>}
            </div>
           
            <div className='justify-center items-center h-14 w-full my-4 space-x-4 pt-4'>
                <button className='rounded text-white font-semibold bg-green-600 hover:bg-green-700 py-2 px-6'>Create</button>
                <button className='rounded text-white font-semibold bg-red-600 hover:bg-red-700 py-2 px-6'>Clear</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAddress
