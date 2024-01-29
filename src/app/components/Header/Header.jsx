'use client'

import Image from 'next/image';
import Navbar from './Navbar';
export default function Header() {
  function showMenu() {
    const navbar = document.getElementById('navbar');
    const iconMenu = document.getElementById('icon-menu');

    navbar.classList.toggle('hide-menu');
    iconMenu.classList.toggle('sm:bg-close');
  }

  return (
    <header className="sm:py-8 sm:px-4 sm:flex sm:items-center sm:justify-between">
      <Image width={121} height={33} src="./images/logo.svg" alt="Logo da marca Shortly."></Image>
      
      <Navbar />

      <div onClick={() => showMenu()} id="icon-menu" className='sm:w-6 sm:h-5 sm:bg-hamburger sm:bg-no-repeat sm:bg-center sm:bg-cover sm:transition-all'/>
    </header>
  );
}
