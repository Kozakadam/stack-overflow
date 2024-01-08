import React from 'react';
import { Outlet } from "react-router-dom";
import NavButton from "../components/NavButton";
import InputElement from "../components/InputElement";

function Navbar() {
  return (
    <>
      <div className="sticky bg-black border-b border-zinc-700">
        <ul className="mx-auto md:w-4/6 lg:w-3/6 w-full  flex content-center text-center pl-0">
          <NavButton label={"Home"} path={""}/>
          <NavButton label={"Profile"} path={"profile"}/>
          <InputElement id="search"/>
        </ul>
      </div>
      <Outlet/>
    </>
  );
}

export default Navbar;
