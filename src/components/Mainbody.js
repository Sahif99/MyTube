import React from 'react'
import Sidebody from './Sidebody'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const Mainbody = () => {
  return (
    <div className='flex'>
        <Sidebody/>
        <Outlet/>

    </div>
  )
}

export default Mainbody