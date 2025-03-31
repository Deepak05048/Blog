import React from 'react'

export default function DashboardPage() {
  return (
    <div>
      <div className='w-8/12 mx-auto border-gray-300 p-8 mt-24 space-y-4'>
      <p className='text-3xl font-semibold text-center'>Write News Article</p>
      <div className='flex flex-col'>
        <label htmlFor="title">Title</label>
          <textarea type="text"id='title'placeholder='Enter News Title' className='border border-gray-300 px-2 py-1 outline-none' />
       
      </div>
      <div className='flex flex-col'>
        <label htmlFor="banner">Banner</label>
        <input type="file" id='banner'className='border border-gray-300 px-2 py-1 outline-none'/>
      </div>
      <div className='flex flex-col'>
        <label htmlFor="disciption">Discription</label>
        <textarea type="file" id='banner'className='border border-gray-300 px-2 py-1 outline-none h-80'/>
      </div>

      <button className='bg-blue-500 px-8 py-1.5'>Create Article</button>
        </div>
    </div>
  )
}
