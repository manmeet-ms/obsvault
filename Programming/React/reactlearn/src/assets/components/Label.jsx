import React from 'react'

export const Label = (props) => {
  return (
    <div>
          <label htmlFor="label" className={`h-12 relative block rounded-xl border border-slate-600 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600 ${props.xtraClass}`}>       <input type="text" id="label" className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0" placeholder="label" />       <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-slate-800 p-0.5 text-xs text-slate-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-green-500 peer-focus:text-xs">{props.text}</span></label>
    </div>
  )
}
