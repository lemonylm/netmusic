import Vue from "vue";

import {
  Button,
  MessageBox,
  Message,
  Radio,
  Menu,
  Submenu,
  MenuItem,
  Col,
  Row,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Carousel,
  CarouselItem,
  Notification
} from "element-ui";
// Vue.use(Menu);
// Vue.use(Submenu);
// Vue.use(MenuItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Button);
Vue.use(Radio);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$notify = Notification;



Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
