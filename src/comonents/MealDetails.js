import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'


export default function MealDetails() {
    const [meal, setMeal] = useState();
    const params = useParams();
    console.log(params.id)
    const getInfo = async () => {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        response = await response.json();
        // console.log(response);
        setMeal(response.meals[0]);
        console.log(meal)
    }
    useEffect(() => {
        if (meal != "") {
            getInfo()
        }
    }, [])
    return (
        <div className='meal-details'>
            {
                !meal ? <p style={{ textAlign: "center" }}>Data Not Found</p> :
                    <div className='mealInfo'>
                        <h1>Recipe Detail</h1>
                        <div>
                            <img src={meal.strMealThumb} height="300px" />
                            <div className='info'>
                                <button>{meal.strMeal}</button>
                                <h3>Instruction's</h3>
                                <p>{meal.strInstructions}</p>
                                <NavLink to="/"><button>Back</button> </NavLink>

                            </div>
                        </div>
                    </div>

            }
        </div>


    )
}
