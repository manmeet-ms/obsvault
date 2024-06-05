import React from 'react'

const IconBtnSecondary = (props) => {
  return (
    <div>
        <button className="text-green-400 bg-green-700 bg-opacity-30 py-3 px-6 focus:outline-none rounded-full text-sm ">{props.Text}
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline-block w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      </button>
        
        
    </div>
  )
}

export default IconBtnSecondary


