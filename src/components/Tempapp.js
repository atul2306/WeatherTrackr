import React, { useEffect, useState } from "react"
import "./css/style.css"
const Tempapp=()=>{
const [city,setcity]=useState();
const [search,setsearch]=useState();
useEffect(()=>{
    const fetchApi=async()=>{
        const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1fd73c89a50c3578ab7c8d720002a1a6`
        const response=await fetch (url)
        const resJson= await response.json();
        setcity(resJson.main)
    }
  fetchApi();
 
},[search])
    return (
<>

<div className="box">
<div className="myside">
    <h1>Check Weather In your City</h1>
</div>
<div className="inputData">

<input
type="search"
className="inputField"
placeholder="Add City"
value={search}
onChange={(event)=>{
     setsearch(event.target.value) 
}}

/>

</div>
{!city?(
    <p className="errorMsg"> No Data Found</p>)
    :(
        <div>
        <div className="info">
<h2 className="location">
<i className="fas fa-street-view"></i>{search}
</h2>
<h1 className="temp">{city.temp}°Cel</h1>
<h3 className="tempmin_max">Min:{city.temp_min}°Cel | Max: {city.temp_max}°Cel</h3>
</div>
<div className="wave -one"> </div>
<div className="wave -two"> </div>
<div className="wave -three"> </div>
        </div>

)}


</div>
</>
    );
}
export default Tempapp;