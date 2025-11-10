sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.airlinecl3ui501.controller.GWserviceView", {
        onInit() {
            
        },
        onSearch(oEvent){
         
            var aFilter = [];    
             
            var vCond = oEvent.getParameter("query");
            
            if (vCond) {
            
            aFilter.push(new Filter("Carrname", FilterOperator.Contains, vCond));
        
            }
            
            var oTable = this.getView().byId("airline"); 
            var oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilter);
        },
        onWord() {
            let aFilter = [];
            
            var vId = this.getView().byId("CID").getValue();    
            if(vId != '') {
                aFilter.push(new Filter("Carrname", FilterOperator.Contains, vId));
                
            }
            if (aFilter.length > 0) {
                this.getView().byId("airline").getBinding("rows").filter(aFilter)
            }
        }

    });
});