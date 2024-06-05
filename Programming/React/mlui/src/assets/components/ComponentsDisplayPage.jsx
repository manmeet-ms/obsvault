import React from 'react'
import BtnPrimary from './Buttons/BtnPrimary'
import BtnOutline from './Buttons/BtnOutline'
import BtnSecondary from './Buttons/BtnSecondary'
import Card from './Card'
import SideMenu from './SideMenu'


const ComponentsDisplayPage = () => {
  return (
    <>
    <div>
    <section>
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-800">
    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
        <div className="md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2">Button</h2>
          <div className="flex justify-around mt-6">
          <BtnPrimary Text ='Primary'/>
          <BtnSecondary  Text='Secondary'/>
          <BtnOutline  Text='Outline'/>
          </div>
          
        </div>
      </div>
      
    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
        <div className="md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2">Card</h2>
          <div className="md:flex mt-6">
            <Card Subtitle='' Title='Title Lorem' Description='Paragraph - Lorem ipsum dolor sit amet elit. Natus  corporis officia impedit, totam unde deleniti odit. Vitae.' Redirect='Redirect' Img='https://source.unsplash.com/random/?data,cyber'/>
            <Card Subtitle='' Title='Title Lorem' Description='Paragraph - Lorem ipsum dolor sit amet elit. Natus  corporis officia impedit, totam unde deleniti odit. Vitae.' Redirect='Redirect' Img='https://source.unsplash.com/random/?ai,ml'/>
            {/* <Card Subtitle='' Title='Title Lorem' Description='Paragraph - Lorem ipsum dolor sit amet elit. Natus  corporis officia impedit, totam unde deleniti odit. Vitae.' Redirect='Redirect' Img='https://source.unsplash.com/random/?rgb,mouse'/> */}
          </div>
          
        </div>
      </div>
      
    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
        <div className="md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2">Sidebar</h2>
          <div className="flex mt-6">
            <SideMenu/>
          </div>
          
        </div>
      </div>
      
    <div className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
        <div className="md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-white title-font mb-2">Field</h2>
          <div className="flex mt-6">
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default ComponentsDisplayPage