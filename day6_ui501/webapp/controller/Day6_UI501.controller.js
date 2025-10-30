sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.day5ui502.controller.Day5_UI502", {
      onInit() {
        let qData = {
          airlineSet: [
            {
              Aircd: "AA",
              Airline: "American airline",
              Url: "http://www.aa.com",
              Curr: " USD",
            },
            {
              Aircd: "KA",
              Airline: "Koran airline",
              Url: "http://www.koreanair.com",
              Curr: " KRW",
            },
            {
              Aircd: "LH",
              Airline: "Luft hanza",
              Url: "http://www.lufthanza.com",
              Curr: " EUR",
            },
          ],
        };

        let oData = {
          labelSet: {
            text: "Json Label",
            width: "100px",
            vAlign: "Bottom",
          },

          inputSet: {
            value: "JSON Article title",
            holder: "JSON Place holder",
            width: "270px",
            desc: "JSON Description",
          },

          buttonSet: {
            text: "confirm",
            type: "Accept",
            press: "onClick",
            icon: "sap-icon://check-availability",
          },
        };

        let oData2 = {
          panelSet: {
            header: "UI5 JSON Header",
            width: "700px",
            height: "400px",
          },
        };

        const oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        const oModel2 = new JSONModel(oData2);
        this.getView().setModel(oModel2, "panel");

        //Import JSON Model form file
        var oModel3 = new JSONModel("/data/jui5.json");
        //Set JSON model
        this.getView().setModel(oModel3, "file");

        var oModel4 = new JSONModel("/data/data1.json");
        this.getView().setModel(oModel4, "getfile");

        var oModel5 = new JSONModel(qData);
        this.getView().setModel(oModel5, "air");
      },

      onArray() {
        let lt_data = [
          { Id: "Alpha", Pw: "12345" },
          { Id: "Bravo", Pw: "abcde" },
          { Id: "Charlie", Pw: "qwert" },
        ];

        for (let value of lt_data) {
          console.log("value = ", value);
          for (let property in value) {
            console.log(
              "property",
              property,
              "value[" + property + "]",
              value[property]
            );
          }
        }
      },
    });
  }
);
