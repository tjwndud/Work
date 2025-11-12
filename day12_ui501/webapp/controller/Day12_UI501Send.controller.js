sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code.cl3.day12ui501.controller.Day12_UI501Send", {
        onInit() {
        },
        onSend() {
            
            //Get Input Value
            var vCarrid = this.getView().byId("Carrid").getValue();
            var vConnid = this.getView().byId("Connid").getValue();
            //getView()는 생략 해도 무방

            //Navi to recieve with parameter
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteDay12_UI501Rec",{Carrid : vCarrid, Connid : vConnid});
        }
    });
});