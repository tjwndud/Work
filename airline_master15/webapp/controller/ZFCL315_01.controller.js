sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageToast",
  ],
  (Controller, ODataModel, Filter, FilterOperator, MessageToast) => {
    "use strict";

    return Controller.extend(
      "airline.cl3.airlinemaster15.controller.ZFCL315_01",
      {
        onInit() {
          var OModel = new ODataModel("/sap/opu/odata/sap/ZGWCL315_10_SRV/");
          this.getView().setModel(OModel, "Air");
        },
        onDisplay: function () {
          var oTable = this.getView().byId("Table"); // 테이블 아이디로 테이블 객체 가져오기
          let aIndex = oTable.getSelectedIndices(), // 선택된 행의 인덱스 배열 가져오기
            oData = oTable.getContextByIndex(aIndex[0]).getObject(), // 첫 번째 선택된 행의 데이터 객체 가져오기
            oModel = this.getView().getModel("Air"); // 모델 가져오기

          oModel.read(
            "/AirlineSet('" + oData.Carrid + "')", // OData 엔티티를 읽어오는 메서드 호출
            {
              success: function (oreturn) {
                // 성공 콜백 함수
                this.getView().byId("Carrid").setValue(oreturn.Carrid); // Carrid 필드에 값 설정
                this.getView().byId("Carrname").setValue(oreturn.Carrname); // Carrname 필드에 값 설정
                this.getView().byId("Currcode").setValue(oreturn.Currcode); // Currcode 필드에 값 설정
                this.getView().byId("Url").setValue(oreturn.Url); // Url 필드에 값 설정
              }.bind(this), // 콜백 함수의 this를 현재 컨트롤러로 바인딩
              error: function () {
                // 오류 콜백 함수
                MessageToast.show("Read Error."); // 오류 메시지 표시
              },
            },
          );
        },
        onCreate: function () {
          let oModel = this.getView().getModel("Air"); // 모델 가져오기
          var oData = {
            // OData 엔티티에 필요한 데이터를 JSON 형식으로 생성
            Carrid: this.getView().byId("Carrid").getValue(), // Carrid 필드에서 값 가져오기
            Carrname: this.getView().byId("Carrname").getValue(), // Carrname 필드에서 값 가져오기
            Currcode: this.getView().byId("Currcode").getValue(), // Currcode 필드에서 값 가져오기
            Url: this.getView().byId("Url").getValue(), // Url 필드에서 값 가져오기
          };
          oModel.create("/AirlineSet", oData, {
            // OData 엔티티를 생성하는 메서드 호출
            success: function (oReturn) {
              oModel.refresh(); // 모델 새로고침
              MessageToast.show("Create Success"); // 성공 메시지 표시
            },
            error: function () {
              MessageToast.show("Create Error");
            },
          });
        },
        onUpdate: function () {
          let oModel = this.getView().getModel("Air"); // 모델 가져오기
          // PK 값 가져오기
          var vCarrid = this.getView().byId("Carrid").getValue(); // Carrid 필드에서 값 가져오기

          // UPDATE하기 위한 JSON 데이터 생성
          let oData = {
            Carrname: this.getView().byId("Carrname").getValue(),
            Currcode: this.getView().byId("Currcode").getValue(),
            Url: this.getView().byId("Url").getValue(),
          };

          oModel.update("/AirlineSet('" + vCarrid + "')", oData, {
            success: function (oReturn) {
              oModel.refresh(); // 모델 새로고침
              MessageToast.show("Update Success");
            },
            error: function () {
              MessageToast.show("Update Error");
            },
          });
        },
        onDelete: function () {
          let oModel = this.getView().getModel("Air"); // 모델 가져오기
          let aIndex = this.getView().byId("Table").getSelectedIndices(); // 선택된 행의 인덱스 배열 가져오기

          if (aIndex.length < 1) {
            MessageToast.show("Please select a row to delete.");
            return;
          }
          var oData = this.getView()
            .byId("Table")
            .getContextByIndex(aIndex[0])
            .getObject(); // 선택된 행의 데이터 가져오기

          oModel.remove("/AirlineSet('" + oData.Carrid + "')", {
            success: function () {
              oModel.refresh(); // 모델 새로고침
              MessageToast.show("Delete Success");
            },
            error: function () {
              MessageToast.show("Delete Error");
            },
          });
        },
      },
    );
  },
);
