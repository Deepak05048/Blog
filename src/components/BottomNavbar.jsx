import React from 'react'
import { Send } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { NavLink } from "react-router";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'



export default function BottomNavbar() {
   const [isOpen, setIsOpen] = React.useState(false)

   const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
}





  return (
   <div className='bg-white shadow-xl h-16 flex items-center'>
     <div className='w-11/12 md:w-8/12 mx-auto flex items-center justify-between'>
      <div>logo</div>
      <div className='hidden lg:block'>     
         <div className='flex items-center gap-6 text-gray-700'>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <NavLink to="/join-us">
        <button className='flex items-center gap-1 bg-pink-500 px-8 py-2 rounded-md text-white  hover:bg-black duration-500 cursor-pointer'><Send size={16} />Join Us</button></NavLink>
        <Search />

       



        

        
      </div>
      </div>
      <div className='block md:hidden'>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div>Hello World</div>
            </Drawer>
        </div>
    </div>

   </div>
  )
}
