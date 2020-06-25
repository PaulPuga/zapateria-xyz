import utils from "./general";
import short from "short-uuid";

export default {
  getAllCategories: () => {
    try {
      if (!utils.getRecordOf("category")) {
        throw new Error("there are not categories");
      }
      const categories = utils.getRecordOf("category");
      return categories;
    } catch (error) {
      console.log(error);
    }
  },
  createCategory: (name) => {
    const categories = utils.getRecordOf("category");
    categories.push({ id: short.generate(), name });
    utils.setRecordIn("category", categories);
    return "success";
  },
  editCategory: (id, name) => {
    let categories = utils.getRecordOf("category");
    // const element = categories.find((el) => el.id === id);
    categories = categories.filter((el) => el.id !== id);
    categories.push({ id, name });
    console.log(categories);
    utils.setRecordIn("category", categories);
    document.location.reload();
    // return "success";
  },
  deleteCategory: (id) => {
    let categories = utils.getRecordOf("category");
    // const element = categories.find((el) => el.id === id);
    categories = categories.filter((el) => el.id !== id);
    utils.setRecordIn("category", categories);
    document.location.reload();
    // return "success";
  },
};
