import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router';

export default function Register() {
  return (
    <>
      <div className='bg-gray-100 h-screen flex items-center justify-center'>
    <div className='bg-white p-8 rounded shadow-md w-96'>
      <h1 className='text-2xl font-bold mb-6 text-center text-blue-900'>Eventix</h1>
      <h1 className='text-xl font-medium mb-6 text-center text-blue-900'>Create your Account</h1>
      <form className='flex flex-col gap-4'>
        <input 
          type="text" 
          placeholder="Full Name"
          className='border border-gray-300 px-2 py-1 rounded'
        />
        <input 
          type="email" 
          placeholder="Email"
          className='border border-gray-300 px-2 py-1 rounded'
        />
        <input 
          type="password" 
          placeholder="Password"
          className='border border-gray-300 px-2 py-1 rounded'
        />
        <button 
          type='submit'
          className='bg-blue-900 text-white cursor-pointer py-2 rounded hover:bg-blue-900'>
          Register
        </button>
      </form>

      <div className='flex items-center my-4'>
        <hr className='flex-grow border-gray-300' />
        <span className='mx-2 text-gray-500'>OR</span>
        <hr className='flex-grow border-gray-300' />
      </div>

      <button 
        className='flex items-center justify-center border cursor-pointer border-gray-300 py-2 rounded hover:bg-gray-100 w-full'>
          <FcGoogle size={20} className='mr-2' />
          Continue with Google
      </button>
      <span className='flex justify-center mt-4'>
        Login to your account?
        <Link to='/' className='underline ml-2 text-blue-900'>Login</Link>
    </span>
    </div>
  </div>
    </>
  )
}
