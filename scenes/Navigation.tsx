'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Home, FolderGit2, Code2, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation'
import { assets } from '@/assets/asset';


const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Tech Stack', href: '/#tech' },
  { label: 'Contact', href: '/contact' },
];

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) 
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <nav className="fixed top-0 left-0 right-0 z-9999">
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
        }`}>
        <div  className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8 max-w-6xl">
        
          <Link href="/" className="text-2xl font-bold text-black">
            devTemilorun.
          </Link>

          {/* Desktop menu */}
          <ul  className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center gap-2 text-black">
                    {item.label === 'Home' && <Home size={18} />}
                    {item.label === 'Projects' && <FolderGit2 size={18} />}
                    {item.label === 'Tech Stack' && <Code2 size={18} />}
                    {item.label === 'Contact' && <Mail size={18} />}
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>

          {/* Mobile menu button */}

          <Image 
            src={assets.menu_icon}
            alt='nav menu open'
            onClick={() => setShowMobileMenu(true)}
            className="md:hidden cursor-pointer w-8 h-8 transition-colors duration-200"
          />
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            showMobileMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setShowMobileMenu(false)}
        >
          <div
            className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-gray-900 transform transition-transform duration-300 ${
              showMobileMenu ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-6">


              <Image
                src={assets.close_icon}
                alt='nav menu close'
                onClick={() => setShowMobileMenu(false)}
                className="md:hidden cursor-pointer w-8 h-8 transition-colors duration-200"
              />
            </div>

            <ul className="flex flex-col items-center gap-6 mt-10 px-6 text-xl font-medium text-gray-200">
              {navItems.map((item) => (
                <li key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="flex items-center justify-center gap-3 py-3 px-8 w-full text-black hover:bg-gray-100 rounded-lg"
                  >
                    {item.label === 'Home' && <Home size={20} />}
                    {item.label === 'Projects' && <FolderGit2 size={20} />}
                    {item.label === 'Tech Stack' && <Code2 size={20} />}
                    {item.label === 'Contact' && <Mail size={20} />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      
    </nav>
  )
}

export default Navigation