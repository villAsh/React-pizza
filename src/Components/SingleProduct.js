import { useState, useEffect,memo } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleProduct(){
    const [product, setProduct] = useState({})
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
        .then(response => response.json())
        .then(data =>{
            setProduct(data)
        })
    },[params._id])
    return(
        <div className="container mx-auto px-6">
            <button className="text-xl font-bold mt-8" onClick={() => navigate(-1)}>Back</button>
            <div className="mt-10 flex">
                <img src={product.image} alt={product.name}/>
                <div className="flex flex-col mx-5 space-y-2">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <h3 className="font-semibold">{product.size}</h3>
                    <h3 className="text-lg font-semibold">&#8377; {product.price}</h3>
                    <button className="font-bold bg-yellow-500 px-8 py-2 rounded-full">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default memo(SingleProduct);