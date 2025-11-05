sap.ui.define([
    "sap/ui/core/mvc/Controller",        
    "sap/ui/model/json/JSONModel",      
    "sap/ui/model/Filter",               
    "sap/ui/model/FilterOperator"       
], (Controller, JSONModel, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("code.cl3.day9ui501.controller.Day9_UI501", {
        
        // 🧭 View가 처음 로드될 때 실행되는 초기화 함수
        onInit() {
            // 차트용 임시 데이터 생성
            var oData = {
                chartSet : [
                    {Age : "10", Answer : "25.5"},
                    {Age : "20", Answer : "30.1"},
                    {Age : "30", Answer : "20.0"},
                    {Age : "40", Answer : "10.5"},
                    {Age : "50", Answer : "4.9"},
                    {Age : "60", Answer : "9.0"}
                ]
            };
                 
            // 차트 데이터 모델 생성 및 뷰에 설정 (기본 모델)
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
                 
            // 외부 JSON 파일(/json/air.json)에서 항공사 데이터 로드
            let oModel1 = new JSONModel("/json/air.json");
            this.getView().setModel(oModel1, "Air");  // 이름이 "Air"인 별도 모델로 등록
        },
        	
        //  SearchField의 search 이벤트에 의해 호출되는 함수
        //     → 전체 검색(전역 필터) 기능 구현
        onSearch(oEvent) {
            // 사용자가 입력한 검색어(query 파라미터)를 가져옴
            var sQuery = oEvent.getParameter("query");
            
            // 이전 검색 조건 초기화 (필터 초기화)
            this._oGlobalFilter = null;

            // 검색어가 존재할 경우 새 필터 생성
            if (sQuery) {
                // 여러 필드를 대상으로 OR 조건(false)을 적용한 필터 생성
                this._oGlobalFilter = new Filter([
                    new Filter("Carrid", FilterOperator.EQ, sQuery),       // Carrid와 완전 일치하는 경우
                    new Filter("Carrname", FilterOperator.Contains, sQuery),// Carrname이 포함된 경우
                    new Filter("Price", FilterOperator.Contains, sQuery),   // Price 값에 문자열이 포함된 경우
                    new Filter("Curkey", FilterOperator.EQ, sQuery)        // Curkey(통화 코드)가 일치하는 경우
                ], false); // false → OR 조건으로 묶임 (true면 AND 조건)
                
                // 예: "Air" 입력 시 Carrname 또는 Curkey가 "Air"인 모든 데이터 표시
            }

            // 테이블 바인딩(RowBinding)에 필터 적용
            // → "table" ID를 가진 UI5 Table의 데이터 중 조건에 맞는 행만 표시됨
	        this.byId("table").getBinding("rows").filter(this._oGlobalFilter);
		},

        //  개별 입력 필드(id, name)에 의한 조건 검색 함수
        //     → 여러 개의 Input 필드로 복합 검색 구현 예시
        onWord() {
            let aFilter = []; // 필터 조건을 담을 배열 생성

            // 각각의 Input 필드에서 값 가져오기
            var vId = this.getView().byId("id").getValue();       // ID 입력값
            var vName = this.getView().byId("name").getValue();   // 이름 입력값
            
            // 조건에 따라 필터 생성
            if(vId != '') {
                // Carrid가 정확히 일치(EQ)하는 조건 추가
                aFilter.push(new Filter("Carrid", FilterOperator.EQ, vId));
            }
            if(vName != '') { 
                // Carrname이 입력값을 포함(Contains)하는 조건 추가
                aFilter.push(new Filter("Carrname", FilterOperator.Contains, vName));
            }

            // 필터 조건이 하나 이상 있을 때만 적용
            if (aFilter.length > 0) {
                this.getView().byId("table").getBinding("rows").filter(aFilter);
                // filter(aFilter)는 배열로 전달하면 자동으로 AND 조건으로 동작
            }
        }
    });
});
