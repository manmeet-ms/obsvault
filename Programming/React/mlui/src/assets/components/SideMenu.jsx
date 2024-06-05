import React from 'react'
let sideBarItems= "px-8 py-3 -ml-1  mb-1 font-medium bg-green-800 bg-opacity-0 rounded-full focus:bg-opacity-100 hover:bg-opacity-50 transition-all duration-500 ease-in-out"; 
// configure active state for sidebar items

const SideBar = () => {
  return (
    <div>
      <section className='p-6 bg-slate-800 rounded-2xl' >
        
        <a className='flex pb-6 text-xl'  href="">
        <svg class="inline mt-1 mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
</svg>


Sidebar Title</a>
        {/* icon only btn here (open close)*/}

      <div className="flex flex-col">
      <a href='#' className={`${sideBarItems}`}>Lorem Ipsum</a>
      {/* <div className='border-b border-slate-400 border-opacity-10' ></div> */}
      <a href='#' className={`${sideBarItems}`}>Necessitatibus Accusamus</a>
      {/* <div className='border-b border-slate-400 border-opacity-10' ></div> */}
      <a href='#' className={`${sideBarItems}`}>Iusto Illum</a>
      {/* <div className='border-b border-slate-400 border-opacity-10' ></div> */}
      <a href='#' className={`${sideBarItems}`}>Quaerat Fuga</a>
      {/* <div className='border-b border-slate-400 border-opacity-10' ></div> */}
      <a href='#' className={`${sideBarItems}`}>Fugiat Laudantium</a>

      </div>
  <div class="mt-6 container bg-slate-700 px-5 py-6 rounded-xl">
    <span class="flex justify-between">
      <a class="text-slate-400">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a class="text-slate-400">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="text-slate-400">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="text-slate-400">
        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a class="text-slate-400">
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
      </section>
    </div>
  )
}

export default SideBar
