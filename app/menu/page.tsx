import React from 'react'

const page = () => {
  return (
    <div className='text-black'>
        <div className='bg-[var(--brown)]'>
            <div className='max-w-11/12 mx-auto '>
                <div className='text-center pb-25 pt-42 '>
                    <h1>Naše menu</h1>
                    <h2>Ochutnejte tradiční českou kuchyni připravenou podle osvědčených receptur z kvalitních surovin.</h2>
                </div>
            </div>
        </div>
        <div className='bg-white pt-15'>
            <div className='max-w-11/12 mx-auto'>
                <h3 className='text-center'>Jídelní lístek</h3>
                <p className='text-center'>Vyberte si z našich specialit</p>
                <div className=''>
                    <div className='flex flex-row justify-center space-x-5'>
                        <button>Předkrmy</button>
                        <button>Polévky</button>
                        <button>Hlavní jídla</button>
                        <button>Dezerty</button>
                        <button>Nápoje</button>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white py-15'>
            <div className='p-5 rounded-lg max-w-11/12 mx-auto bg-[var(--light-brown)]'>
                <h4>Seznam alergenů</h4>
                <ol className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 list-decimal pl-5'>
                    <li>Obiloviny obsahující lepek</li>
                    <li>Korýši</li>
                    <li>Vejce</li>
                    <li>Ryby</li>
                    <li>Arašídy</li>
                    <li>Sójové boby</li>
                    <li>Mléko</li>
                    <li>Skořápkové plody</li>
                    <li>Celer</li>
                    <li>Hořčice</li>
                    <li>Sezamová semena</li>
                    <li>Oxid siřičitý a siřičitany</li>
                    <li>Vlčí bob (lupina)</li>
                    <li>Měkkýši</li>
                </ol>
            </div>
        </div>
        <div className='bg-[var(--light-brown)]'>
            <div className='max-w-11/12 mx-auto py-15'>
                <h5 className='text-center'>Denní menu</h5>
                <p className='text-center'>Nabízíme každý všední den od 11:00 do 14:00</p>
                <div className='bg-white rounded-lg p-5'>
                    <h6 className='text-center'>Polední menu - Úterý 10.5.2025</h6>
                    <div className='py-2'>
                        <p className='py-2'>Polévky</p>
                        <div>
                            <div className='border-b-2 flex my-1 justify-between'>
                                <p>Hovězí vývar s játrovými knedlíčky</p>
                                <p>35 Kč</p>
                            </div>
                            <div className='border-b-2 flex my-1 justify-between'>
                                <p>Hovězí vývar s játrovými knedlíčky</p>
                                <p>35 Kč</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='py-2'>Hlavní jídla</p>
                        <div>
                            <div className='flex border-b-2 justify-between'>
                                <div>
                                    <p>Menu 1: Kuřecí řízek s bramborovou kaší a okurkou</p>
                                    <p>Alergeny: 1, 3, 7</p>
                                </div>
                                <p className='flex items-center'>145 Kč</p>
                            </div>
                            <div className='flex border-b-2 justify-between'>
                                <div>
                                    <p>Menu 1: Kuřecí řízek s bramborovou kaší a okurkou</p>
                                    <p>Alergeny: 1, 3, 7</p>
                                </div>
                                <p className='flex items-center'>145 Kč</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Denní menu se mění každý den. Pro aktuální nabídku nás sledujte na sociálních sítích nebo nás kontaktujte.</p>
            </div>
        </div>
    </div>
  )
}

export default page
