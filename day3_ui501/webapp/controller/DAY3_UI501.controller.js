var vGlobal;

sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("code.cl3.day3ui501.controller.DAY3_UI501", {
        onInit() {

             //fot in,of 과제
            
            var gt_kostl = [
	                {
	                    Kostl : "KS1770",
	                    Ktext : "Chemical manage"
	                },
	                {
	                    Kostl : "KS1880",
	                    Ktext : "Natural manage"
	                }
	            	 ];

            for(let k in gt_kostl) {
                console.log("prop=" + k);
                console.log("Array[" + k + "] =", gt_kostl[k]);
            }

            for(let r of gt_kostl) {
                console.log("r = ", r);
                console.log("k.kostl : "+r.Kostl);
                console.log("k.ktext :" +r.Ktext);
            }

            var gt_prctr = [
					      	{
					          Prctr : "PR001",
					          Gtext : "Jongro center"
					      	},
					      	{
					          Prctr : "PR002",
					          Gtext : "Songpa center"
					      	}
					  		 ];

             for(let t in gt_prctr) {
                console.log("prop=" + t);
                console.log("Array[" + t + "] =", gt_prctr[t]);
            }

            for(let y of gt_prctr) {
                console.log("y = ", y);
                console.log("y.Prctr : "+y.Prctr);
                console.log("y.Gtext :" +y.Gtext);
            }

            var gt_data = [ "Apple", "Banana", "Carrot" ];
	
	        var gs_object = 
                {
										City : "Seoul",
										Zone : "Jongro",
										Post : "777"
                };
            

            for(let F in gt_data) {
                console.log("prop=" + F);
                console.log("Array[" + F + "] =", gt_data[F]);
            };

            for(let f of gt_data){  
                console.log(f);
            }

            for(let Z in gs_object){
                console.log("prop=" + Z);
                console.log("Arrary[" + Z + "]=", gs_object[Z]);
            }

            // for(let z of gs_object) {
            //     console.log("z = ", z);
            //     console.log("z.City : "+z.City);
            //     console.log("z.Zone :" +z.Zone);
            //     console.log("z.Post :" +z.Post);
            // };
            //gs_object는 객체이고 []를 추가하여 배열로 만들면 for of를 사용할 수 있다.

            
            var i = 2, j = 1;

            //Multipli table with WHile Loop

            while (i <=9 ) {
           

                while(j <=9 ){
                    console.log(i + "*" + j + "=" ,i*j)
                    j++;
                    
                }
                console.log(i+"단");
                i++;
                j=1;
                     
            }

             //Multipli table with Do WHile Loop
            // while(i < 3) {
            //     console.log("i = " , i);
                
            //     i++;
            // }


        },
         
        onCal() {

            let a, i=1;
        
            a=this.getView().byId("vnum1").getValue();
            //논리 연산자 : OR ( || ), AND( && )
                if ( a<2 || a>=10)   {

                MessageToast.show("Invalid number");
                
            }  else  {
                console.log(a+"단"); 
                    while (i<=9) {
                console.log(a + "*" + i + "="+ a*i );
                   i++;
                
                 }   
              }
              
        },
        onCAL() {

            let b, j=1;

            b = this.getView().byId("dnum1").getValue();
    
            console.log(b+"단"); 
            do {

                if ( b<2 || b>=10)   {

                MessageToast.show("Invalid number");
                
            }  else  {
                
                console.log(b + "*" + j + "="+ b*j );
              }
                      
              j++;

            } while (j<=9);
        },
        onChange(){
            
            var vIcon;

            //Get Button icon
            vIcon = this.getView().byId("btn1").getIcon();

            if(vIcon != '') {

                 this.getView().byId("btn1").setIcon("");


            } else{

                this.getView().byId("btn1").setIcon("sap-icon://accept");
            }

            


        },
        onExchange() {

            var vText;

            //Get Button text : Button <-> Save
            vText = this.getView().byId("btn2").getText();

            // if(vText == "Button") {
            //     this.getView().byId("btn2").setText("Save");
            // } else {
            //     this.getView().byId("btn2").setText("Button");
            // }

            //Switch Case
            switch (vText) {
                case "Button":
                    vText = "Save";
                    
                    break;
            
                default:
                    vText = "Button"
                    break;
            }
            this.getView().byId("btn2").setText(vText);

            
        }
    });
});