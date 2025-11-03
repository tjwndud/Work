sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.day8ui501.controller.Day8_UI501", {
        onInit() {
             let oModel = new JSONModel("/json/Base.json");
            this.getView().setModel(oModel);

            let oModel1 = new JSONModel("/json/Base.json");
            this.getView().setModel(oModel1, "old");
        }

    });
});