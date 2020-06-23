import utils from "./general";

export default {
  createUser: (data) => {
    const user = utils.getRecordOf("user");

    if (!user.find((el) => el.email === data.email)) {
      user.push({ ...data });
      utils.setRecordIn("user", user);
    }
    return "success";
  },
  login: (username, password) => {
    const users = utils.getRecordOf("user");
    if (users.find((el) => el.email === username && el.pass === password)) {
      return "access allowed";
    } else {
      return "user not fond";
    }
  },
  updateUser: () => {
    console.log("updateUser");
  },
  getUser: () => {
    console.log("getUser");
  },
  getUsers: () => {
    console.log("getUsers");
  },
  deleteUser: () => {
    console.log("getUsers");
  },
};
