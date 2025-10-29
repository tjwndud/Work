let aAirline = ['AA', 'KA' , 'LH', "DL", 'QA' ]

sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
], (Controller,MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day5ui503.controller.Day_UI503", {
        onInit() {
            for(let i =0; i<aAirline.length; i++) {
                if(aAirline[i] == 'KA') {
                    console.log("Korean Air");
                } else if(aAirline[i] == 'DL') {
                    console.log("Delta Air");
                } else if(aAirline[i] == 'QA'){
                    console.log("Qatar Air");
                } else {
                    console.log("Noting");
                }
               
                
            }       
                 console.log("--------------------------");
             for(let i =0; i<aAirline.length; i++) {
                switch(aAirline[i]) {
                    case 'AA':
                        console.log("Amreica Air");
                        break;
                    case 'LH':
                        console.log("Luft Hansa");
                        break;
                    default :
                        console.log("ETC");
                        break;
                }
             }
        },
        onFind(){
            let vNum2;
            vNum2 = this.getView().byId("num2").getValue();

                      for(let i =0; i<aAirline.length; i++) {
                          if(vNum2 == aAirline[i]) {
                            
                       if(aAirline[i] == 'KA'){
                           vNum2 = 'Koran Air';
                        this.getView().byId("num3").getValue(vNum2);
                       } else if(aAirline[i] == 'DL') {
                         vNum2 = 'Delta Air';
                        this.getView().byId("num3").getValue(vNum2);
                       } else if(aAirline[i] == 'QA') {
                        vNum2 = 'Qatar Air';
                        this.getView().byId("num3").getValue(vNum2);
                       } else {
                         MessageToast.show("Nothing");
                       }
                     } 
               
                    }
        },

        onSearch(){
            let id= 'seo2463';
            let pw= '1234';
            let VRes;
            let vPW;
            VRes = this.getView().byId("num1").getValue();
            vPW = this.getView().byId("res1").getValue();
            if(id==VRes && pw == vPW) {
                MessageToast.show(id+"님 반갑습니다.");
            } else if(id != VRes && pw ==vPW) {
                MessageToast.show("아이디가 없습니다.");
            } else if(id == VRes && pw != vPW) {
                MessageToast.show("암호가 틀립니다.");
            } else {
                MessageToast.show("입력하신 id,pw정보가 틀립니다.");
            }
        }
    });
});