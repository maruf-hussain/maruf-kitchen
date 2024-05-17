
const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className="bg-black text-yellow-400 absolute right-0 top-4 mr-6 px-2 rounded">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
               
                <div className="card-actions justify-center">
                    <button className="btn bg-yellow-500 ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;