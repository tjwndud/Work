sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("code.cl3.day11ui5amexam.controller.DAY11_UI5AMexam", {
        onInit() {
             this.vData = [10, 20, 30, 40, 50]; //vData배열 생성
        },
        onFor() {       //for문을 사용한 구구단 출력
            var i , j;  //구구단의 단 수를 변수 i로 선언 곱할수를 j로 선언
            for (i = 2; i<=9; i++) { 
                //시험 문제의 조건이 2단부터 시작하기 때문에 i=2로 정의 9단까지 출력하기위해 2부터 9까지 범위 설정
                //아래 조건을 수행한후 i를 1씩 증가
                console.log(i+"단"); //구구단 출력전에 현재 단수를 console에 알려줌
                for(j=1; j<=9; j++) { 
                    //중첨 for문으로 i가 증가하는 for문 안에 j가 증가하는 for문이중첩 
                    //i가 1씩 증가하기전에 j는 1부터 9까지의 범위에서의 코드를 실행 ex) i=2 일때 j=1,2,3,4,5,6,7,8,9일때를 모두 실행 하고 i가 1증가한다.
                    console.log(i + "*" + j + "=" + i*j);// 그 결과로 콘솔에 2단 부터 9단의 곱샘을 출력한다.
                }   
            }
                
            

        },
        onWhile() {         //while문을 사용한 구구단 출력

            var i = 2, j = 1; //while문을 사용하기 위해서 미리 단수를 나타내는 i를 2로 j를 1로 정의한다.
            
            while( i <= 9) { // 단수를 나타내는 i가 2로 초기화 되어있기 때문에 2부터 9까지 반복
                console.log(i+"단");//구구단 출력전에 현재 단수를 console에 알려줌
                    while( j <= 9){//단수를 나타내는 i가 1증가하는 동안 중첩된 j가 1부터 9까지 증가하는 while을 전부 실행한다.
                      console.log(i + "*" + j + "=" + i*j)//결과적으로 2부터 9까지의 구구단을 출력
                      j++;//j증감식이다. j가 계속 증가하지 않는다면 j가 1일때 무한루프에 빠진다.
                     
                    }
               
                j=1;//j를 다시 1로 초기화하지 않는 다면 j는 while문 안에서 계속 증가해 10에서 멈췄으므로 다음 단의 곱샘이 이루어질수 없다.
                i++;//i의 증감식으로 j의 반복문과 마찬가지로 계속 증가하지 않는다면 무한루프에 빠지게 된다.
               
            }

        },
        onFW() { //for문과 while문을 혼합한 구구단 출력문제

            var i, j=1; //단을 나타내는 i는 for문 안에서 조건을 설정하기위해 선언만 하고 j는 while문을 사용하기위해 미리 1로 초기화를 한다.

            for( i=2; i <=9; i++) //i는 2부터 9까지 1씩 증가하는 조건식
            {
                    console.log(i+"단");////구구단 출력전에 현재 단수를 console에 알려줌
                while(j<=9){ //while문을 사용하여 j는 1부터 9까지 i가 1씩 증가하기전 전부 실행
                     console.log(i + "*" + j + "=" + i*j)//곱샘 출력
                      j++;//무한루프 하지 않기위한 j증감식
                }
                j=1; //다시 곱샘을 실행하기위한 초기화 
                     //초기화 하지 않는 다면 j=10이므로 2단만 출력하고 나머지 구구단을 출력할 수 없다.
            }

        },
            onClick() {
            var i, j=1 ; // 곱샘을 위한 변수 선언과 초기화
            var Vdan; // view의 input에서 입력된 단수를 저장할 변수

            Vdan = this.getView().byId("dan").getValue(); //view에서 id가 "dan"인 input에서 입력된 값을 가져와 vdan에 저장
            
                if (Vdan == '') {
                    console.log("숫자를 입력하시오");
                
                }else{
            console.log(Vdan+"단 Skip"); //입력된 단 스킵한다는 것을 콘솔에 명시
             for( i=2 ; i<=9; i++){ //i는 2부터 9까지 1씩 증가하는 반복문

                if(i == Vdan){//만약 증가하던 i가 입력된 단수와 같다면 
                    continue;//바로 i를 1증가 시키도록 하는 continue;
                 } else {    //그렇지 않다면 
                     console.log(i+"단"); //콘솔에 현재 i값으로 단수를 명시
                 }

                    for(j=1; j<=9; j++) {   //스킵된 단수를 제외하고 j를 1씩 증가시키는 반복문을 실행   
                    console.log(i + "*" + j + "=" + i*j);//콘솔에 곱샘을 출력
                 }   
                }
                

             }
                
             
        },
        onNum() { 
            var i, j; //i는 단수 j는 곱할 수 

            for(i=2; i <= 9; i+=2) {//i는 2부터 9까지 2씩 증가하는 조건 결국 짝수로 2, 4, 6, 8 순으로 증가
                 console.log(i+"단");//단수를 콘솔에 명시
                    for(j=1; j<=9; j++) {       //j를 1씩 증가시키는 반복문 실행  
                    console.log(i + "*" + j + "=" + i*j);//콘솔에 결과 출력
            }
        }
    },
    onSum(){

        

            var oSum=this.vData[0];//배열 속 수들의 전북 곱하여 저장할 변수 선언 
                              //배열의 합이 아닌 곱이기 때문에 초기값을 0이 아닌 배열의 0번 인덱스의 값인 10을 oSum변수에 저장 
       
            for(var i=1; i<this.vData.length; i++){ //이미 0번 인덱스를 oSum변수에 저장해놓았으므로 인덱스 번호를 나타내는 i는 1로 선언
                                                //i는 1부터 배열 vData의 길이만큼 증가 즉 i = 1, 2 ,3 ,4까지 1씩 증가한다. 

                oSum *= this.vData[i];// 1회전 i=1 : oSum변수는 현재 vData[0]의 값 10이다. 
                                 // oSum *= vData[i]' 이 코드는 oSum = oSum * vData[i]의 의미 즉 oSum = 10 * 배열의 1번 인덱스값 20을 의미
                                 // oSum에 10과 20을 곱한값이 저장
                                 // 2회전 i=2 : 이제 oSum에 있는 10과 20을 곱한 값과 베열의 2번 인덱스의 값 30을 곱하고 그 값을 oSum에 저장
                                 // 3회전 i=3 : 위와 동일
                                 // 4회전 i=4 : 위와 동일하고 최종적으로 oSum에는 10 * 20 * 30 * 40 * 50의 결과 값 12000000 이 저장   
                          
            }
            this.getView().byId("rlt").setText(oSum);  //oSum의 값을 view에 있는 id가 "rlt"인 텍스트 컴포넌트로 전달하여 출력한다.
            

        
    }
    
    });
});