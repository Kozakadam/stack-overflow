import React from 'react';
import { Link } from "react-router-dom";

function NavButton({label, path}) {
  return (
    <Link to={path}>
      <li className="inline-flex py-5 px-8 hover:bg-zinc-800">{label}</li>
    </Link>
  );
}

export default NavButton;
