type Product = {
  id: string,
  title: string,
  description: string,
  imageUrl: string,
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
