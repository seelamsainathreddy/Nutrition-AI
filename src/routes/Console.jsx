import React from 'react'
import NavItem from './NavItem/NavItem'
import { Outlet } from 'react-router-dom'

const Console = () => {
  return (
   
    <section className="flex overflow-x-auto">
    <header>
      <NavItem />
    </header>
    <main className='overflow-x-auto'>
      <Outlet />
    </main>
     </section>

   
  )
}

export default Console