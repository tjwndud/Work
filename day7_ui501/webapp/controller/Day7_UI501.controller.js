sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("myapp.controller.Calculator", {
      onInit: function () {
        let oModel = new JSONModel("/json/GsberSet.json");
        this.getView().setModel(oModel);

        let oModel1 = new JSONModel("/json/GsberSet.json");
        this.getView().setModel(oModel1, "Chart");

        let oModel2 = new JSONModel("/json/GsberSet.json");
        this.getView().setModel(oModel2, "Profit");
      },
    });
  }
);
