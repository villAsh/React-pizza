import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function Products(){
    const [product,setProduct] = useState([])
    useEffect(()=>{
        // console.log("Product list..",ProductList)
        // console.log(product)
        fetch('https://star-spark-pasta.glitch.me/api/products')
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          setProduct(data);
        })
        
    },[])
    return(
        <div className="md:mx-16 ">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 gap-20 my-6">
              {
                product.map(pList => <ProductCard  key={pList._id} product={pList}/>)
              }
           
            </div>
        </div>
    )
}
export default Products;