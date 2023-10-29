import React from 'react'
import { useEffect } from 'react';

const scrollHeader = () => {
window.addEventListener('scroll',function(){
const header = document.querySelector('header');
header.classList.toggle("sticky", window.scrollY> 0)
})
}

function Header() {

  useEffect(()=>{
    scrollHeader()
  })
return (
<header className='flex p-6 items-center w-full fixed shadow-2xl'>
  <a href="#" className='font-bold text-3xl text-white'> Cloud<span className=' text-sky-300'>food</span></a>

  <ul className='flex ml-auto gap-10 text-sm mr-10 text-white'>
    <li><a href="#home" className=' hover:text-sky-300'>Home</a></li>
    <li><a href="#about" className=' hover:text-sky-300'>About</a></li>
    <li><a href="#menu" className=' hover:text-sky-300'>Menu</a></li>
    <li><a href="#contact" className=' hover:text-sky-300'>Contact</a></li>

  </ul>

  <button className=' w-20 bg-sky-300 h-10 rounded-lg text-sm text-black hover:text-white hover:bg-sky-600 '>Sign Up</button>

</header>
)
}

export default Header