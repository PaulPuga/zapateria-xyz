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
};
