import { App } from "vue";
import Test from "./Test";

Test.install = function (app: App) {
  app.component(Test.name, Test);

  return app;
};

export default Test;
