import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ListArea = () => {

    const [getArea, setArea] = useState([])

    const getListArea = async()=> {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
        setArea(res.data.meals)
    }

    useEffect(() => {
        getListArea()
    }, [])

  return (
    <>
    {/* <div className="title">
        <h2>List Category</h2>
    </div> */}


    <div className="flex flex-wrap justify-center gap-3 rounded-sm ">
        {getArea.map((a) => (

        <div className="flex justify-center">
            <Link to={`/area/${a.strArea}`}> 
                <div key={a.idarea} className='w-20 rounded-lg p-0.5 border-gray-300 border hover:bg-slate-200'>
                   <h2 className='text-center text-sm'>{a.strArea}</h2>
                </div>
           </Link>
        </div>
      ))}
    </div>
</>
  )
}

export default ListArea