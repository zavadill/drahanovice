import React from 'react'

const Vitejte = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-11/12 mx-auto flex flex-row py-15'>
        <div className='space-y-4'>
          <h3 className='text-4xl text-center'>Vítejte v Hostinci na Nové</h3>
          <p className='text-lg text-center'>Rodinná česká restaurace s bohatou historií od roku 1762</p>
          <p>Hostinec Na Nové je tradiční česká restaurace s bohatou historií sahající až do roku 1762. Nacházíme se v krásném prostředí Hané, v obci Drahanovice, kde nabízíme útulné prostředí, výbornou domácí kuchyni a příjemnou atmosféru.</p>
          <p>Náš hostinec se pyšní nejen svou dlouholetou tradicí, ale také rozmanitými prostory, které jsou vhodné pro různé příležitosti - od rodinných oslav, přes svatby až po firemní akce.</p>
          <div className='flex flex-row space-x-2'>
            <button className='py-3 px-5 rounded-sm bg-white text-[var(--green-btn)] border-2 border-[var(--green-btn)]'>Vice o nás</button>
            <button className='py-3 px-5 rounded-sm bg-[var(--green-btn)] text-white'>Prohlédnout menu</button>
          </div>
        </div>
        <div className=''>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Vitejte
