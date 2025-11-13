sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/routing/History"
], (Controller,JSONModel,History) => {
    "use strict";

    return Controller.extend("code.cl3.curriculumpage.controller.Curriculum", {
        onInit() {
             let oModel = new JSONModel("/json/curcul.json");
            this.getView().setModel(oModel);
             var oData = {
                Curriculum: [
                    { Program: "Code Academy 과정", Stage: "JOB FAIR", Duration: 20 },
                    { Program: "Code Academy 과정", Stage: "프로젝트", Duration: 40 },
                    { Program: "Code Academy 과정", Stage: "개발 수업", Duration: 40 },
                   
                ]
            };
            var oModel2 = new JSONModel(oData);
            this.getView().setModel(oModel2, "curr");
        },
        goBack() {
             const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) { //이전화면이 존재한다면 
				window.history.go(-1);// 이전화면으로 돌아가라
			} else {//해당 페이지가 첫 페이지라면 설정항 페이지로 이동한다.
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteCurriculum", {}, true);
			}
        },
        goNext(){
             const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteCurriculum2");
        },
        goHome() {
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("Mainview");
        }
    });
});