import React from 'react'
import * as outlineIcons from '@heroicons/react/24/outline'
import * as solidIcons from '@heroicons/react/20/solid'

const BtnPrimary = (props) => {
    return (
        <button onClick={props.event} className={`bg-green-400 inline-flex items-center justify-center rounded-full  px-8 py-3 text-slate-900 ${props.xtraClass}`} >{props.text}</button>
    )
}
const BtnSecondary = (props) => {
    return (
        <>
            <button onClick={props.event} className={`inline-flex items-center justify-center rounded-full bg-green-800 bg-opacity-50 px-8 py-3 text-green-500 transition-all duration-500 ease-in-out ${props.xtraClass}`} >{props.text}</button>
        </>
    )
}
const BtnOutline = (props) => {
    return (
        <button onClick={props.event} className={`inline-flex items-center justify-center rounded-full border-2 border-green-400 px-8 py-3 text-green-400 transition-all duration-500 ease-in-out ${props.xtraClass}`} >{props.text}</button>
    )
}

const BtnIcoPrimary = (props) => {
    let icon = props.Icon;
    console.log(icon);
    return (
        <>
            <button onClick={props.event} className={`bg-green-400 inline-flex items-center justify-center gap-1.5 rounded-full  px-8 py-3 text-slate-900 ${props.xtraClass}`} >{props.text}
                {props.Icon}
            </button>
        </>
    )
}
const BtnIcoSecondary = (props) => {
    return (

        <>
            <button onClick={props.event} className={`inline-flex items-center justify-center gap-1.5 rounded-full bg-green-800 bg-opacity-50 px-8 py-3 text-green-500 transition-all duration-500 ease-in-out ${props.xtraClass}`} >{props.text}{props.Icon}</button>
        </>
    )
}
const BtnIcoOutline = (props) => {
    return (

        <button onClick={props.event} className={`inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-green-400 px-8 py-3 text-green-400 transition-all duration-500 ease-in-out ${props.xtraClass}`} >{props.text}{props.Icon}</button>
    )
}

const Fab = (props) => {
    return (
        <button onClick={props.event} className={`inline-flex items-center justify-center rounded-xl bg-green-400 px-3 py-3 text-slate-800 transition-all duration-500 ease-in-out ${props.xtraClass}`} >{props.Icon}</button>
    )
}


export {
    BtnPrimary,
    BtnSecondary,
    BtnOutline,
    BtnIcoPrimary,
    BtnIcoSecondary,
    BtnIcoOutline,
    Fab
};

BtnPrimary.defaultProps = {
    text: "Button",
}

BtnSecondary.defaultProps = {
    text: "Button",
}

BtnOutline.defaultProps = {
    text: "Button",
}
BtnIcoPrimary.defaultProps = {
    text: "Button",
    Icon: <outlineIcons.ArrowRightIcon className="w-5 h-5"   strokeWidth="2.5"/>
};
BtnIcoSecondary.defaultProps = {
    text: "Button",
    Icon: <outlineIcons.ArrowRightIcon className="w-5 h-5"   strokeWidth="2.5"/>
};
BtnIcoOutline.defaultProps = {
    text: "Button",
    Icon: <outlineIcons.ArrowRightIcon className="w-5 h-5"   strokeWidth="2.5"/>
};
Fab.defaultProps = {
    Icon: <outlineIcons.PencilIcon className="w-5 h-5"  strokeWidth="2.5"/>
};
