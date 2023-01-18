import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="container mx-auto flex justify-between items-center p-5">
            <Link to='/'>
                <img src='/images/logo.png' alt="logo" />
            </Link>
            <ul className="flex space-x-5 items-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li>
                    <Link to="/cart">
                        <div className="flex bg-[#F59E0D] py-[6px] px-[12px] items-center rounded-2xl">
                            <span className="text-white">10</span>
                            <img src="/images/cart.png" alt="cart" className="ml-3"/>
                        </div>

                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;