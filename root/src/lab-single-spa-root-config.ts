import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lab-single-spa/navbar",
  app: () => System.import("@lab-single-spa/navbar"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@lab-single-spa/app1",
  app: () => System.import("@lab-single-spa/app1"),
  activeWhen: ["/app1"]
});

registerApplication({
  name: "@lab-single-spa/app2",
  app: () => System.import("@lab-single-spa/app2"),
  activeWhen: ["/app2"]
});

start({
  urlRerouteOnly: true,
});
