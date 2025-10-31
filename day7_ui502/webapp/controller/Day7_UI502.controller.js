sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("myapp.controller.Calculator", {

        onInit: function () {
            var oModel = new JSONModel({
                displayValue: "",
                operator: "",
                previousValue: ""
            });
            this.getView().setModel(oModel);

            
        
        },

        onNumberPress(Put) {
            var oModel = this.getView().getModel();
            var sValue = Put.getSource().getText();
            var sDisplay = oModel.getProperty("/displayValue");
            oModel.setProperty("/displayValue", sDisplay + sValue);
        },

        onOperatorPress(Put) {
            var oModel = this.getView().getModel();
            var sOperator = Put.getSource().getText();
            var sDisplay = oModel.getProperty("/displayValue");


            oModel.setProperty("/previousValue", sDisplay);
            oModel.setProperty("/operator", sOperator);
            oModel.setProperty("/displayValue", "");
        },

        onEqualPress() {
            var oModel = this.getView().getModel();
            var sPrev = oModel.getProperty("/previousValue");
            var sCurr = oModel.getProperty("/displayValue");
            var sOperator = oModel.getProperty("/operator");

            

            var nPrev = parseFloat(sPrev);
            var nCurr = parseFloat(sCurr);
            var fResult = 0;

            switch (sOperator) {
                case "+": fResult = nPrev + nCurr; break;
                case "-": fResult = nPrev - nCurr; break;
                case "*": fResult = nPrev * nCurr; break;
                case "/": fResult = nCurr === 0 ? "Error" : nPrev / nCurr; break;
            }

            oModel.setProperty("/displayValue", fResult.toString());
            oModel.setProperty("/previousValue", "");
            oModel.setProperty("/operator", "");
        },

        onClear() {
            this.getView().getModel().setData({
                displayValue: "",
                operator: "",
                previousValue: ""
            });
        }

    });
});
