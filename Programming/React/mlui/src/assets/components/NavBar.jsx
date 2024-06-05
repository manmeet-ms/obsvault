import React from 'react'
import Anchor from './Anchor'
import IconBtnSecondary from './IconButton/IconBtnSecondary'
let navlinkstyle= "p-3 bg-green-400 bg-opacity-0 rounded-xl hover:bg-opacity-10 transition-all duration-500 ease-in-out"; 
const NavBar = () => {
  return (
    <div>
<header class="bg-gray-900 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <span class="text-xl">MUI 3 Components</span>
    </a>
    <nav class="md:ml-auto mr-3 flex flex-wrap items-center text-base justify-center">       
    <Anchor href="#" XtraClass={`${navlinkstyle}`} Text="React "/> {/*XtraClass*/}
      <Anchor href="#" XtraClass={`${navlinkstyle}`} Text="Tailwind"/> {/*XtraClass*/}
      <Anchor href="#" XtraClass={`${navlinkstyle}`} Text="Vite"/> {/*XtraClass*/}
    </nav>
<IconBtnSecondary Text="Sign in"/>
  </div>
</header>
    </div>
  )
}

export default NavBar