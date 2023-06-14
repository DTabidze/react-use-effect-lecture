import {data} from '../data/data.js'
import Main from "./Main"
import Header from "./Header"
import {useState} from "react"

console.log(data)

function Bakery(){

    const [showCart,setShowCart]=useState(false)
    const [cakes,setCakes]=useState(data)
    const [searchBy,setSearchBy]=useState("")

    function handleShowCart(){
        setShowCart(showCart=>!showCart)
    }

    function handleSearchBy(e){
        setSearchBy(e.target.value)
    }

    function handleLikes(id){
        const updatedCakes=cakes.map(cake=>{
            if(cake.id===id){
                cake.likes++
            }
            return cake
        })
        setCakes(updatedCakes)
    }
    const filteredCakes=cakes.filter(cake=>searchBy==="" || cake.name.toLowerCase().includes(searchBy.toLowerCase()))

    return(
        <>
            <Header handleShowCart={handleShowCart} />
            <Main handleSearchBy={handleSearchBy} showCart={showCart} cakes={filteredCakes} handleLikes={handleLikes} />
        </>
        
    )
}
export default Bakery