import React from 'react'
import Banner from '../components/Banner'
import ImagemSection1 from '/img1.webp'

const Home = () => {
  return (
    <>

      <Banner />


      <section className='w-screen h-screen bg-cinza-escuro font-montserrat text-white md:flex flex-row-reverse ' >
        <div className="w-full h-1/2 p-8 text-center flex flex-col justify-between">
          <h1 className=' text-white'>Bem vindo ao Saloon</h1>
          <p className='font-mantika text-base text-vermelho-claro tracking-wider'>Com anos de experiência e uma equipe de artistas especializados, garantimos tatuagens que refletem sua personalidade.</p>

          <p className=''>Espaço onde a arte e a expressão pessoal ganham vida, com tatuagens únicas e personalizadas.
            Nossa equipe é composta por artistas experientes, especializados em diversos estilos, como realismo,
            blackwork e minimalista. </p>

          <p className='hidden'>Seguimos rigorosamente as normas de higiene e utilizamos equipamentos modernos
            para garantir segurança e qualidade em cada sessão.</p>

          <a href="#" className='bg-vermelho-escuro tracking-wider text-sm  text-white uppercase text-center px-4 py-2 mt-6 rounded-md'>
            Saiba mais
          </a>
        </div>
        <div className="w-full h-1/2  bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${ImagemSection1})` }}></div>
      </section>

    </>
  )
}

export default Home