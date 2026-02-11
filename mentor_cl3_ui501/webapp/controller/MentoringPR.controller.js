sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, ODataModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("cl3mento.mentorcl3ui501.controller.MentoringPR", {
      onInit() {
        var OModel = new ODataModel("/sap/opu/odata/sap/ZCL3_15_19_DDL_CDS/");
        this.getView().setModel(OModel, "Bseg");
      },

      onWord() {
        let aFilter = []; // 필터 조건을 담을 배열 생성

        //  Input 필드에서 값 가져오기
        var vId = this.getView().byId("code").getValue(); // Company Code
        var vyear = this.getView().byId("year").getValue(); // Fiscal Year
        var vDocNum = this.getView().byId("DocNum").getValue(); // Document Number

        //  조건에 따라 필터 생성
        if (vId) {
          aFilter.push(new Filter("bukrs", FilterOperator.EQ, vId));
        }
        if (vyear) {
          aFilter.push(new Filter("gjahr", FilterOperator.EQ, vyear));
        }
        if (vDocNum) {
          aFilter.push(new Filter("belnr", FilterOperator.EQ, vDocNum));
        }

        // 첫 번째 테이블 (Document Header - id: table)
        var oTable1 = this.getView().byId("table");
        oTable1.getBinding("rows").filter(aFilter);

        // 두 번째 테이블 (Document Line Item - id: table2)
        var oTable2 = this.getView().byId("table2");
        oTable2.getBinding("rows").filter(aFilter);
      },
    });
  },
);
