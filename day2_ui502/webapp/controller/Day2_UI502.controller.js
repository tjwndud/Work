sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day2ui502.controller.Day2_UI502", {
        onInit() {

            let i, j;
            for (i=1; i<=9; i +=2){
                console.log(i+"단"); for(j=1; j <=9; j++) {
                     console.log(i + "*" + j + "=" + i*j );
                 }
            }
            // for (i=2; i<=9; i++) {
            //     console.log(i+"단");
            //     for(j=1; j <=9; j++) {
            //         console.log(i + "*" + j + "=" + i*j );
            //     }
            // }
            
            

        },
        onCal() {
            let Vh1, Vv1, Varea
            Vh1 = this.getView().byId("h1").getValue();
            Vv1 = this.getView().byId("v1").getValue();

            Varea = Vh1 * Vv1;
            Varea = this.byId("area").setText("계산 결과: " + Varea);
           


        }
    });
});