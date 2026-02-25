sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend(
      "code1.cl315.airlinesplit15.controller.SplitView",
      {
        onInit() {},
        onSpfli: function (oEvent) {
          var oData = oEvent.getSource().getBindingContext().getObject(); //선택한 행의 데이터를 가져온다
          let oBinding = this.getView().byId("spfli").getBinding("rows"); //spfli 테이블의 행 바인딩을 가져온다
          let aFilters = [];

          aFilters.push(new Filter("Carrid", FilterOperator.EQ, oData.Carrid));
          oBinding.filter(aFilters);
        },
        onSflight: function (oEvent) {
          //getparamters가 아닌 getparamter이다 s에 유의해야함
          var oData = oEvent.getParameter("rowBindingContext").getObject(); //선택한 행의 데이터를 가져온다
          let oBinding = this.getView().byId("sflight").getBinding("rows"); //sflight 테이블의 행 바인딩을 가져온다
          let aFilters = [];

          aFilters.push(new Filter("Carrid", FilterOperator.EQ, oData.Carrid));
          aFilters.push(new Filter("Connid", FilterOperator.EQ, oData.Connid));
          oBinding.filter(aFilters);
        },
      },
    );
  },
);
