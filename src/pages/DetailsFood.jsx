import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const DetailsFood = () => {

const {id} = useParams()
const [makanan, setMakanan] = useState([])
const getMakananById = async() => {
const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
);
// console.log(res.data.meals);
setMakanan(res.data.meals)
};

useEffect(() => {
getMakananById();
}, []);

return (
<>
    <div className="countainer">
        {makanan.map((makan, index) => (
        <div key={index.idMeal}>
            <h2 className=' text-center font-bold text-3xl p-5 '>{makan. strMeal}</h2>
            <h2 className=' text-center text-sm'>{makan. strCategory}</h2>
            <h2 className=' text-center text-sm'>{makan. strArea} Food</h2>
            <div className=' flex justify-center '>
                <img src={makan.strMealThumb} alt="makanan" width={200} className=' shadow-2xl rounded-lg mt-5' />
            </div>
            <h2 className=' ml-5 text-2xl font-semibold mt-5'>Instructions</h2>
            <pre className='p-5 whitespace-pre-wrap leading-normal'>{makan.strInstructions}</pre>
            <h2 className=' ml-5 text-2xl font-semibold'>Ingridient</h2>
            <div className="flex flex-col gap-2 p-5">
                <h2 className=' ml-5 text-lg'> {makan. strIngredient1} {makan. strMeasure1}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient2} {makan. strMeasure2}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient3} {makan. strMeasure3}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient4} {makan. strMeasure4}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient5} {makan. strMeasure5}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient6} {makan. strMeasure6}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient7} {makan. strMeasure7}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient8} {makan. strMeasure8}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient9} {makan. strMeasure9}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient10} {makan. strMeasure10}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient11} {makan. strMeasure11}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient12} {makan. strMeasure12}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient13} {makan. strMeasure13}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient14} {makan. strMeasure14}</h2>
                <h2 className=' ml-5 text-lg'> {makan. strIngredient15} {makan. strMeasure15}</h2>
            </div>
            <a target='_blank' href={makan.strSource} className='text-center ml-5 px-4 p-2  text-sm  h-8 rounded-lg bg-sky-400 hover:bg-sky-600 hover:text-white'>
            {
                makan.strSource

                ? makan.strSource
                .split(",")
                .map((link) => `${link.trim()}`)
                .join(", ")
                : "No source available"}
            </a>
            <h2 className='text-sm p-5'>
                {
                makan.strTags

                ? makan.strTags
                .split(",")
                .map((tag) => `#${tag.trim()}`)
                .join(", ")
                : "No tags available"}
            </h2>
            
        </div>
        ))}
    </div>
</>
)
}

export default DetailsFood
