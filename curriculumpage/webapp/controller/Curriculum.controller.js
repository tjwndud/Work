sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.curriculumpage.controller.Curriculum", {
        onInit() {
             let oModel = new JSONModel("/json/curcul.json");
            this.getView().setModel(oModel);

        }
    });
});