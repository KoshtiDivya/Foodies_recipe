import React,{useEffect, useState} from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'

export default function MealCard() {
    // console.log(detail)
    const params = useParams();
    console.log("params is" , params)
    const [data, setData] = useState();
    const [msg, setMsg] = useState("");
    useEffect(() => {
        if (params.name) {
            mealData();
        }
    },[])
     const mealData = async () => {
        if ( params.name == "") {
          setMsg("Please Enter Something..");
        } else {
          let getMeal= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`);
          getMeal = await getMeal.json();
          setData(getMeal.meals)
          setMsg("Your Searched Data :")
          }
           
        } 
        // console.log(data)
    return (
        <div className='container-fluid '>
            <h4 className='msg'>{msg}</h4>
             <div className='meals'>
            {!data ? "Data Not Found" :
                data.map((curItem) => {
                    console.log(curItem)
                    return (
                        <div  className='mealImg' >
                            <img src={curItem.strMealThumb} alt="img" />
                            <p>{curItem.strMeal}</p>
                            <NavLink to={`/${curItem.idMeal}/${curItem.strMeal}`}><Button  className='btn-warning'>Recipe</Button></NavLink>
                          
                        </div>
                    )
                })
            }
        </div>
        </div>
       
    )
}
