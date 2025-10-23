sap.ui.define([
    "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day1ui501.controller.Day1View01", {
        onInit() {
        },
        onShowHello() {
            //JavaScript alert
            //alert("Hello SAP Code");----경고창으로 문자열 출력

            //UI5 Module
              MessageToast.show("Message toast!!!");
        },
        onCheck() {
            
            let vScore;
            //Get value
            vScore = this.getView().byId("score").getValue();

            console.log(vScore);

            //if를 활용한 점수 구간별 등급 결정
           /* if(vScore >= 90){
                MessageToast.show("grade: A");
            } else if(vScore >= 80) {
                MessageToast.show("grade: B");
            } else if(vScore >= 70){
                MessageToast.show("grade: C");
            } else if(vScore >= 60) {
                MessageToast.show("grade: D");
            } else {
                MessageToast.show("grade: F");
             } */

           switch(vScore / 10){
            case 9:
                MessageToast.show("grade: A");
                break;
            case 8:
                MessageToast.show("grade: B");
                break;
            case 7:
                MessageToast.show("grade: C");
                break;
            case 6:
                MessageToast.show("grade: D");
                break;
            default:
                MessageToast.show("grade: F");
                break;
           }
        }, 
        onFruits(){

            let vChar;

            vChar = this.getView().byId("fruits").getValue();
            console.log

            switch (vChar) {
                case "A":
                    MessageToast.show("Apple");
                    break;
                case "B":
                    MessageToast.show("Banana")
                    break;
                case "C":
                    MessageToast.show("Carrot");
                    break;
            
                default:
                    MessageToast.show("올바른 값을 입력하시오.");
                    break;
            }
             }
    });
});