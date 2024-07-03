import { Product } from "app/types/wooCommerce";

export type ProductListItemProps = Pick<Product, 'id' | 'name' | 'price' | 'sale_price' | 'slug' | 'images'>;
