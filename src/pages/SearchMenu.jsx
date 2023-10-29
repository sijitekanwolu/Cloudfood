import axios from 'axios'
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SearchMenu = ({search, setSearch, setListSearch, listSearch}) => {
const getSearch = async(e) => {
e.preventDefault()

const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

// setSearch(res.data.meals);
setListSearch(res.data.meals);
}

return (
<div>

    <div className="form-search flex">
        <form onSubmit={getSearch}>
            <input type="text" placeholder='Search for the menu you want'
                className='border-sky-900 border p-2 w-96 rounded-lg hover:border-sky-400' value={search}
                onChange={(e)=>
            setSearch(e.target.value)}
            />

            <button type='submit'
                className='bg-sky-400 hover:bg-sky-600 text-white p-2 ml-2  rounded-lg'>Search</button>
        </form>


    </div>

    <div className="list-search flex flex-wrap justify-center">

        {!listSearch ? (
        <h2 className='text-center text-xl font-bold text-red-500 mt-5'>
            ooppsss food not detected...
        </h2>
        ) : (
        <>
            {listSearch.map((menu) => (
            <div className="flex flex-wrap gap-5 justify-center mt-">
                <div key={menu.idMeal} className='w-44 border rounded-lg p-0.5 shadow-gray-500 shadow-lg mt-5'>
                    <img src={menu.strMealThumb} alt='' className='object-cover rounded-lg' />
                    <h2 className='text-center mt-1 font-bold'>{menu.strMeal}</h2>
                    <h2 className='text-center text-sm'>{menu.strCategory}</h2>
                    <h2 className='text-center text-sm'>{menu.strArea} Food</h2>
                    <a href={menu.strYoutube} target='_blank' rel="noreferrer"
                        className='w-100 flex justify-center mt-2 p-3 bg-sky-400
               text-white m-5 rounded-lg transition hover:bg-sky-600 '>Watch
                        tutorials</a>
                    <Link to={`/detail/${menu.idMeal}`} className='ml-2 text-sm hover:text-sky-400'>Click here</Link>
                </div>
            </div>

            ))}
        </>
        )}

    </div>
</div>
)}

export default SearchMenu
