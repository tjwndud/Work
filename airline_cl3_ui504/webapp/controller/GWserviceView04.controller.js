sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/odata/v2/ODataModel","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller,ODataModel,Filter,FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.airlinecl3ui504.controller.GWserviceView04", {
        onInit() {
            //다른 서비스 추가.
            var OModel = new ODataModel("/sap/opu/odata/sap/ZGWCODE_CL301_SRV/");

            this.getView().setModel(OModel, "flight");

             var OModel2 = new ODataModel("/sap/opu/odata/sap/ZGWCODE_CL302_SRV/");

            this.getView().setModel(OModel2, "Payments");


        },
        onSearch() {
            let aFilter = [];

            var vId= this.getView().byId("CID").getValue();

              if(vId != '') {
                aFilter.push(new Filter("Carrname", FilterOperator.Contains, vId));
                
            }
            if (aFilter.length > 0) {
                this.getView().byId("airline").getBinding("rows").filter(aFilter)
            }

        },
        onWord() {
             let aFilter = [];
           
            var vId = this.getView().byId("CID2").getValue();
            var vName = this.getView().byId("CID3").getValue();
            
           
            if(vId != '') {
                aFilter.push(new Filter("Carrid", FilterOperator.EQ, vId));
                
            }
            if(vName != '') { 
                aFilter.push(new Filter("Connid", FilterOperator.EQ, vName));
               
            }
            



            if (aFilter.length > 0) {
                this.getView().byId("airline2").getBinding("rows").filter(aFilter)
            }
        
        },
        onClick() {
            let aFilter = [];
           
            var vId = this.getView().byId("CID4").getValue();
            var vName = this.getView().byId("CID5").getValue();
            
           
            if(vId != '') {
                aFilter.push(new Filter("Carrid", FilterOperator.EQ, vId));
                
            }
            if(vName != '') { 
                aFilter.push(new Filter("Connid", FilterOperator.EQ, vName));
               
            }
            



            if (aFilter.length > 0) {
                this.getView().byId("airline3").getBinding("rows").filter(aFilter)
            }
        
        }
    });
});