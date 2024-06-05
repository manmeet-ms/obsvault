import React from 'react'
import * as outlineIcons from '@heroicons/react/24/outline'
import * as solidIcons from '@heroicons/react/20/solid'


let sideBarItems = "flex items-center gap-2 px-6 py-3.5 -ml-1  mb-1 font-medium bg-green-800 bg-opacity-0 rounded-full focus:bg-opacity-100 hover:bg-opacity-50 transition-all duration-500 ease-in-out";

const SideNavItem = (props) => {
  return (
    <>
      <div className="w-1/3 space-y-1">
        <a href="" className={` ${sideBarItems}`}>
          {props.Icon}
          <span> {props.text}</span>
        </a>

      </div>

    </>
  )
}

export default SideNavItem

SideNavItem.defaultProps = {
  text:"General",
  Icon: < outlineIcons.RssIcon  className="w-6 h-6 mr-2 " strokeWidth="2.5" />
};