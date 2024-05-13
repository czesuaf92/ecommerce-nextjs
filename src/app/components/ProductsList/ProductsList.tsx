import { Product } from "app/types/wooCommerce";
import Image from 'next/image';
import Link from "next/link";
import { IoBagAddOutline } from "react-icons/io5";

type ProductListItemProps = Pick<Product, 'id' | 'name' | 'price' | 'sale_price' | 'slug' | 'images'>;

const ProductListItem = ({ id, name, price, sale_price, slug, images }: ProductListItemProps) => {
  const productImage = images[0];
  return (
    <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={id}>
      <Link href={`/product/${slug}`}>

        <Image src={productImage.src} alt={productImage.alt} width={200} height={500} className="h-80 w-full object-contain rounded-t-xl" />
        <div className="px-4 py-3 flex flex-col justify-end">
          <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">{`${sale_price === '' ? price : sale_price} zł`}</p>
            {
              sale_price !== '' && (
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">{`${price} zł`}</p>
                </del>
              )
            }
            <div className="ml-auto">
              <IoBagAddOutline size={25} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

type ProductsListProps = {
  products: Product[];
};
const ProductsList = ({ products }: ProductsListProps) => {
  console.log("🚀 ~ ProductsList ~ products:", products);
  return (
    <section id="Products"
      className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5">
      {
        products.map((product) => (
          <ProductListItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.regular_price}
            sale_price={product.sale_price}
            slug={product.slug}
            images={product.images}
          />
        ))
      }
    </section>
  );
};

export default ProductsList;
