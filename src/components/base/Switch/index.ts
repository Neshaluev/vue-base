import { App } from "vue";
import Switch from "./Switch";

Switch.install = function (app: App) {
  app.component(Switch.name, Switch);

  return app;
};

export default Switch;
