sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/odata/v2/ODataModel"],
  (Controller, ODataModel) => {
    "use strict";

    return Controller.extend(
      "mentoringcl3.zmentorcl315.controller.ZMentor15_cl3Item",
      {
        onInit() {
          let oModel = new ODataModel("/sap/opu/odata/sap/ZGWCL315_08_SRV/");
          this.getView().setModel(oModel, "Item");
        },
        goHeader() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteZMentor15_cl3");
        },

        goJoin() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteZMentor15_cl3Join");
        },
      },
    );
  },
);
