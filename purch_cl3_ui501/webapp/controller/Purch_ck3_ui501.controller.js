sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, ODataModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend(
      "cl3.purch.purchcl3ui501.controller.Purch_ck3_ui501",
      {
        onInit() {
          var OModel = new ODataModel("/sap/opu/odata/sap/ZCL3_15_21_DDL_CDS/");
          this.getView().setModel(OModel, "flight");
        },

        onWord() {
          let aFilter = []; // 필터 조건을 담을 배열 생성

          var vId = this.getView().byId("type").getValue();
          if (vId != "") {
            aFilter.push(new Filter("bsart", FilterOperator.EQ, vId));
          }

          this.getView().byId("table").getBinding("rows").filter(aFilter);
        },
      },
    );
  },
);
