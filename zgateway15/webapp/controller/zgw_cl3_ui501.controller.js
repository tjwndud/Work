sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, ODataModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.zgateway15.controller.zgw_cl3_ui501", {
      onInit() {},
      onWord() {
        let aFilter = [];

        var vId = this.getView().byId("code").getValue(); // Company Code
        var vyear = this.getView().byId("year").getValue(); // Fiscal Year
        var vDocNum = this.getView().byId("DocNum").getValue(); // Document Number

        if (vId) {
          aFilter.push(new Filter("Bukrs", FilterOperator.EQ, vId));
        }
        if (vyear) {
          aFilter.push(new Filter("Gjahr", FilterOperator.EQ, vyear));
        }
        if (vDocNum) {
          aFilter.push(new Filter("Belnr", FilterOperator.EQ, vDocNum));
        }
        var oTable = this.getView().byId("table");
        oTable.getBinding("rows").filter(aFilter);
      },
    });
  },
);
