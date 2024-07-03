
import Pagination from 'app/components/Pagination/Pagination';
import ProductsList from 'app/components/ProductsList/ProductsList';
import { Product } from 'app/types/wooCommerce';

const fetchProducts = async (): Promise<Product[]> => (
    await fetch('http://localhost:3000/api/products', { next: { revalidate: 1 } }).then((res) => {
        return res.json();
    })
);

const Products = async () => {
    const products = await fetchProducts();

    if (!products) {
        return {
            notFound: true,
        };
    }

    return (
        <div>
            <h1 className='text-5xl font-bold'>
                Produkty
            </h1>
            <ProductsList products={products} />
            <Pagination />
        </div>

    );
};

export default Products;
