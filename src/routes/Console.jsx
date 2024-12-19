import React from 'react'
import NavItem from './NavItem/NavItem'
import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout'
const Console = () => {
  return (
   
    <section className="flex ">
    <header className=''>
      <Layout />
    </header>
    <main className='w-full mr-10'>
      <Outlet />
    </main>
     </section>

   
  )
}

export default Console