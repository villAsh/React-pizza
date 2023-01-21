
import { useEffect, useContext, useState } from "react";
import { CartContext } from "../CartContext";
function Cart() {
    let total = 0;
    const [products, setProducts] = useState([]);
    const { cart, setCart } = useContext(CartContext);
    const [isFetch, setIsFetch ] = useState(false)
    // console.log(cart)
    useEffect(() => {
        if (!cart.items) {
            return;
        }
        if(isFetch){
            return;
        }
        fetch('https://star-spark-pasta.glitch.me/api/products/cart-items',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ids: Object.keys(cart.items) })
            }).then(res => res.json())
            .then(data => {
                // console.log(data)
                setProducts(data);
                setIsFetch(true);
            })
    }, [cart]);
    const getQty = (productId) =>{
        return cart.items[productId];
    }
    const Add = (productId) => {
        const preVal = cart.items[productId];
        const _cart = {...cart};
        _cart.items[productId] = preVal + 1;
        _cart.totalItems += 1;
        setCart(_cart);
    }

    const Remove = (productId) => {
        const preVal = cart.items[productId];
        if(preVal === 1){
            return;
        }
        const _cart = {...cart};
        _cart.items[productId] = preVal - 1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }

    const getSum = (productId ,productPrice) => {
        const sum = productPrice * getQty(productId);
        total += sum;
        return sum;
    }
    const Delete = (productId) => {
        const _cart = {...cart};
        const qty = _cart.items[productId];
        delete _cart.items[productId];

        _cart.totalItems -= qty;

        setCart(_cart);

        const UpdatedProducts = products.filter((product) => {
            return product._id !== productId;
        });
        setProducts(UpdatedProducts);
    }

    const handlePlaced = () =>{
        window.alert("Order placed Successfully.....");
        setProducts([]);
        setCart({});
    }
    return (
        <div className="container mx-auto w-full lg:w-1/2 pb-20">
            <h1 className="my-12 font-bold">Cart Items</h1>
            <ul>
                {products.map(product => {
                    return( <li key={product._id}>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={product.image} alt={product.name} className="h-16" />
                                <span className="font-bold ml-4 md:w-48">{product.name}</span>
                            </div>
                            <div>
                                <button onClick={() => Remove(product._id)} className="bg-yellow-400 px-4 py-2 rounded-full leading-none font-bold"> - </button>
                                <b className="px-2">{getQty(product._id)}</b>
                                <button  onClick={() => Add(product._id)} className="bg-yellow-400 px-4 py-2 rounded-full leading-none font-bold "> + </button>
                            </div>
                            <span className="font-bold">  &#8377; { getSum(product._id, product.price)}</span>
                            <button onClick={() => {Delete(product._id)}}  className="bg-red-500 px-4 py-2 rounded-full leading-none text-white font-bold">DELETE</button>
                        </div>
                    </li>
                    );
                })}


            </ul>
            <hr className="my-5" />
            <div className="text-right">
                <b>Grand Total  : &#8377;</b>{total}
            </div>
            <div className="font-bold text-right mt-5">
                <button onClick={handlePlaced}  className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Place Order</button>
            </div>
        </div>
    )
}

export default Cart;