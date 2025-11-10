sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.airlinecl3ui502.controller.GWserviceView02", {
        onInit() {
        },
         onWord() {
            
            let aFilter = [];
           
            var vId = this.getView().byId("CID").getValue();
            var vName = this.getView().byId("CI2").getValue();
            
           
            if(vId != '') {
                aFilter.push(new Filter("Carrid", FilterOperator.EQ, vId));
                
            }
            if(vName != '') { 
                aFilter.push(new Filter("Connid", FilterOperator.EQ, vName));
               
            }
            



            if (aFilter.length > 0) {
                this.getView().byId("airline").getBinding("rows").filter(aFilter)
            }
        }
    });
});