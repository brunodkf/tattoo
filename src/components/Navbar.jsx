import React from 'react'
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import Logo from '/logo_tattoo.webp'

export const Navbar = () => {
  return (
    <nav className='w-screen p-2 absolute top-0 z-50'>
      <div className="container m-auto flex items-center justify-between">
        <img className='max-w-28' src={Logo} alt="Logo" />

        <ul>
          <li className='text-5xl text-vermelho-claro pr-2'>
            <IoMenu />
          </li>
        </ul>
      </div>
    </nav>
  )
}
