sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend(
    "mentoringcl3.zmentorcl315.controller.ZMentor15_cl3",
    {
      onInit() {},
      goItem() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteZMentor15_cl3Item");
      },

      goJoin() {
        const oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("RouteZMentor15_cl3Join");
      },
    },
  );
});
