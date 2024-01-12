import React from 'react'
import {Outlet} from 'react-router-dom'
import NavButton from '../NavButton/index.js'
import InputElement from '../InputElement/index.js'

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-10 border-b border-zinc-700 bg-black">
        <ul className="2xl:w:6/12 mx-auto flex w-full content-center pl-0 text-center md:w-11/12 lg:w-10/12 xl:w-8/12">
          <NavButton
            label={'Home'}
            path={''}
          />
          <InputElement id="search" />
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
