sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"

    
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.day8ui502.controller.DAY8_UI502", {
        onInit() {
              let oModel = new JSONModel("/json/profit.json");
            this.getView().setModel(oModel);

        }
    });
});