import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export const Wrapper = (props) => {
 
    
  return (
    <div>
        <Navbar mode ={props.mode} changemode = {props.changeMode}  />
        <Outlet />
    </div>
  )
}
