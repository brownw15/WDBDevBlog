import React from 'react'
import Image from 'next/image'


type Props = {}

const HeroSection = (props: Props) => {
  return (
    <section className='grid grid-cols=1 sm:grid-cols=12 mt-6'>
      <div className='col-span-7 w-full place-self-center text-center sm:text-left justify-self-start'>
        <h1 className='text-3xl sm:text-5xl'>Tech Info for Busy People</h1>
        <button className='text-white bg-indigo-600 px-sm:px-6 sm:py-4 mt-3 py-2 border-2 rounded shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>Browse Articles</button> 
      </div>
      <div className='col-span-5'>
        <Image src="/coffee.png" width={300} height={300} alt="person laying down"/>
      </div>
    </section>
  )
}

export default HeroSection