
sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/core/routing/History"
], (Controller,History) => {
    "use strict";

    return Controller.extend("code.cl3.day11ui5pmexam.controller.Day11_UI5PmExamSecond", {
        onInit() {
       
        }, goThird(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteDay11_UI5PmExamThird");

        },
         goBack() {
            const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) { //이전화면이 존재한다면 
				window.history.go(-1);// 이전화면으로 돌아가라
			} else {//해당 페이지가 첫 페이지라면 설정한 페이지로 이동한다.
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteDay11_UI5PmExam", {}, true);
			}
        }
 
    });
});