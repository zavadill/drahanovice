import React from 'react'

const Header = () => {
  return (
    <div className='bg-amber-400 h-screen flex items-center'>
        <div className='max-w-11/12 flex flex-col mx-auto text-center text-white space-y-4'>
            <h1 className='text-7xl'>Hostinec na Nové</h1>
            <p className='text-2xl'>Tradiční česká kuchyně v srdci Hané od roku 1762</p>
            <div className='space-x-2'>
                <button className='py-3 px-5 rounded-sm bg-[var(--green-btn)]'>Prohlédnout menu</button>
                <button className='py-3 px-5 rounded-sm bg-white text-[var(--green-btn)]'>Rezervovat stůl</button>
            </div>
        </div>
    </div>
  )
}

export default Header
