import utils from "./general";
import short from "short-uuid";

export default {
  createProduct: (data) => {
    const products = utils.getRecordOf("product");
    products.push({ ...data });
    utils.setRecordIn("product", products);
    return "success";
  },
  getAllProducts: () => {
    const products = utils.getRecordOf("product");
    return products;
  },
  getProduct: (productId) => {
    const products = utils.getRecordOf("product");
    const product = products.find((el) => el.id_ === productId);

    return product;
  },
  deleteProduct: (id) => {
    let products = utils.getRecordOf("product");
    products = products.filter((el) => el.id_ !== id);
    utils.setRecordIn("product", products);
  },
  searchProducts: (q) => {
    let products = utils.getRecordOf("product");
    products = products.filter((el) =>
      new RegExp(`(?:${q})`, "ig").test(el.nombre)
    );
    return products;
  },
  editProduct: (id, data) => {
    let products = utils.getRecordOf("product");
    products = products.filter((el) => el.id_ !== id);
    products.push(data);
    utils.setRecordIn("product", products);
    return "success";
  },
};
