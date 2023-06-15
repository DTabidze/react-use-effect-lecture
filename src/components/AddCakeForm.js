function AddCakeForm(){
    return(
        <>
            <h2>
                Add Cake
            </h2>
            <form className="add-cake-form">
                <div>
                    <label for="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label for="image">Image:</label>
                    <input type="text" name="image" />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" name="description" />
                </div>
                <div>
                    <label for="price">Price</label>
                    <input type="text" name="price" />
                </div>
                <div>
                    <input type="submit" name="submit" />
                </div>
            </form>
        </>
    )
}

export default AddCakeForm;