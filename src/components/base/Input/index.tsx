import { App } from "vue";
import Input from "./Input";

Input.install = function (app: App) {
  app.component(Input.name, Input);

  return app;
};

export default Input;
