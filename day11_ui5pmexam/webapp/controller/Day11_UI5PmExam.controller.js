var gv_calcul = '', gv_result = '';//문제 11번 계산기 에서 사용할 전역 변수 선언 
                                   // gv_calcul은 '='버튼을 누르기 전까지의 값을 저장할 변수
                                   // gv_result은 '='버튼을 눌렀을 때 gv_calcul안의 문자열로 된 식을 eval함수를 통해 계산하여 결과를 저장할 변수

sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/model/Filter",
	"sap/ui/model/FilterOperator","sap/ui/core/routing/History"
], (Controller,JSONModel,Filter,FilterOperator,History) => {
    "use strict";

    return Controller.extend("code.cl3.day11ui5pmexam.controller.Day11_UI5PmExam", {
        onInit() {
          this.vArray = [       //문제 6번의 배열
         { Player : "하트",
           Team : "NC"          //0번 인덱스 객체가 들어있음 ex)속성:Player 값 : "하트"
         },
         { Player : "네일",     //1번 인덱스
           Team : "KIA"
         },
         { Player : "헤이수스", //2번 인덱스
           Team : "키움"
         },
         { Player : "원태인",   //3번 인덱스
           Team : "삼성"
         },
         { Player : "곽빈",     //4번 인덱스
           Team : "두산"
         },
            ];	
           


                var oData = { //문제 9번과 10번에 사용할 데이터 설정
                    VizSet : [ //문제 9번의 데이터
                        {
                            Player : "박해민",
                            Assist : "1"
                        },
                        {
                            Player : "최지훈",
                            Assist : "3"
                        },
                        {
                            Player : "신민재",
                            Assist : "212"
                        },
                        {
                            Player : "문보경",
                            Assist : "118"
                        },
                        {
                            Player : "박성한",
                            Assist : "1228"
                        }
                    ],
                     MicorSet : [ //문제 10번의 데이터
                        {
                            Team : "KIA",
                            Hit : 101
                        },
                        {
                            Team : "두산",
                            Hit : 95
                        },
                        {
                            Team : "롯데",
                            Hit : 68
                        },
                        {
                            Team : "LG",
                            Hit : 66
                        },
                        {
                            Team : "SSG",
                            Hit : 63
                        }
                    ]
                   
                }


                const oModel3 = new JSONModel(oData);
                this.getView().setModel(oModel3, "base");//oData의 데이터셋을 "base"란 이름으로 포장하여 View로 전송
           

            let oModel = new JSONModel("/json/Asset.json");//7번 문제 json폴더에 Asset.json파일안의 데이터를 포장하여 View로 전송
            this.getView().setModel(oModel);
            
            let oModel2 = new JSONModel("/json/Company.json");
            this.getView().setModel(oModel2, "com");//8번 문제 json폴더에 Company.json파일안의 데이터를 포장하여 View로 전송
        },
        onClick(){
         
            for(var i of this.vArray ){ 
                console.log("Player:", i.Player,"Team:", i.Team);//vArray의 값을 1개씩 가져와서 i값에 저장
                console.log("-------------------------------------");
              
            }

        },
        onSearch(oEvent){//7번 문제 View에서 search를 했을때 이벤트를 받아올 매개변수 선언
         //검색 조건 배열 준비
            var aFilter = [];    
         //사용자가 입력한 검색어 추출해서 Vcon에 저장    
            var vCond = oEvent.getParameter("query");
            
            if (vCond) {//Vcond에 값이 존재하므로 조건은 참
            //검색 조건 설정

            
            aFilter.push(new Filter("Bktxt", FilterOperator.Contains, vCond));
            // 생성자는 max 4개의 인자를 받을 수 있고 위의 코드에서는 3개의 인자를 받았다
            //1.검색하고자하는 대상 필드
            //2.FilterOperator를 이용한 연산자.
            //3.query해서 받아온 검색어
            //즉 데이터셋의 "Bktxt"필드에서 현재 사용자가 입력한 값을 저장한 
            //vCond의 변수의 값을 FilterOperator의 contatins(비슷한 정보도 포함)연산자를 사용하여 검색
            //"Bktxt" 에서 찾은 정확한 값을 aFilter에 저장 
            
                
            }

            //Filter binding 테이블 바인딩 필터
            var oTable = this.getView().byId("table"); 
            var oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilter);//aFiler배열에 저장된값을 바인딩하여 id가 "table"인View의 테이블의 경로를 oTable에 바인딩

            //this.getView().byId("table").getBinding("rows").filter(aFilter); 바인딩 과정을 이런식으로 표현할 수 도 있음
            
        },
        onSearch2(oEvent){//문제 8번
         //검색 조건 배열 준비
            var aFilter = [];    
         //사용자가 입력한 검색어 추출해서 Vcon에 저장 
            var vCond = oEvent.getParameter("query");
            //Set search condition
            if (vCond) {//Vcond에 값이 존재하므로 조건은 참
            //검색 조건 설정

            
            aFilter.push(new Filter("Comp", FilterOperator.Contains, vCond));
            
            
                //7번과 동일
            }

            //7번과 동일
            var oTable = this.getView().byId("table2");
            var oBinding = oTable.getBinding("rows");
            oBinding.filter(aFilter);

            //this.getView().byId("table2").getBinding("rows").filter(aFilter); 바인딩 과정을 한줄로 표현한 코드
            
        },
         setNumber(val) {//11번 문제 View에서 숫자나 연산자 버튼을 누르면 SetNumber()함수가 호출
                         //각 버튼 마다 알맞는 숫자나 연산자 같은 매개 변수값을 가지고 호출되기때문에 
                         //val 매개변수를 선언
            if(val == ''){ //만약 함수가 호출 될때 매 ''라면 ''는 view에서 'CLR'버튼을 눌렀을 때 ''를 매개변수로 가지고 함수를 호출하도록 코딩
                gv_calcul = ''; //계산기의 계산식을 나타낼 gv_clacul 전역 변수를 공백으로 초기화   
                gv_result = ''; //계산기의 결과를 나타낼 gv_result 전역 변수를 공백으로 초기화
                this.getView().byId("input").setValue("");//아이디가 "input"인 View의 Input박스에 공백을 전송
                return;//결과적으로 계산기의 화면이 클리어되어 빈화면 출력
            };

            switch (val) { 
                case 'eq': //만약 매개변수값이 'eq'라면 'eq'는 view에서 '='버튼을 눌렀을 때 'eq'를 매개변수로 가지고 함수를 호출하도록 코딩
                    gv_result = eval(gv_calcul); //결과를 나타내는 전역변수에 그 전까지 계산식을 문자열로 가지고 있던 gv_clacul 변수를 eval함수를 통해 계산하여 저장
                    //eval함수는 문자열로 이루어진 계산식도 정수형 처럼 계산을 처리하도록 하는 함수
                    this.getView().byId("input").setValue(gv_result);// 그 값을 아이디가 "input"인 View의 Input박스에 출력
                    break;
            
                default://만약 매개변수가 공백도 아니고 'eq'도 아니라면 즉 숫자나 '+', '-', '*', '/'와 같은 연산자를 가지고 함수를 호출
                    gv_calcul += val; //gv_calcul에 버튼이 눌린순서대로 문자열의 결합 형태로 계산식이 만들어진다.
                    // ex) 버튼 클릭 순서 :
                    // 1. '4' 
                    // 2. '2' 
                    // 3. '+' 
                    // 4. '8'
                    //이라면 '4'+'2'+ '+' + '8'= '42+8'이라는 계산식이 문자열의 형태로 변수에 저장된다.
                    this.getView().byId("input").setValue(gv_calcul);//아이디가 "input"인 View의 Input박스에 계산식을 출력한다.
                    break;
            }
                        
        },
        goSecond(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteDay11_UI5PmExamSecond");// 지정된 페이지의 주소를 명시하여 함수 실행시 안내

        },
         goBack() {
            const oHistory = History.getInstance();
			const sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) { //이전화면이 존재한다면 
				window.history.go(-1);// 이전화면으로 돌아가라
			} else {//해당 페이지가 첫 페이지라면 설정한 페이지로 이동한다.
				const oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("RouteDay11_UI5PmExam", {}, true);
			}
        }
    });
});