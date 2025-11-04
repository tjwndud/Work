sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,JSONModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.day9ui502.controller.Day9_UI502", {
        onInit() {
             let oModel1 = new JSONModel("/json/air.json");
            this.getView().setModel(oModel1, "Air");
        },
         onSearch(oEvent) {
                 //전체 검색 구현 연습
            var sQuery = oEvent.getParameter("query");
            
		    this._oGlobalFilter = null;

			if (sQuery) {
				this._oGlobalFilter = new Filter([
					new Filter("Carrid", FilterOperator.EQ, sQuery),
					new Filter("Carrname", FilterOperator.Contains, sQuery),
                    new Filter("Price", FilterOperator.Contains, sQuery),
                    new Filter("Curkey", FilterOperator.EQ, sQuery)
				], false);
                //this. __Filter = new Filter ([], false);는 검색 조건들을 or연산하는 문법 만약 true라면 and연산
                
			}
	         this.byId("table").getBinding("rows").filter(this._oGlobalFilter);
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