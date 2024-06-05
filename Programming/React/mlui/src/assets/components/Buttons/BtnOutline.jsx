import React from 'react'

const BtnOutline = (props) => {
  return (
    <div>
        <button className="text-green-400 bg-transparent border-2 border-green-400 border-opacity-100 py-2 px-8 focus:outline-none rounded-full text-sm font-normal  hover:border-opacity-80 transition-all duration-500 ease-in-out">{props.Text}</button>
        
    </div>
  )
}

export default BtnOutline


