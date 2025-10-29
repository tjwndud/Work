
var aData = ["ALPHA", "BRAVO", "CHARLIE", "DELETA"];

sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day5ui501.controller.Day5_UI501", {
        onInit() {
        },
        onCre(){
              let kArry = this.getView().byId("num1").getValue();
               aData.push(kArry);

               console.log("aArray = " ,aData);


        },

        onDel(){
             let kArry = this.getView().byId("num1").getValue();
                let i;
            for (i = 0; i < aData.length; i++) {
                if (kArry == aData[i]) {
                     aData.splice(i, 1); 
                     break;
                             }
                                }
                console.log("aArray = ",aData);
                      
        },

         onSearch(){
            
            let kArry = this.getView().byId("num1").getValue();
            let vCompare;
            for (let k of aData) {
               if (k == kArry) {
              
                vCompare=k
                break;
             }     
                 }
                 if(kArry == vCompare){
                this.getView().byId("res1").setValue(kArry)
                 } else {
                MessageToast.show("Data Not Found")
                this.getView().byId("res1").setValue("");
                this.getView().byId("num1").setValue("");
                 }
                 
         
        }

    });
});