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
  Dropdown,
  DropdownMenu,
  DropdownItem,
  
  
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


Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
