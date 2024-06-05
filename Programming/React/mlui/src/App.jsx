import { useState } from 'react'
import './assets/css/App.css'
import ComponentsDisplayPage from './assets/components/ComponentsDisplayPage.jsx'
import NavBar from './assets/components/NavBar.jsx'
// import Footer from './assets/components/Footer.jsx'

function App() {

  return (
    <>
        <div className='bg-slate-900 text-slate-300 body-font overflow-hidden ' >
          <NavBar/>
          
    <ComponentsDisplayPage/>  
    {/* <Footer/> */}

</div>
    </>
  )
}

export default App


