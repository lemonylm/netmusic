import Vue from "vue";

import {
  Button,
  MessageBox,
  Message,
  Menu,
  Submenu,
  MenuItem,
  Col,
  Row,
  Carousel
} from "element-ui";
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
// Vue.use(Col);
// Vue.use(Row);
Vue.use(Button);
Vue.use(Carousel);

Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
