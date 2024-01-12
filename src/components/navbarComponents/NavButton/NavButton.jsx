import React from 'react'
import {Link} from 'react-router-dom'

function NavButton({label, path}) {
  return (
    <Link to={path}>
      <li className="inline-flex px-8 py-5 hover:bg-zinc-800">{label}</li>
    </Link>
  )
}

export default NavButton
