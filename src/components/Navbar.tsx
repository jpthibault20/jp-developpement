"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import JPLogo from "@/components/JPLogo"

export default function Navbar({ activePage }: { activePage: string }) {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Accueil", path: "/" },
    { title: "Services", path: "/services" },
    { title: "Developpeurs", path: "/developer" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="w-full md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <JPLogo />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"
            }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              item.title === activePage ? (
                <li key={idx} className="text-gray-600 font-bold hover:text-indigo-600">
                  <Link href={item.path} tabIndex={0} aria-label={item.title}> {item.title}</Link>
                </li>
              ) : (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <Link href={item.path} tabIndex={0} aria-label={item.title} >{item.title}</Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}