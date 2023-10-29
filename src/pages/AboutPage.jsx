import React from 'react'

const AboutPage = () => {
return (
<section className='about py-6 mt-5 h-screen scroll-smooth' id='about'>
    <h2 className='text-3xl text-center font-bold'>About<span className=' text-sky-400'>Us</span></h2>
    <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, reiciendis?</p>
    <div className="flex justify-evenly h-full items-center">
        <div className='w-[800px]'>
            <h2 className='text-5xl font-bold'>FRESH, HEALTHY, ORGANIC,<br /> DELICIOUS FOOD</h2>
            <p className='text-lg mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ad. Quia magni nihil nesciunt nobis facilis delectus. Corrupti quo quos maxime molestiae dicta, illo consectetur rem. Facilis voluptatum veniam autem deleniti quis eaque error maxime amet consequatur necessitatibus vel consectetur, suscipit reprehenderit nemo provident blanditiis. Nam eligendi pariatur deserunt tempora?</p>
                <button className=' bg-sky-400 hover:bg-sky-600 w-32 h-12 rounded-lg mt-5 text-white'>Learn More</button>
        </div>
        <div className="image">
            <img className='w-full' src="/public/makanan.png" alt="gambar rusak" />
        </div>

    </div>
</section>
)
}

export default AboutPage