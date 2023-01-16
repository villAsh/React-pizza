import Products from "../Components/Products";

function Home(){
    return(
        <>
              <div className="hero py-12">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2 flex flex-col items-start space-y-1">
                    <h6 className="text-xl font-normal">Are you hungry?</h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Don't Wait</h1>
                    <button className="bg-[#F59E0D] hover:bg-yellow-600 rounded-full text-white px-6 py-2">Order Now</button>
                </div>
                <div className="w-1/2">
                    <img  src="/images/pizza.png" alt="hero" />
                </div>
            </div>
        </div>
        <Products />
        </>
      
    )
}
export default Home;