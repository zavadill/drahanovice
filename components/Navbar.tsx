'use client';

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 1);
      };
    
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // >>> Přidej tohle volání!
    
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className={`${scrolled ? 'h-17' : 'h-20'} fixed w-full bg-amber-300 transition-all duration-300 `}>
        <div className="max-w-11/12 mx-auto flex justify-between items-center h-full">
            <Link href="/">Hostinec na Nové</Link>
            <div className='flex flex-row space-x-7'>
                <Link href="/">Domů</Link>
                <Link href="/onas">O nás</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/prostory">Prostory</Link>
                <Link href="/akce">Svatby a akce</Link>
                <Link href="/galerie">Galerie</Link>
                <Link href="/kontakt">Kontakt</Link>
                <Link href="/rezervace">Rezervovat</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
