type Product = {
  id: string,
  title: string,
  brand: string,
  color: string,
  material: string,
  weight: number,
  handOrientation: HandOrientation,
  imageUrl: string,
  price: number,
  count: number,
  description: string,
};

enum HandOrientation {
  leftHand = 'Left Hand',
  rightHand = 'Right Hand'
};

enum HttpStatusCode {
  OK = 200,
  NOT_FOUND = 404,
}

export {
  Product,
  HandOrientation,
  HttpStatusCode,
};
