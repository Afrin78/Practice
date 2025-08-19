import RestoCard from "./RestoCard";
import { resList } from "../constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    const fildata = restaurants.filter((restaurant) => 
        restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return fildata;
}

const Body = () => {
    const [searchText, setSearchText] = useState("")
    const [allRestaurants, setAllRestaurants] = useState([])
    const [filterdRestaurants, setFilteredRestaurants] = useState([])

    useEffect(() => {
      getRestaurants()
    }, [])

    async function getRestaurants() {
      let res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let data = await res.json()
      console.log(data);
      setAllRestaurants(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurants(data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(filterdRestaurants !== allRestaurants) 
    //   return <h1>Restaurant you filterd not found!!!</h1>
    
  return (allRestaurants.length === 0) ? 
  <Shimmer /> :
  (
    <>
      <div className="search">
        <input type="text"
        placeholder="Search"
        className="search-input"
        value={searchText}
        onChange={(e) => {
            setSearchText(e.target.value)
        }}  
        />
        <button className="bttn"
         onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data)
         }}>
            Search
        </button>
      </div>
      <div className="resto-container">
        {filterdRestaurants.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  ); 
};

export default Body;
