import React from 'react'
import Link from "next/link";
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className='header'>
      <h1 className='logo'>Home Decor</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/decor">Decor</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart   className='cart-icon'/>
      </nav>
    </header>
  )
}

export default Header;