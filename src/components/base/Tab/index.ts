import { App } from "vue";
import Tab from "./Tab";
import TabPanel from "./TabPanel/TabPanel";

Tab.install = function (app: App) {
  app.component(Tab.name, Tab);
  app.component(TabPanel.name, TabPanel);

  return app;
};

export { Tab, TabPanel };
