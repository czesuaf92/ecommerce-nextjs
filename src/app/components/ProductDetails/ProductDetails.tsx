import { Product } from "app/types/wooCommerce";
import Image from "next/image";
import Price from "../Price/Price";
import AddToCart from "./AddToCart";

interface ProductDetailsProps {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { images, name, on_sale, sale_price, regular_price, short_description, stock_quantity } = product;
  return (
    <div className="lg:flex">
      {
        images[0] && (
          <div className="w-full lg:w-1/2 lg:px-8">
            <Image
              height={0}
              width={0}
              src={images[0].src}
              alt={images[0].alt}
              sizes="100%"
              className="object-contain w-full h-96"
            />
          </div>
        )
      }

      <div className="w-full py-4 lg:w-1/2 lg:px-4 lg:pt-0 lg:flex lg:flex-col">
        <h1 className='text-5xl font-bold lg:mb-6'>
          {name}
        </h1>
        <Price on_sale={on_sale} regular_price={regular_price} sale_price={sale_price} />
        <div dangerouslySetInnerHTML={{ __html: short_description }} className="pt-4 pb-8"></div>
        <div className="mt-auto justify-center flex lg:justify-start">
          <AddToCart maxCount={stock_quantity} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
