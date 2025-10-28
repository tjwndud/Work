
var aArray = ["A", "B", "C", "D"];

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day4ui501.controller.Day4_UI501", {
        onInit() {},

        onCheck() {
            let vNum1 = this.getView().byId("num1").getValue();
            var aNumber = [10, 20, 30, 40, 50];
            var vCompare =0;

            //매치 플래그를 사용하여 구현한 코드
            // var Match = false; 

            // for (let num of aNumber) {
            //     if (num == vNum1) {
            //         Match = true;
            //         break; 
            //     }
            // }
            // MessageToast.show(Match ? "Match" : "MisMatch");

            for(let i of aNumber) {
                //일치하는 값 별도의 변수에 저장
                if(vNum1 == i) {
                    vCompare = i;
                    break;
                }
                // if( i == vNum1) {
                //     alert("Match")
                //     MessageToast.show("Match");
                //     break;
                // } else{
                //     alert("MisMatch")
                //     MessageToast.show("MisMatch");
                // }
                //메세지 토스트로는 정상적으로 출력되나 사실 불필요한 반복문이 많고 alert에서는 오작동이 일어난다.
            }

            //메시지 처리
            if(vNum1 == vCompare){
                alert("Match");
            } else {
                alert("MisMatch");
            }
         
        },
        onSum(){

            var vData = [10, 20, 30, 40, 50];

            var oSum=0;
            // var jsum=0;
            
            // for(var j of vData){
            //     jsum += j
                
            // }
            // this.getView().byId("out").setValue(jsum)
            for(var i=0; i<vData.length; i++){
                oSum += vData[i];
            }
            this.getView().byId("out").setValue(oSum);  
            
        },
        onClear(){
             this.getView().byId("out").setValue("");  
        },
        onClick(){
            
            var i=1;
            while (i <= 20) {

            //     switch (i) {
            //         case 2:       
            //             break;
            //         case 5:
            //             break;
            //         case 12:
            //             break;
            //         case 17:
            //             break;
            //         default:
            //              console.log(i);
                
            //             break;
            //     }
            //    i++;

            if(i != 2 && i!=5 && i!=12 && i!=17 )
            {
                console.log(i);
            }
                i++;

            }
        },
        onChange(oEvent){

            let oValue;

            //Get Event Value

            oValue = oEvent.getParameters("value").value;
            MessageToast.show(oValue);

            console.log("key =" ,oValue);

        },
        Input_Check(){
            
            var vVal;

            //Get Input Value
            vVal = this.getView().byId("input2").getValue();

            //Append to Array
            aArray.push(vVal);

            console.log("aArray = ", aArray);


        },
        onShft(){
                aArray.shift();
 
            console.log("aArray = ", aArray);
        },
        onPop(){
            aArray.pop();

            console.log("aArray =" , aArray);
        },
        onLength(){
            // aArray.length = 2 ;

            // console.log("aArray = " , aArray);

            let i = aArray.length;

            for(let index = i; index <= aArray.length; index--) {
                aArray.length = index;
                console.log("aArray = ", aArray);

            }
        },
        onSplice(){
            aArray.splice(1, 2, "Z");//삭제한 위치에 "Z"를 삽입
            console.log("aArray = " , aArray);
        },
        onDel(){
            
            let dArry = this.getView().byId("arr1").getValue();
            let found=false;
            for (let k of aArray) {
               if (k == dArry) {
                console.log("MAtCh");
                found = true;
                break;
                
                // if(k == dArry){
                //     console.log("MAtCh");
                //     break;
                // } else {
                //     cArry = dArry;
                //     aArray.push(cArry);
           
                // }
             }     
        }
        
             if (!found) {
                aArray.push(dArry);
                console.log("aArray =", aArray);
              }
        }

    });
});
