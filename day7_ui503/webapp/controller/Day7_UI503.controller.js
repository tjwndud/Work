var gv_calcul = '', gv_result = '';

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("code.cl3.day6ui502.controller.TableView", {
        onInit() {


        },

        setNumber(val) {
            if(val == ''){
                gv_calcul = '';
                gv_result = '';
                this.getView().byId("input").setValue("");
                return;
            };

            switch (val) {
                case 'eq':
                    gv_result = eval(gv_calcul);
                    this.getView().byId("input").setValue(gv_result);
                    break;
            
                default:
                    gv_calcul += val;
                    this.getView().byId("input").setValue(gv_calcul);
                    break;
            }
                        
        }
    });
});