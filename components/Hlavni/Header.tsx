import React from 'react'

const Header = () => {
  return (
    <div className='bg-amber-400 h-screen flex items-center'>
        <div className='max-w-11/12 flex flex-col mx-auto text-center'>
            <h1 className='text-7xl'>Hostinec na Nové</h1>
            <p className='text-2xl'>Tradiční česká kuchyně v srdci Hané od roku 1762</p>
            <div>
                <button>Prohlédnout menu</button>
                <button>Rezervovat stůl</button>
            </div>
        </div>
    </div>
  )
}

export default Header
