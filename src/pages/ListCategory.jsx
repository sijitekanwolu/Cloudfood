import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const ListCategory = () => {

const [getCategory, setCategory] = useState([])

const getListCategory = async() => {
const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
setCategory(res.data.categories)
}

useEffect(() => {
getListCategory()
}, [])

return (
<>
    <div className="flex flex-wrap justify-center gap-5 rounded-sm ">
        {getCategory.map((i) => (

        <div className="flex justify-center">
            <Link to={`/category/${i.strCategory}`}> 
                <div key={i.idCategory} className='w-16 rounded-lg p-0.5 border-gray-300 border hover:bg-slate-200'>
                   <img src={i.strCategoryThumb} alt="" className='rounded-lg ' />
                   <h2 className='text-center text-[8px]'>{i.strCategory}</h2>
                </div>
           </Link>
        </div>
      ))}
    </div>
</>
)
}

export default ListCategory