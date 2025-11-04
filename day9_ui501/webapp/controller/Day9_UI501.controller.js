sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,JSONModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.day9ui501.controller.Day9_UI501", {
        onInit() {
            var oData = {
                chartSet : [
                    {Age : "10", Answer : "25.5"},
                    {Age : "20", Answer : "30.1"},
                    {Age : "30", Answer : "20.0"},
                    {Age : "40", Answer : "10.5"},
                    {Age : "50", Answer : "4.9"},
                    {Age : "60", Answer : "9.0"}
                ]
            }
                 

            let oModel = new JSONModel(oData);
              this.getView().setModel(oModel);
                 
            let oModel1 = new JSONModel("/json/air.json");
            this.getView().setModel(oModel1, "Air");
            
           
            	
			    


        },
        	
	
        onSearch(oEvent) {
              
            //Build search condition 검색 조건 배열 준비
            var aFilter = [];    
            //Get search word 사용자가 입력한 검색어 추출
            var vCond = oEvent.getParameter("query");
            //Set search condition
            if (vCond) {
            //Put to Array search condition 검색 조건

            
            aFilter.push(new Filter("Carrname", FilterOperator.Contains, vCond));
            // aFilter.push(new Filter("Carrid", FilterOperator.EQ, "AA"));
            
                
            }

            //Filter binding 테이블 바인딩 필터
            var oTable = this.getView().byId("table");
            const oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilter);

        },
        onWord() {
            
            let aFilter = [];
            //Get search word
            var vId = this.getView().byId("id").getValue();
            var vName = this.getView().byId("name").getValue();
            
            //Build search condition by case
            if(vId != '') {
                aFilter.push(new Filter("Carrid", FilterOperator.EQ, vId));
            }
            if(vName != '') { 
                aFilter.push(new Filter("Carrname", FilterOperator.Contains, vName));
            }
            



            if (aFilter.length > 0) {
                this.getView().byId("table").getBinding("rows").filter(aFilter)
            }
        }
    });
});