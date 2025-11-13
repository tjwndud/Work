sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/routing/History"
], (Controller,JSONModel,History) => {
    "use strict";

    return Controller.extend("code.cl3.curriculumpage.controller.Curriculum2", {
        onInit() {
               // Process Flow 데이터 모델 생성
            const oData = {
                nodes: [
                    {
                        id: "T1",
                        laneId: "L1",
                        title: "UX 1 - UI5 Programming",
                        abbr: "UX1",
                        children: ["T2"],
                        state: "Positive",
                        stateText: "완료됨",
                        texts: ["10월 ~ 11월"]
                    },
                    {
                        id: "T2",
                        laneId: "L2",
                        title: "ABAP 1 - Foundation & Screen",
                        abbr: "ABAP1",
                        children: ["T3"],
                        state: "Critical",
                        stateText: "진행중",
                        texts: ["11월 ~ 12월"]
                    },
                    {
                        id: "T3",
                        laneId: "L3",
                        title: "ABAP 2 - Report & OOP",
                        abbr: "ABAP2",
                        children: ["T4"],
                        state: "Positive",
                        stateText: "예정",
                        texts: ["12월 ~ 1월"]
                    },
                    {
                        id: "T4",
                        laneId: "L4",
                        title: "ABAP 3 - CDS & HANA",
                        abbr: "ABAP3",
                        children: ["T5"],
                        state: "Neutral",
                        stateText: "예정",
                        texts: ["1월 "]
                    },
                    {
                        id: "T5",
                        laneId: "L5",
                        title: "UX 2+3 - Gateway & Fiori",
                        abbr: "UX2+3",
                        children: ["T6"],
                        state: "Neutral",
                        stateText: "예정",
                        texts: ["2월"]
                    },
                    {
                        id: "T6",
                        laneId: "L6",
                        title: "Project - ABAP + UI5",
                        abbr: "PROJ",
                        children: ["T7"],
                        state: "Neutral",
                        stateText: "예정",
                        texts: ["3월 ~ 7월 중순"]
                    },
                    {
                        id: "T7",
                        laneId: "L7",
                        title: "JOB FAIR & 수료식",
                        abbr: "JOB",
                        state: "Neutral",
                        stateText: "예정",
                        texts: ["7월 15일"]
                    }
                ],

                lanes: [
                    { id: "L1", icon: "sap-icon://lesson", label: "UX1", position: 0 },
                    { id: "L2", icon: "sap-icon://database", label: "ABAP1", position: 1 },
                    { id: "L3", icon: "sap-icon://syntax", label: "ABAP2", position: 2 },
                    { id: "L4", icon: "sap-icon://source-code", label: "ABAP3", position: 3 },
                    { id: "L5", icon: "sap-icon://sap-ui5", label: "UX2+3", position: 4 },
                    { id: "L6", icon: "sap-icon://project-definition", label: "프로젝트", position: 5 },
                    { id: "L7", icon: "sap-icon://employee", label: "JOB FAIR", position: 6 }
                ]
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
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
        }


    });
});