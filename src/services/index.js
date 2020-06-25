import userService from "./user";
import categoryService from "./category";
import general from "./general";
import product from "./product";

export default {
  user: { ...userService },
  category: { ...categoryService },
  general: { ...general },
  product: { ...product },
};
