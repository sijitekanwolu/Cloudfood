import React from 'react'
import Header from '../components/Header'
import MenuPage from './MenuPage'
import AboutPage from './AboutPage'
import Footer from '../components/Footer'







function HomePage() {

  return (
    <>
    <Header/>
    <section className='bg-home h-screen w-100 ' id='home'>
        <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-5xl font-bold text-center text-white'>PREMIUM AND AUTHENTIC <br /> <span className=' text-sky-300'>COOKING</span>  FROM THE <br /> EXPERTS</h2>
            <p className='text-white text-lg text-center mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut libero voluptatem. Magni commodi ipsa quas, <br /> ducimus iste accusamus vero ad error exercitationem quam nam?</p>
            <a href='#menu' className=' bg-sky-300 hover:bg-sky-600 mt-4 py-3 px-5 rounded-lg text-black hover:text-white'>Explore Our Menu</a>
        </div>
    </section>
    <AboutPage/>
    <MenuPage/>
    <Footer/>
    </>
    
  )
}

export default HomePage