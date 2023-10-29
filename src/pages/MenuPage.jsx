import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import ListCategory from './ListCategory';
import Swiper from 'swiper';
import 'swiper/css';
import SearchMenu from './SearchMenu';
import { Dna } from 'react-loader-spinner';
import ListArea from './ListArea';

const MenuPage = () => {

const [data, setData] = useState([])
const [showMore, setShowMore] = useState(false)
const [loading, setLoading] = useState(true)

const [search, setSearch] = useState("")
const [listSearch, setListSearch] = useState([])

const getData = async() => {
const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)

console.log(res.data.meals);
setData(res.data.meals)
};

useEffect(() => {
getData();
setTimeout(() => {
setLoading(false)
}, 3000)

}, []);

const swiper = new Swiper()

const displayData = showMore ? data : data.slice(0,6);

return (

<section className='menu' id='menu'>
    <br />

    <h2 className='text-3xl ml-14 font-bold '>Explore <span className=' text-sky-400'>Our</span> Menu</h2>

    <section id='search' className='flex flex-col items-center mt-5'>
        <SearchMenu search={search} setSearch={setSearch} listSearch={listSearch} setListSearch={setListSearch} />
    </section>

    <div className="flex flex-col mt-5  justify-center ">
        <ListCategory />
    </div>

    <div className="flex flex-col mt-5  justify-center ">
        <ListArea />
    </div>

    <>
        {loading ? (
        <div className='justify-center flex flex-col items-center h-screen'>
            <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}}
                wrapperClass="dna-wrapper" />
            <h2 className='mt-2'>Loading...</h2>
        </div> ) : (
        <>

            <div className='flex flex-wrap gap-5 justify-center mt-5 '>


                {displayData.map((makanan,index) => (
                <div key={index.idMeal} className=' w-44 border rounded-lg p-0.5 shadow-gray-300 shadow-lg'>
                    {/* gambar makanan */}
                    <img src={makanan.strMealThumb} alt={makanan.strMeal} className='object-cover rounded-lg shadow-xl' />
                    {/* nama makanan */}
                    <p className='text-center mt-1 font-semibold'>{makanan.strMeal}</p>
                    {/* categori makanan */}
                    <p className='text-center text-sm'>{makanan.strCategory}</p>
                    {/* asal makanan */}
                    <h2 className='text-center text-sm'>{makanan.strArea} Food</h2>
                    {/* tutorial youtube */}
                    <a href={makanan.strYoutube} target='_blank' rel="noreferrer"
                        className='w-100 flex justify-center mt-2 p-3 bg-sky-400
                        text-white m-5 rounded-lg transition hover:bg-sky-600 '>Watch
                        tutorials</a>
                    {/* link detail */}
                    <Link to={`/detail/${makanan.idMeal}`} className='ml-2 text-sm hover:text-sky-400'>Click here
                    </Link>
                </div>
                ))}
            </div>

            <div className="flex flex-col justify-center items-center mt-10">
            {showMore? (
                <button onClick={()=> setShowMore(false)} className='w-52 h-10 text-white hover:shadow-lg hover:shadow-gray-300 bg-sky-400 hover:bg-sky-600 rounded-lg'>Show Less</button>
            ) : (
                <button onClick={()=> setShowMore(!showMore)} className='w-52 h-10 text-white hover:shadow-lg hover:shadow-gray-300 bg-sky-400 hover:bg-sky-600 rounded-lg'>Show More</button>
            )}
            </div>
            
        </>
        )}
    </>


</section>




)}

export default MenuPage
