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

    return Controller.extend("fiori.cl3.fioricrudcl315.controller.Zfcl315_02", {
      onInit() {},
      onDisplay: function () {
        var oTable = this.getView().byId("Table"); // 테이블 아이디로 테이블 객체 가져오기
        let aIndex = oTable.getSelectedIndices(), // 선택된 행의 인덱스 배열 가져오기
          oData = oTable.getContextByIndex(aIndex[0]).getObject(), // 첫 번째 선택된 행의 데이터 객체 가져오기
          oModel = this.getView().getModel(); // 모델 가져오기

        oModel.read(
          "/StdtSet('" + oData.StdtNo + "')", // OData 엔티티를 읽어오는 메서드 호출
          {
            success: function (oReturn) {
              // 성공 콜백 함수
              this.getView().byId("StdtNo").setValue(oReturn.StdtNo);
              this.getView().byId("Major").setValue(oReturn.Major);
              this.getView().byId("StdtName").setValue(oReturn.StdtName);
              this.getView().byId("Addr").setValue(oReturn.Addr);
              this.getView().byId("Email").setValue(oReturn.Email);
              this.getView().byId("Gender").setValue(oReturn.Gender);
            }.bind(this), // 콜백 함수의 this를 현재 컨트롤러로 바인딩
            error: function () {
              MessageToast.show("Display Error");
            },
          },
        );
      },
      onCreate: function () {
        let oModel = this.getView().getModel(); // 모델 가져오기
        var oData = {
          // OData 엔티티에 필요한 데이터를 JSON 형식으로 생성
          StdtNo: this.getView().byId("StdtNo").getValue(),
          Major: this.getView().byId("Major").getValue(),
          StdtName: this.getView().byId("StdtName").getValue(),
          Addr: this.getView().byId("Addr").getValue(),
          Email: this.getView().byId("Email").getValue(),
          Gender: this.getView().byId("Gender").getValue(),
        };
        oModel.create("/StdtSet", oData, {
          // OData 엔티티를 생성하는 메서드 호출
          success: function (oReturn) {
            oModel.refresh(); // 모델 새로고침
            MessageToast.show("Create Success");
          },
          error: function () {
            MessageToast.show("Create Error");
          },
        });
      },
      onUpdate: function () {
        let oModel = this.getView().getModel(); // 모델 가져오기
        var vstNo = this.getView().byId("StdtNo").getValue(); // 학번 가져오기
        let oData = {
          Major: this.getView().byId("Major").getValue(),
          StdtName: this.getView().byId("StdtName").getValue(),
          Addr: this.getView().byId("Addr").getValue(),
          Email: this.getView().byId("Email").getValue(),
          Gender: this.getView().byId("Gender").getValue(),
        };

        oModel.update("/StdtSet('" + vstNo + "')", oData, {
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
        let oModel = this.getView().getModel(); // 모델 가져오기
        let aIndex = this.getView().byId("Table").getSelectedIndices(); // 선택된 행의 인덱스 배열 가져오기

        if (aIndex.length < 1) {
          MessageToast.show("선택된 행이 없습니다.");
          return;
        }
        var oData = this.getView()
          .byId("Table")
          .getContextByIndex(aIndex[0])
          .getObject(); // 첫 번째 선택된 행의 데이터 객체 가져오기
        oModel.remove("/StdtSet('" + oData.StdtNo + "')", {
          success: function () {
            oModel.refresh(); // 모델 새로고침
            MessageToast.show("Delete Success");
          },
          error: function () {
            MessageToast.show("Delete Error");
          },
        });
      },
    });
  },
);
