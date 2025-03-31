import React from 'react'

export default function RegisterPage() {
  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <form className='w-3/12 border border-gray-200 p-8 space-y-4'>

      <p className='text-3xl font-semibold text-center'>Register</p>
      <div className='flex flex-col'>
        <label htmlFor="Email-address">Email address</label>
        <input type="email" placeholder='Enter your email address' className='border border-gray-300 px-2 py-1 outline-none' />
      </div>
      <div className='flex flex-col'>
        <label htmlFor="User-password">Password</label>
        <input type="password" placeholder='********' className='border border-gray-300 px-2 py-1 outline-none '/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="confirm-User-password">Confirm Password</label>
        <input type="password" placeholder='********' className='border border-gray-300 px-2 py-1 outline-none '/>
      </div>
      <button className='bg-blue-500 px-8 py-1.5 text-white hover:bg-pink-500 duration-500 cursor-pointer'>
        Register
      </button>
      </form>
    </div>
  )
}
