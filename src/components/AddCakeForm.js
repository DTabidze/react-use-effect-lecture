import {useState} from "react"

function AddCakeForm({addCake,lastInsertId}){

    const [name,setName]=useState("")
    const [image,setImage]=useState("")
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState(0)

    function handleName(e){
        setName(e.target.value)
    }

    function handleImage(e){
        setImage(e.target.value)
    }

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handlePrice(e){
        setPrice(parseFloat(e.target.value))
    }

    function handleSubmit(e){
        e.preventDefault()
        const newCake={id:lastInsertId,name,price,description,image,likes:0}
        addCake(newCake)
    }

    return(
        <>
            <h2>
                Add Cake
            </h2>
            <form onSubmit={handleSubmit} className="add-cake-form">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" name="name" value={name} onChange={handleName} />
                </div>
                <div>
                    <label for="image">Image:</label>
                    <input type="text" name="image" value={image} onChange={handleImage} />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" name="description" value={description} onChange={handleDescription} />
                </div>
                <div>
                    <label for="price">Price</label>
                    <input type="number" name="price" value={price} onChange={handlePrice} />
                </div>
                <div>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </>
    )
}

export default AddCakeForm;