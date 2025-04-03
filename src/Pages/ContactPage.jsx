import React from 'react'

export default function ContactPage() {
  return (
    <div className='grid grid-cols-2 mx-auto mt-4'>
    <div className='place-items-start px-4'>
      <div className='flex items-center space-x-8 mb-4 border-1 border-gray-300 shadow-2xl rounded-full '>
      <button className='bg-purple-400 px-4 py-3 font-semibold border-1 rounded-full'>
          Success
        </button>
        <input type="text" placeholder='Our Success in Numbers' className='font-bold opacity-70 outline-none'/>
        
       </div>

      <strong className='text-3xl opacity-70'>Have a project in mind? <br />
        Let's talk!</strong>
        <p className='mt-4 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut elit tellus, luctus nec ullamcorper mattis, <br /> pulvinar dapibus leo.</p>

    </div>
    <div>
      <input type="text"placeholder='first Name' className='border-1' />
      <input type="text" placeholder='Last Name' className='border-1' />
    </div>

    </div>
  )
}
