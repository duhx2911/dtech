export interface Products {
  id: number;
  product_code: string;
  category_id: number;
  productName: string;
  capacity: number;
  color: string;
  artwork: string;
  listed_price: number;
  price: number;
  quantity: number;
  slug: string;
}

export interface ImageProduct {
  id: number;
  productId: number;
  imgUrl: string;
  color: string;
}
export interface ShippingAddress {
  fullname: string;
  email: string;
  address: string;
  phone: string;
}
export const ENV_BE = "http://localhost:8000";
// export const ENV_BE = process.env.REACT_APP_HOST || "http://localhost:8000";

export const convertPriceToVND = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
