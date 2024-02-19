import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const IndexPage = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts = products.filter((product) => {
        return (
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory === "" || product.category === selectedCategory)
        );
    });

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Welcome to Our Store</h1>
                <div>
                    <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded">
                        Login
                    </Link>
                    <Link to="/home" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Admin
                    </Link>
                </div>
            </div>
            <div className="container flex mx-auto mb-6 items-center">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search products"
                    className="border border-gray-300 rounded-md p-2 mr-4 focus:outline-none focus:border-blue-500"
                />
                </div>
                <div className="container flex mx-auto mb-6 items-center">
                <div className="flex items-center">
                    <span className="mr-4">Filter by Category:</span>
                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="form-select mr-4 bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="">All</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="books">Books</option>
                    </select>
                </div>
                </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {isLoading ? (
                    <div className="text-center">Loading...</div>
                ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white shadow-md p-2 rounded-md transition duration-300 hover:shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                            <div className="text-xl font-semibold mb-2 text-gray-800">{product.name}</div>
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
