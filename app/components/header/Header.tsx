//@ts-nocheck
import React from 'react'
import Link from 'next/link'

const Header = () => {
  const links = [
    {
      to: '/send-sms',
      label: 'Send Sms',
    },
    {
      to: '/quick-start',
      label: 'Quick start',
    },
    {
      to: '/auth/login',
      label: 'Log In',
    },
  ]
  return (
      <div className="absolute top-0 left-0 w-full flex justify-between items-center text-gray-700 bg-black/20 backdrop-blur back">
        <div className="flex items-center px-8">
          <img src="/robot.svg" alt="Logo" className="w-8"/>
          <h1 className="h-full px-5 font-bold text-2xl">LOGO</h1>
        </div>
        <ul className="flex">
          {
            links.map(link => (
                <li key={link.to} className="py-5 px-5 font-semibold hover:bg-gray-100 hover:text-black duration-500">
                  <Link
                      href={link.to}>
                    {link.label}
                  </Link>
                </li>
            ))
          }
        </ul>
      </div>
  )
}

export default Header