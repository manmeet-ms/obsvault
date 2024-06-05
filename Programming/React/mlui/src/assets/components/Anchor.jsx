import React from 'react'

const Anchor = (props) => {
  return (
    <div>
        {/* <a className={`text-slate-200 bg-green-500 bg-opacity-10 py-2 px-3 rounded-lg hover:bg-green-500 ${props.XtraClass}`} href={props.href}> {props.Text}</a> */}
        <a className={`
        ${props.XtraClass}`} href={props.href}> {props.Text}</a>
        {/* <a className={`text-slate-200 border-b-2 border-green-500 border-opacity-30 py-1 px-1 mx-3 hover:border-opacity-100 ${props.XtraClass}`} href={props.href}> {props.Text}</a> */}
    </div>
  )
}

export default Anchor