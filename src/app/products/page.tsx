
import React, { Suspense } from 'react';
import { wooApi } from 'utils/wooCommerceApi';
import ProductsList from './_components/ProductsList';

const getProducts = async () => {
    try {
        const response = await wooApi.get("products");
        if (response.data) {
            return response.data;
        }

        throw new Error(`ERROR: ${response.statusMessage}`);
    } catch (error) {
        console.error("🚀 ~ getProducts ~ error:", error);
    }
};

const Products = async () => {
    const products = await fetch('http://localhost:3000/api/products').then((res) => res.json());

    if (!products) {
        return {
            notFound: true,
        };
    }

    return (
        <div>
            <h1 className='text-5xl'>

                Products
            </h1>


            <Suspense fallback={<div>Loading...</div>}>
                <ProductsList products={products} />
            </Suspense>
        </div>

    );
};

export default Products;
