// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { App } from "vue";

import * as componets from "./components";
export * from "./components";

export default {
  install(app: App) {
    Object.keys(componets).forEach((key) => {
      const component = componets[key];
      if (component.install) {
        app.use(component);
      }
    });

    return app;
  },
};
