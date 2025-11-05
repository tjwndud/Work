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
            // aFilter.push(new Filter("Carrid", FilterOperator.EQ, "AA")); 추가조건 aFilter를 배열로 선언했기때문에 조건 추가 가능
            // 생성자는 max 4개의 인자를 받을 수 있고 위의 코드에서는 3개의 인자를 받았다
            //1.검색하고자하는 대상 필드
            //2.FilterOperator를 이용한 연산자.
            //3.query해서 받아온 검색어
            
                
            }

            //Filter binding 테이블 바인딩 필터
            var oTable = this.getView().byId("table");
            var oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilter);

            //this.getView().byId("airline").getBinding("rows").filter(aFilter); 바인딩 과정을 한줄로 표현한 코드
            
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