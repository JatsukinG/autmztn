//@ts-nocheck
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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

const quickstartLinks = [
  {
    to: '/ruth-hurwitz/absolute',
    label: 'Ruth Hurwitz Absolute',
  },
  {
    to: '/ruth-hurwitz/relative',
    label: 'Ruth Hurwitz Relative',
  },
  {
    to: '/jury/absolute',
    label: 'Jury Absolute',
  },
  {
    to: '/jury/relative',
    label: 'Jury Relative',
  },
  {
    to: '/digital-process',
    label: 'Digital Process',
  },
]

const Header = () => {
  const router = useRouter()
  const [showDropDown, setShowDropDown] = useState(false)

  const handleClick = () => setShowDropDown(!showDropDown)

  const handleClickOption = (link) => router.push(link)

  return (
      <div
          className="absolute top-0 left-0 w-full flex justify-between items-center text-gray-700 bg-black/20 backdrop-blur back z-50">
        <div className="flex items-center px-8">
          <img src="/robot.svg" alt="Logo" className="w-8"/>
          <h1 className="h-full px-5 font-bold text-2xl">LOGO</h1>
        </div>
        <ul className="flex">
          {
            links.map(link => ((link.to === '/quick-start') ?
                    <li key={link.to} className="relative py-5 px-5 font-semibold hover:bg-gray-100 hover:text-black duration-500" onClick={handleClick}>
                      <button>
                        {link.label}
                      </button>
                      {
                          showDropDown &&
                          <div className="absolute top-full left-0 flex flex-col bg-gray-100 w-full text-xs">
                            {
                              quickstartLinks.map(quickstartLink=>(
                                  <button
                                      key={quickstartLink.to}
                                      className="text-left py-2 px-2 hover:bg-blue-400 hover:cursor-pointer"
                                      onClick={()=>handleClickOption(quickstartLink.to)}>
                                    {quickstartLink.label}
                                  </button>
                              ))
                            }
                          </div>
                      }
                    </li> :
                    <li key={link.to}
                        className="py-5 px-5 font-semibold hover:bg-gray-100 hover:text-black duration-500">
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