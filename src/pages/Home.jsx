import React from 'react'
import Banner from '../components/Banner'
import ImagemSection1 from '/img1.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { BsArrowThroughHeartFill } from "react-icons/bs";
import { FaEarDeaf } from "react-icons/fa6";
import { GiSpikedDragonHead } from "react-icons/gi";
import { GiLaserBlast } from "react-icons/gi";

const Home = () => {
  return (
    <>

      <Banner />

      <section className='about w-full h-screen bg-cinza-escuro font-montserrat text-white md:flex flex-row-reverse ' >
        <div className="w-full h-1/2 p-8 text-center flex flex-col justify-between ">
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


      <section className='services w-full h-screen bg-cinza-escuro font-montserrat text-white md:flex flex-row-reverse ' >
        <div className="container m-auto h-full text-center flex flex-col justify-evenly items-center">
          <div className="">
            <h1 className='mb-2' >Nossos Serviços</h1>
            <span className='text-vermelho-claro text-lg'>◆ ◆ ◆</span>
            <p className='font-mantika text-base tracking-wider mt-4'>Técnicas modernas e materiais de alta qualidade, garantindo resultados impecáveis.</p>
          </div>

          <div className="carrousel h-1/2 w-full" >
            <Swiper className='h-full' modules={[Autoplay]} spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true, }} speed={3000} freeMode={true}>

              <SwiperSlide className='px-4 rounded-lg overflow-hidden '>
                <div className="w-full h-full bg-black text-white rounded-md
                flex flex-col justify-center items-center gap-6 ">

                  <BsArrowThroughHeartFill className='text-6xl text-vermelho-claro' />
                  <h3 className='font-gotham uppercase tracking-wider'>Tatuagem</h3>
                  <p>
                    Arte personalizada, feita por artistas que entendem sua visão.
                  </p>

                  <a href="#" className=' bg-vermelho-escuro tracking-wider text-sm text-white uppercase text-center px-4 py-2 mt-6 rounded-md'>
                    Saiba mais
                  </a>
                </div>
              </SwiperSlide>

            </Swiper>

          </div>

          <a href="#" className='w-4/5 bg-vermelho-escuro tracking-wider text-sm uppercase px-4 py-2 rounded-md'>
            Saiba mais
          </a>

        </div>


      </section>

    </>
  )
}

export default Home