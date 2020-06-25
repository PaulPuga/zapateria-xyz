export default {
  createDB: () => {
    if (!localStorage.getItem("user"))
      localStorage.setItem("user", JSON.stringify([]));
    if (!localStorage.getItem("category"))
      localStorage.setItem("category", JSON.stringify([]));
    if (!localStorage.getItem("product"))
      localStorage.setItem("product", JSON.stringify([]));
  },
  getRecordOf: (recordName) => {
    try {
      if (!localStorage.getItem(recordName))
        throw new Error("User record not found");
      return JSON.parse(localStorage.getItem(recordName));
    } catch (error) {
      console.log("DB ERROR: ", error);
    }
  },
  setRecordIn: (recordName, data) => {
    try {
      if (!localStorage.getItem(recordName))
        throw new Error("User record not found");
      localStorage.setItem(recordName, JSON.stringify(data));
      return "success";
    } catch (error) {
      console.log("DB ERROR: ", error);
    }
  },
};
