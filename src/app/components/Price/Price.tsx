import { Product } from "app/types/wooCommerce";

type PriceProps = Pick<Product, 'on_sale' | 'sale_price' | 'regular_price'>;

const Price = ({ on_sale, sale_price, regular_price }: PriceProps) => {
  const actualProductPrice = on_sale ? sale_price : regular_price;

  return (
    <div className="flex items-center">
      <p className="text-lg font-semibold text-black cursor-auto my-3">{`${actualProductPrice} zł`}</p>
      {
        on_sale && (
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">{`${regular_price} zł`}</p>
          </del>
        )
      }
    </div>
  );
};
export default Price;
