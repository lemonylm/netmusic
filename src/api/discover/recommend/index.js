import request from "@/utils/request.js";
export default {
  async getHomePage() {
    return request.get('/homepage/block/page');
  },
};
