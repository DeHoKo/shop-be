type Product = {
  id: string,
  title: string,
  description: string,
  image_url: string,
  price: number,
  count: number,
};

enum HttpStatusCode {
  OK = 200,
  NOT_FOUND = 404,
};

export {
  Product,
  HttpStatusCode,
};
