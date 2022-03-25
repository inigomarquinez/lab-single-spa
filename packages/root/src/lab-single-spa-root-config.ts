import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@lab-single-spa/navbar",
  app: () => System.import("@lab-single-spa/navbar"),
  activeWhen: ["/"],
  customProps: { domElement: document.getElementById("nav-container") }
});

registerApplication({
  name: "@lab-single-spa/app1",
  app: () => System.import("@lab-single-spa/app1"),
  activeWhen: ["/app1"],
  customProps: { domElement: document.getElementById("app-1-container") }
});

registerApplication({
  name: "@lab-single-spa/app2",
  app: () => System.import("@lab-single-spa/app2"),
  activeWhen: ["/app2"],
  customProps: { domElement: document.getElementById("app-2-container") }
});

start({
  urlRerouteOnly: true,
});
