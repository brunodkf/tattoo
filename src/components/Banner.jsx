import React from 'react'
import BannerBG from '/bg2.webp'
import Hero from '/Hero.webp'


const Banner = () => {
  return (
    <section className='w-screen h-screen relative flex items-center bg-center bg-no-repeat bg-cover before-overlay' style={{ backgroundImage: `url(${BannerBG})` }}>
      <div className="container relative z-50 m-auto flex items-center justify-center">

        <div className="flex flex-col items-center justify-between">
          <img className='px-4' src={Hero} alt="Hero Banner" />
          <p className='font-mantika text-lg text-center px-2 text-white'>Realize sua arte com profissionais apaixonados pelo que fazem.</p>
          <a href="#" className='bg-vermelho-escuro tracking-wider text-sm font-bold text-white uppercase text-center px-4 py-2 mt-6 rounded-md'>
            Agende sua visita
          </a>
        </div>

      </div>
      <div className="absolute z-50 bottom-0 w-full text-center mb-24">
        <span className='text-vermelho-escuro border-2 p-2 rounded-2xl text-3xl border-vermelho-escuro'> <b>°</b> </span>
      </div>
    </section>
  )
}

export default Banner