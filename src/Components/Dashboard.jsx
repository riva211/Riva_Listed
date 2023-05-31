import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { BiBell } from 'react-icons/bi';
import { BiHappyAlt } from 'react-icons/bi';


function Dashboard() {
  return (
    <div className=' bg-slate-100 h-screen  grid grid-cols-3 ml-11 '>
        

<div className='col-span-1'>
<aside id="default-sidebar" className="fixed top-2  bottom-2  left-7 z-40 w-60   transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-2  py-4 overflow-y-auto bg-black rounded-xl">
      <div className='p-5 flex justify-start'>
         <span className='text-white font-bold text-3xl '>Board.</span>
      </div>
      <ul className="space-y-2 font-medium pl-4">
         <li>
            <div   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3">Dashboard</span>
            </div>
         </li>
         <li>
            <div   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3">Dashboard</span>
            </div>
         </li>
         <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3">Dashboard</span>
            </div>
         </li>
         <li>
            <div   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3">Dashboard</span>
            </div>
         </li>
         <li>
            <div   className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span className="ml-3">Dashboard</span>
            </div>
         </li>
         
      </ul>
      <span className='text-white self-end'>vuigsw</span>

   </div>
   

</aside>
</div>

<div className=' col-span-3'>
<div className=' pl-5 ml-64  w-[80%] '>
<div className='grid lg:grid-cols-2 lg:p-2 lg:gap-5 '>

   <div className=' grid justify-items-start	'>
   <span className='font-bold	'>Dashboard</span> 
   </div >
   
   <div className=' grid justify-items-end 	'>
      <div className='flex'>
      <input type="text" placeholder='Search' className=' rounded-l-lg p-2  h-[2rem] ' />
     
   <div className="flex items-center justify-center h-[2rem] w-[2rem]  rounded-r-lg bg-white">  
      <CiSearch > </CiSearch>
 </div>
 <div className='p-2 pl-4' > <BiBell/></div>

 <div className='p-2 pl-4' > 
 <BiHappyAlt/>
 </div>


   </div>
   </div>

</div >
<div className='grid lg:grid-cols-4 lg:pb-4   ml-4 '>
<div className="flex items-center justify-center h-[8rem] w-[14rem]  rounded-xl bg-green-100">
            <p className="text-2xl text-gray-400 ">fr3urhui</p>
         </div>
<div className="flex items-center justify-center h-[8rem] w-[14rem]  rounded-xl bg-yellow-100">
            <p className="text-2xl text-gray-400 ">fr3urhui</p>
         </div>
<div className="flex items-center justify-center h-[8rem] w-[14rem]  rounded-xl bg-red-100">
            <p className="text-2xl text-gray-400">fr3urhui</p>
         </div>
<div className="flex items-center justify-center h-[8rem] w-[14rem]  rounded-xl bg-purple-100">
            <p className="text-2xl text-gray-400 ">fr3urhui</p>
         </div>
   


</div>
<div className="flex items-center justify-center ml-4 w-[93%] h-[19rem]  rounded-xl  bg-white">
         <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>

      <div className='grid lg:grid-cols-2 lg:p-3 lg:gap-4 '>
<div className="flex items-center justify-center h-[12rem] w-[32rem]  rounded-xl bg-white">
            <p className="text-2xl text-gray-400 ">fr3urhui</p>
         </div>
<div className="flex items-center justify-center h-[12rem] w-[32rem]  rounded-xl bg-white">
            <p className="text-2xl text-gray-400 ">fr3urhui</p>
         </div>

</div>

</div>

</div>

</div>
  )
}

export default Dashboard