import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[var(--green-btn)]'>
        <div className='max-w-11/12 mx-auto'>
            <div className='flex flex-row py-10'>
                <div className='flex-1/4'>
                    <h6>Hostinec na Nové</h6>
                    <p>Tradiční česká kuchyně v srdci Hané od roku 1762. Příjemné prostředí pro rodinné oslavy, svatby a firemní akce.</p>
                </div>
                <div className='flex-1/4'>
                    <p>Kontakt</p>
                    <p>Drahanovice 92, 783 43 Drahanovice</p>
                    <p>+420 585 949 482</p>
                    <p>+420 776 224 953</p>
                    <p>hostinecnanove@seznam.cz</p>
                </div>
                <div className='flex-1/4'>
                    <p>Otevírací doba</p>
                    <p>Út – Čt: 11:00 – 21:00</p>
                    <p>Pá – So: 11:00 – 22:00</p>
                    <p>Ne: 11:00 – 20:00</p>
                    <p>Po: Zavřeno</p>
                </div>
                <div className='flex-1/4'>
                    <p>Odkazy</p>
                    <p>Domu</p>
                    <p>Menu</p>
                    <p>Galerie</p>
                    <p>Odkazy</p>
                </div>
            </div>
            <p className='py-10 border-t-2 text-center'>© 2025 Hostinec na Nové. Všechna práva vyhrazena.</p>
        </div>
    </div>
  )
}

export default Footer
