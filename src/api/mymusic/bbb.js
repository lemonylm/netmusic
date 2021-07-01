import request from "@/utils/request.js";
export default {
  test() {
    return request.get("/test");
  },
};
