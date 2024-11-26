import React from 'react'
import NavItem from './NavItem/NavItem'
import { Outlet } from 'react-router-dom'

const Console = () => {
  return (
   
    <section className="flex">
    <header>
      <NavItem />
    </header>
    <main>
      <Outlet />
    </main>
     </section>

   
  )
}

export default Console