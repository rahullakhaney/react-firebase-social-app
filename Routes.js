'use strict';

import Home from 'socialApp/Screens/Home';

class Routes {
  get(route, args) {
    if("undefined" == typeof this[route]) {
      console.warn("No Route Found with Name: + route");
      return false;
    } else {
      return this[route].call(this, args);
    }
  }
  home() {
    return {
      name: "home",
      title: "Social App",
      component: Home,
      leftButton: null,
      rightButton: null,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }
}

export default new Routes()
