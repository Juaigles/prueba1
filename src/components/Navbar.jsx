import React from 'react'
import Toddle from './Toddle'

const Navbar = ({theme}) => {
  return (
    <nav className={`w-94 h-16  display: flex justify-center items-center cursor-pointer `} onClick={null}>
        <div className={`overflow-hidden flex-1`}>
            <img src={`/assets/images/logo-${theme}-theme.svg`} alt=""  className={`h-7 `}  />
        </div>
      <Toddle />
    </nav>
    
  )
}

export default Navbar