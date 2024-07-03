import { Product } from "app/types/wooCommerce";
import Image from "next/image";
import Link from "next/link";
import { IoBagAddOutline } from "react-icons/io5";
import Price from "../Price/Price";

type ProductListItemProps = Pick<Product, 'id' | 'name' | 'regular_price' | 'sale_price' | 'slug' | 'images' | 'on_sale'>;

const ProductListItem = ({ id, name, regular_price, sale_price, slug, images, on_sale }: ProductListItemProps) => {
  const productImage = images[0];

  return (
    <div className="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={id}>
      <Link href={`/products/${slug}`}>

        <Image src={productImage.src} alt={productImage.alt} width={100} height={500} className="h-80 w-full object-contain rounded-t-xl" />
        <div className="px-4 py-3 flex flex-col justify-end">
          <p className="text-lg font-bold text-black truncate block capitalize">{name}</p>
          <div className="flex items-center">
            <Price on_sale={on_sale} regular_price={regular_price} sale_price={sale_price} />
            <div className="ml-auto">
              <IoBagAddOutline size={25} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductListItem;
