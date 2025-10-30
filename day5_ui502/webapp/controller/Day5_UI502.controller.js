sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.day5ui502.controller.Day5_UI502", {
      onInit() {
        // set data model on view
        //   const oData = {
        // recipient : {
        //    name : "World"
        // }

        //Make JSON Model
        let oData = {
          inputSet: {
            value: "JSON Value",
            holder: "JSON Place Holder",
            width: "250px",
            desc: "JSON Description",
          },

          buttonSet: {
            text: "JSON Text",
            icon: "sap-icon://check-availability",
            type: "Accept",
          },

          ainputSet: {
            value: "Production Plan",
            description: "PP 모듈",
            width: "250px",
          },

          binputSet: {
            value: "Controlling",
            description: "CO 모듈",
            width: "250px",
          },

          cinputSet: {
            value: "Human Resource",
            description: "HR 모듈",
            width: "250px",
          },

          dinputSet: {
            headerText: "UI5 Pannel",
            width: "300px",
            height: "400px",
          },
        };

        let oData2 = {
          panelSet: {
            header: "UI5 JSON Header",
            width: "40%",
            height: "150px",
          },
        };
        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        const oModel2 = new JSONModel(oData2);
        this.getView().setModel(oModel2, "panel");
      },
      //  const oModel = new JSONModel(oData);
      //  this.getView().setModel(oModel);
      // },
      // onShow(){

      //     MessageToast.show("Hello World!");
      // }
    });
  }
);
