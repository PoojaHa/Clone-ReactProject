import React from 'react'
import "./Sidebaroption.css";

const SideBarOptions = ({active,text, Icon}) => {
    console.log(text,Icon)
  return (
    <div className={`sideoptions ${active && 'sidebar--active'} ` }>
         <Icon/> 
        <h3>{text}</h3>
        
    </div>
  )
}

export default SideBarOptions