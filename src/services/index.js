import userService from "./user";
import general from "./general";

export default {
  user: { ...userService },
  general: { ...general },
};
