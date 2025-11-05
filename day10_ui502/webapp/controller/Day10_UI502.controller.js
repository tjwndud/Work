sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/core/routing/History"
], (Controller,History) => {
    "use strict";

    return Controller.extend("code.cl3.day10ui502.controller.Day10_UI502", {
         onInit() {
        },
        goSecond(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteDay10_UI502Second");

        },
         goBack() {
            const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) { //이전화면이 존재한다면 
				window.history.go(-1);// 이전화면으로 돌아가라
			} else {//해당 페이지가 첫 페이지라면 설정한 페이지로 이동한다.
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteDay10_UI502", {}, true);
			}
        }
    });
});