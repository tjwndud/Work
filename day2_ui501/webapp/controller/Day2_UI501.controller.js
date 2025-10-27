sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day2ui501.controller.Day2_UI501", {
       onInit() {
                
            // FOR Loop : Case 1
            for (let i = 1; i <= 3; i++) {
                    console.log("i => " + i);
                    
                    for(let j = 1; j <=5; j++) {
                        console.log("j = "+ j);
                    }
                console.log("----------------");


            };

            //FOR LOOP : Case 2
            var gs_object = {
                major : "SAP",
                Class : "CL3",
                Zone  : "Guro"

            }

            for(let prop in gs_object) {
                console.log("Properties : " + prop);
                console.log("gs_object["+ prop +"] =" + gs_object[prop] );
            };

            //FOR LOOP : Case 3

            var Array = ["A", "B", "C"];

            for(let value of Array) {
                console.log("value = "+ value);
                
            };

            for(let prop in Array) {
                console.log("prop= " + prop);
                console.log("Array[" + prop + "] = "+ Array[prop]);
            };

            var aData = [
                {City : "Seoul" , Class : "CL3" },
                {City : "seoul" , Class : "CL5" },
                {City : "Busan" , Class : "CL7"}

            ];

            for(let i of aData ) {
                console.log("i =", i);
                console.log("i.City ="+i.City);
                console.log("i.Class ="+i.Class );
            } 

        

         },
        onCalcul() {
            
                
            let vNum1, vNum2, vResult;

            //Get input value
            vNum1 = this.getView().byId("num1").getValue();
            vNum2 = this.getView().byId("num2").getValue();
            vResult = parseInt(vNum1) + parseInt(vNum2);

            MessageToast.show(vResult);
            // MessageToast.show(parseInt(vNum1)+parseInt(vNum2));

            
           
        }
    });
});