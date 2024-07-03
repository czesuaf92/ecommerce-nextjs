import ProductDetails from "app/components/ProductDetails/ProductDetails";
import { Product } from "app/types/wooCommerce";

interface ProductPageProps {
  params: {
    slug: string;
  };
};

const fetchProductDetails = async (slug: string): Promise<Product[]> => (
  await fetch(`http://localhost:3000/api/products/${slug}`, { next: { revalidate: 1 } }).then((res) => {
    return res.json();
  })
);

const ProductPage = async ({ params }: ProductPageProps) => {
  const [product] = await fetchProductDetails(params.slug);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductPage;
