sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller,MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.day6ui502.controller.Day6_UI502", {
        onInit() {

            let oModel = new JSONModel("/json/center.json");
            this.getView().setModel(oModel);
        }

    });
});