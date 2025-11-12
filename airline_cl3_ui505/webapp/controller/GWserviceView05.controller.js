sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/odata/v2/ODataModel","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, ODataModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.airlinecl3ui505.controller.GWserviceView05", {
        onInit() {
             var OModel = new ODataModel("/sap/opu/odata/sap/ZGWCODE_CL302_SRV/");

            this.getView().setModel(OModel, "flight");

            
        },
        onSearch() {

            let aFilter = [];

            var vId = this.getView().byId("CID").getValue();
            
            if(vId != ''){
                aFilter.push(new Filter("Carrname" , FilterOperator.Contains, vId));
            }

            if(aFilter.length>0) {
                this.getView().byId("airline").getBinding("rows").filter(aFilter);
            }

        

        
        },
        onWord() {

            let aFilter = [];

            var vId = this.getView().byId("CID2").getValue();
            var vCode = this.getView().byId("CID3").getValue();
           
            if(vId != '') {
                aFilter.push(new Filter("Carrid", FilterOperator.EQ, vId));
            }
            if(vCode != '') {
                aFilter.push(new Filter("Connid", FilterOperator.EQ, vCode));
            }

            if(aFilter.length > 0) {

                this.getView().byId("airline2").getBinding("rows").filter(aFilter);
            }
            
            
        }
    });
});