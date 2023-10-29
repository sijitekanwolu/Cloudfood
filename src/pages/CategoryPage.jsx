import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Dna } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'

const CategoryPage = () => {

const [list, setList] = useState([])

const [loading, setLoading] = useState(true)

const {makanan} = useParams()

useEffect(() => {
const getList = async()=> {
const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${makanan}`)

setList(res.data.meals)
};

getList();
setTimeout(() => {
setLoading(false)
}, 3000)


}, []);

return (
<div className="flex flex-col items-center">
    <h2 className='mt-5 font-bold text-2xl'><span className='text-sky-400'>C</span>atagory
        {location.pathname.split(`/category/`)}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, sint!</p>

    <>
        {loading ? (
        <div className='justify-center flex flex-col items-center h-screen'>
            <Dna visible={true} height="80" width="80" ariaLabel="dna-loading" wrapperStyle={{}}
                wrapperClass="dna-wrapper" />
            <h2 className='mt-2'>Loading...</h2>
        </div> ) : (
        <>

            <div className="flex flex-wrap gap-5 justify-center mt-5">
                {list.map((li) => (
                <div key={li.idMeal} className='w-44 border rounded-lg p-0.5 shadow-gray-500 shadow-lg'>
                    <img src={li.strMealThumb} alt='' className='object-cover rounded-lg' />
                    <h2 className='text-center mt-1 font-bold'>{li.strMeal}</h2>
                    <a href={li.strYoutube} target='_blank' rel="noreferrer"
                        className='w-100 flex justify-center mt-2 p-3 bg-sky-400
               text-white m-5 rounded-lg transition hover:bg-sky-600 '>Watch
                        tutorials</a>
                    <Link to={`/detail/${li.idMeal}`} className='ml-2 text-sm hover:text-sky-400'>Click here</Link>
                </div>

                ))}
            </div>
        </>
        )}
    </>

</div>
)
}

export default CategoryPage
