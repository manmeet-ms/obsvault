import React from 'react'

const BtnSecondary = (props) => {
  return (
    <div>
        <button className="text-green-400 bg-green-800 bg-opacity-30 py-3 px-8 focus:outline-none rounded-full text-sm  hover:bg-opacity-20 transition-all duration-500 ease-in-out">{props.Text}</button>
        
    </div>
  )
}

export default BtnSecondary


