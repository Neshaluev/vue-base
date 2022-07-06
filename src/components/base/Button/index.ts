// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { App } from "vue";
import Button from "./button";

Button.install = function (app: App) {
  app.component(Button.name, Button);

  return app;
};

export default Button;
