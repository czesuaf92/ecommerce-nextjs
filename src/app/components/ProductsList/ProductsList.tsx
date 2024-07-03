import { Product } from "app/types/wooCommerce";
import ProductListItem from "./ProductListItem";

interface ProductsListProps {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <section id="Products"
      className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">
      {
        products.map((product) => (
          <ProductListItem
            key={product.id}
            id={product.id}
            name={product.name}
            regular_price={product.regular_price}
            sale_price={product.sale_price}
            slug={product.slug}
            images={product.images}
            on_sale={product.on_sale}
          />
        ))
      }
    </section>
  );
};

export default ProductsList;
