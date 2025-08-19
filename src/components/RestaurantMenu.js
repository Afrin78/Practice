import { useParams } from "react-router"
import { useEffect } from "react"

const RestaurantMenu = () => {
    const { id } = useParams()

    useEffect(() => {
        getRestaurauntInfo()
    },[])

    async function getRestaurauntInfo() {
        try {   
            let res = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=10576&catalog_qa=undefined&submitAction=ENTER")
            let data = await res.json()
            console.log("hello",data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards);
            
            console.log(data?.data)
        } catch(error) {
            console.log(error,"error");
        }
    }
    return (
        <>
            <h1>Restaurant Id: {id}</h1>
            <h2>Meghana Foods</h2>
        </>
    )
}

export default RestaurantMenu