sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
  ],
  (Controller, ODataModel, Filter, FilterOperator, MessageToast) => {
    "use strict";

    return Controller.extend(
      "mentoringcl3.zmentorcl315.controller.ZMentor15_cl3Join",
      {
        onInit() {
          let oModel = new ODataModel("/sap/opu/odata/sap/ZCL3_15_24_DDL_CDS/");
          this.getView().setModel(oModel, "Join");
        },
        goHeader() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteZMentor15_cl3");
        },

        goItem() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteZMentor15_cl3Item");
        },

        Search() {
          var aFilter = [];

          var vbeln = this.getView().byId("vbeln").getValue();
          var posnr = this.getView().byId("posnr").getValue();

          var oTable = this.getView().byId("Table3");

          if (vbeln) {
            aFilter.push(new Filter("vbeln", FilterOperator.Contains, vbeln));
          }
          if (posnr) {
            aFilter.push(new Filter("posnr", FilterOperator.Contains, posnr));
          }
          if (aFilter.length > 0) {
            oTable.getBinding("rows").filter(aFilter); // 필터 적용
          } else {
            MessageToast.show("검색 조건을 모두 입력하세요.");
            oTable.getBinding("rows").filter(); // 필터 해제
          }
        },
      },
    );
  },
);
