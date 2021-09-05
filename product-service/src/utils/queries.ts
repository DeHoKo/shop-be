import { Product } from './types/index';

const createSelectAllProductsQuery = () => {
  return 'SELECT * FROM products p LEFT JOIN stocks s ON s.product_id = p.id';
};

const createSelectProductByIdQuery = (id: string) => {
  return `SELECT * FROM products p LEFT JOIN stocks s ON s.product_id = p.id WHERE p.id = '${id}'`;
};

const createInsertProductQuery = (productDesc: Omit<Product, 'id' | 'count'>) => {
  return `INSERT INTO products (title, description, image_url, price) VALUES ('${productDesc.title}', '${productDesc.description}', '${productDesc.image_url}', ${productDesc.price}) RETURNING id`;
};

const createInsertStockQuery = (productId: string, count: number) => {
  return `INSERT INTO stocks (product_id, count) VALUES ('${productId}', ${count})`;
}

export {
  createSelectAllProductsQuery,
  createSelectProductByIdQuery,
  createInsertProductQuery,
  createInsertStockQuery
};