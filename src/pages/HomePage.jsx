import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product"
import { Link } from "react-router-dom";
import { VITE_BACKEND_URL } from "../App";

const HomePage = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProducts = async () => {
        try{
           setIsLoading(true); 
           const response = await axios.get(`${VITE_BACKEND_URL}/products`);
           console.log(response.data);
           setProducts(response.data);
           setIsLoading(false);

        } catch (error){
           console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            <div>
            <Link to="/create" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Product
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            
                {isLoading ? (
                    "Loading"
                ) : (
                    <>
                    {products.length > 0 ? (
                        <>

                            {
                                products.map((product, index) => {
                                   return (
                                     <Product key={index} product={product} getProducts={getProducts}/>
                                   )
                                })
                            }
                        </>
                    ) : (
                        <div>
                            There is no product
                        </div>
                    )}
                    
                    </>
                )}
            </div>
        </div>
    )
}


export default HomePage;