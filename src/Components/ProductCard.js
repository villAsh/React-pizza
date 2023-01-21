import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";
function ProductCard(props) {
    const { name, size, price, image, _id } = props.product;
    const {cart,setCart} = useContext(CartContext);
    const [added,setAdded] = useState(false);

    const AddToCart = (e, product) =>{
        e.preventDefault();
        let _cart = {...cart};
        if(!_cart.items){
            _cart.items = {};
        }
        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        }else{
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0
        }
        _cart.totalItems += 1;
        setCart(_cart);
        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        },1000);
    }
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
                    <button disabled={added}  onClick={(e) => AddToCart(e, props.product)} className={`${added ? 'bg-green-400' : 'bg-yellow-400'} px-4 py-1 rounded-full`}>{added ? 'ADDED' : 'ADD'}</button>
                </div>
            </div>
        </Link>

    )
}

export default  ProductCard;