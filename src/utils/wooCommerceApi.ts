import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const wooApi = new WooCommerceRestApi({
  url: "http://localhost/wordpress",
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY || "",
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET || "",
  version: "wc/v3"
});
