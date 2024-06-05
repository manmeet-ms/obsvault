import React from 'react'
const Primary = (props) => {
  return (
    <div>
        <button className="text-green-950 bg-green-400 border-2 border-green-400 py-2 px-8 rounded-full text-sm hover:bg-opacity-90 transition-all duration-500 ease-in-out">{props.Text}</button>
        
    </div>
  )
}

export default Primary

