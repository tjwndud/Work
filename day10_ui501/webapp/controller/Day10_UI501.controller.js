sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,JSONModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.day10ui501.controller.Day10_UI501", {
        onInit() {
            var oData = 
                {
                    kostlSet : [
                        {kostl : "KS001", ktext : "Guro center", kstar : "0098638431"},
                        {kostl : "KS002", ktext : "Jongro center", kstar : "0097638432"},
                        {kostl : "KS003", ktext : "Songpa center", kstar : "0096638433"},
                        {kostl : "KS004", ktext : "Gangnam center", kstar : "0095638434"},
                        {kostl : "KS005", ktext : "Seocho center", kstar : "0093638435"}
                    ]
                };
           
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
            
        },
        onSearch(oEvent) {

           

            var vCond = oEvent.getParameter("query");

             this.aFilter =null;


            if(vCond) {
                // aFilter.push(new Filter("kstar", FilterOperator.Contains, vCond));
                // Search 필드에서 kstar만 검색하는 기능

                this.aFilter = new Filter([
                    new Filter("kostl", FilterOperator.EQ, vCond),
                    new Filter("ktext", FilterOperator.Contains, vCond),
                    new Filter("kstar", FilterOperator.Contains, vCond)
                ], false);
                 // Search 필드에서 kostl, ktext, kstar 모두 검색하는 기능

            }
           
            var oTable = this.getView().byId("table");
            var oBinding = oTable.getBinding("rows");
            oBinding.filter(this.aFilter);
        },
        onCheck(){
             let aFilter = [];
            
            var vId = this.getView().byId("id").getValue();
            var vName = this.getView().byId("name").getValue();
            
            
            if(vId != '') {
                aFilter.push(new Filter("kostl", FilterOperator.EQ, vId));
            }
            if(vName != '') { 
                aFilter.push(new Filter("ktext", FilterOperator.Contains, vName));
            }
            



            if (aFilter.length > 0) {
                this.getView().byId("table").getBinding("rows").filter(aFilter)
            }
        }

    });
});