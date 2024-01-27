'use client'

import Image from 'next/image';
import Navbar from './Navbar';
export default function Header() {
  function showMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('hide-menu');
  }

  return (
    <header className="sm:py-8 sm:px-4 sm:flex sm:items-center sm:justify-between">
      <Image width={121} height={33} src="./images/logo.svg" alt="Logo da marca Shortly."></Image>
      
      <Navbar />

      <Image onClick={() => showMenu()} width={25} height={18} className="sm:pointer" src="./images/icon-hamburger.svg" alt="Ícone do menu móvel."></Image>
    </header>
  );
}
