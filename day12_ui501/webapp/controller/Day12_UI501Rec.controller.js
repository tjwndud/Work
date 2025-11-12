sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/core/routing/History"
], (Controller, History) => {
    "use strict";

    return Controller.extend("code.cl3.day12ui501.controller.Day12_UI501Rec", {
        onInit() {
             var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteDay12_UI501Rec").attachPatternMatched(this.onMatchRoute, this);
        },
        onMatchRoute(oEvent) {
            var vCarrid = oEvent.getParameter("arguments").Carrid;
            var vConnid = oEvent.getParameter("arguments").Connid;

            this.getView().byId("rCarrid").setValue(vCarrid);
            this.getView().byId("rConnid").setValue(vConnid); 
        },
        onBack() {
           
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteDay12_UI501Send", {}, true);
            }
        }
        
    });
});