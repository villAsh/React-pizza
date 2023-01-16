import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductList from "./ProductList";
function SingleProduct(){
    const [product, setProduct] = useState({})
    const params = useParams();
    useEffect(()=>{
        setProduct(ProductList.params)
    },[])
    console.log(product)
    return(
        <div className="container mx-auto px-6">
            <h1 className="text-xl font-bold mt-8">Back</h1>
            <div className="mt-10 flex">
                <img src="/images/peproni.png" alt="peproni"/>
                <div className="flex flex-col mx-5 space-y-2">
                    <h1 className="text-xl font-bold">Peproni</h1>
                    <h3 className="font-semibold">Small</h3>
                    <h3 className="text-lg font-semibold">price 500</h3>
                    <button className="font-bold bg-yellow-500 px-8 py-2 rounded-full">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;