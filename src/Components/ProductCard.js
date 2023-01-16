import { Link } from "react-router-dom";

function ProductCard(props) {
    const { name, size, price, image, _id } = props.product;
    return (
        <Link to={`product/${_id}`}>
            <div className="product_card">
                <img src={image} alt={name} />
                <div className="flex flex-col items-center space-y-1">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <h4 className="bg-gray-100 rounded-full px-4 py-1 font-semibold">{size}</h4>
                </div>
                <div className="flex flex-row justify-between font-bold mt-3">
                    <h1 className="text-lg">&#8377; {price}</h1>
                    <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-1 rounded-full">ADD</button>
                </div>
            </div>
        </Link>

    )
}

export default ProductCard;