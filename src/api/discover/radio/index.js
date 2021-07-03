import request from "@/utils/request.js";
export default {
    async getHeaderCategory() {
        return request.get('/dj/category/recommend')
    },
    async getPlyList() {
        return request.get('/program/recommend')
    },
    async getRdiList() {
        return request.get('/dj/subscriber?id=335425050')
    },


};
