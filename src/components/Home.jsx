import React from 'react'
import { Hero, CustomerReviews, Subscribe } from '../sections'

function Home() {
  return (
    <>
    <section className='xl:padding-l wide:padding-r padding-b'>
    <Hero />
    </section>

    <section className='bg-pale-blue padding'>
    <CustomerReviews />
    </section>

    <section className='padding-x sm:py-32 py-16 w-full'>
    <Subscribe />
    </section>

    </>
  )
}

export default Home