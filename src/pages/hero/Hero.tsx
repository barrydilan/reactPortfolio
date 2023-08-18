import React from 'react'

export default function Hero() {
  return (
    <section className='mt-24 p-8 flex justify-center flex-col '>
      <h3 className='text-lg'>Hi, my name is</h3>
      <h2 className='text-4xl sm:text-8xl'>Harry Holubiev</h2>
      <h2 className='text-4xl sm:text-8xl'>I am a Frontend Developer</h2>
      <p className='text-lg mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a corrupti pariatur ex aut blanditiis quasi suscipit ab distinctio optio corporis placeat reprehenderit voluptas sequi animi est, possimus sit? Provident.</p>
      <button className='p-8 border-2 border-black mt-6'>Download CV</button>
      <button className='p-8 border-2 border-black mt-6'>Contact Me!</button>
    </section>
  )
}
