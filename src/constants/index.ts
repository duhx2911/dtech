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
  discount_value: number;
  sales: number;
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

export interface Reviews {
  id: number;
  id_product: number;
  id_customer: number;
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
