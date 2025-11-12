sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code.cl3.day12ui501.controller.Day12_UI501", {
        onInit() {
        },
        onBegin() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteDay12_UI501Send");
        }
    });
});