export interface Products {
  id: number;
  category_id: number;
  product_name: string;
  capacity: number;
  artwork: string;
  listed_price: number;
  price: number;
  quantity: number;
  slug: string;
  discount_value: number;
  sales: number;
}

export interface ImageProduct {
  id: number;
  productdetail_id: number;
  img_url: string;
}
export interface ProductDetail {
  id: number;
  product_id: number;
  color: string;
  quantity: number;
}
export interface ShippingAddress {
  fullname: string;
  email: string;
  address: string;
  phone: string;
}

export interface Reviews {
  id: number;
  product_id: number;
  customer_id: number;
  username: string;
  content: string;
  rate: string;
  create_at: any;
  update_at: any;
}
export const ENV_BE = "http://localhost:8000";
// export const ENV_BE = process.env.REACT_APP_HOST || "http://localhost:8000";

export const convertPriceToVND = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export const dateFormat = (datetime: any) => {
  var date = new Date(datetime);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear().toString();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var formattedDay = day < 10 ? "0" + day : day;
  var formattedMonth = month < 10 ? "0" + month : month;
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  const formattedTime = `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  return formattedTime;
};
