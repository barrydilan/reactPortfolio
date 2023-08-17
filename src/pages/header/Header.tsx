import React from 'react'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='bg-blue-300 flex justify-between items-center p-8'>
      <div>
        <h1 className='text-4xl'>
          HH
        </h1>
      </div>
      <Nav></Nav>
    </header>
  )
}
