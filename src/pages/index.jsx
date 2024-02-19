import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const IndexPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${VITE_BACKEND_URL}/products`);
            setProducts(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Welcome to Our Store</h1>
                <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {isLoading ? (
                    <div className="text-center">Loading...</div>
                ) : products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="bg-white shadow-md p-4 rounded-md">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                            <div className="text-xl font-semibold mb-2">{product.name}</div>
                            <div className="text-gray-500 mb-2">Price: ₵{product.price}</div>
                            <div className="text-gray-500">Quantity: {product.quantity} Available</div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">No products found.</div>
                )}
            </div>
        </div>
    );
};

export default IndexPage;
