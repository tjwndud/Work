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

    return Controller.extend("code.cl3.zexamcl315.controller.ZExam", {
      onInit() {},
      onWord() {
        let aFilter = [];

        var vRbukr = this.getView().byId("Rbukr").getValue(); // Rbukr
        var vDocNum = this.getView().byId("DocNum").getValue(); // Document Number

        if (vRbukr) {
          aFilter.push(new Filter("Rbukrs", FilterOperator.Contains, vRbukr)); // Rbukrs 필드가 vRbukr 값과 같은 레코드를 필터링하여 aFilter 배열에 추가
        }
        if (vDocNum) {
          aFilter.push(new Filter("Belnr", FilterOperator.EQ, vDocNum)); // Belnr 필드가 vDocNum 값과 같은 레코드를 필터링하여 aFilter 배열에 추가
        }
        var oTable = this.getView().byId("Table"); // 테이블 아이디로 테이블 객체 가져오기
        oTable.getBinding("rows").filter(aFilter); // 테이블의 행 바인딩에 aFilter 배열을 적용하여 필터링된 데이터를 표시
      },
      onDisplay: function () {
        var oTable = this.getView().byId("Table"); // 테이블 아이디로 테이블 객체 가져오기
        let aIndex = oTable.getSelectedIndices(), // 선택된 행의 인덱스 배열 가져오기
          oData = oTable.getContextByIndex(aIndex[0]).getObject(), // 첫 번째 선택된 행의 데이터 객체 가져오기
          oModel = this.getView().getModel(); // 모델 가져오기

        oModel.read(
          // 홑따옴표(')와 쉼표(,)를 정확한 위치에 넣어야 합니다.
          "/CartSet(Ryear='" +
            oData.Ryear +
            "',Rbukrs='" +
            oData.Rbukrs +
            "',Belnr='" +
            oData.Belnr +
            "')",
          // OData 엔티티를 읽어오는 메서드 호출

          {
            success: function (oreturn) {
              // 성공 콜백 함수
              this.getView().byId("Rbukrs").setValue(oreturn.Rbukrs); // Rbukrs 필드에 값 설정
              this.getView().byId("Ryear").setValue(oreturn.Ryear);
              this.getView().byId("Belnr").setValue(oreturn.Belnr);
              this.getView().byId("Racct").setValue(oreturn.Racct);
              this.getView().byId("Txt50").setValue(oreturn.Txt50);
              this.getView().byId("Remark").setValue(oreturn.Remark);
              this.getView().byId("Hsl").setValue(oreturn.Hsl);
              this.getView().byId("Rtcur").setValue(oreturn.Rtcur);
              this.getView().byId("PostYn").setValue(oreturn.PostYn);
            }.bind(this), // 콜백 함수의 this를 현재 컨트롤러로 바인

            error: function () {
              // 오류 콜백 함수
              MessageToast.show("Read Error."); // 오류 메시지 표시
            },
          },
        );
      },
      onClear: function () {
        this.getView().byId("Rbukrs").setValue(""); //필드 초기화
        this.getView().byId("Ryear").setValue("");
        this.getView().byId("Belnr").setValue("");
        this.getView().byId("Racct").setValue("");
        this.getView().byId("Txt50").setValue("");
        this.getView().byId("Remark").setValue("");
        this.getView().byId("Hsl").setValue("");
        this.getView().byId("Rtcur").setValue("");
        this.getView().byId("PostYn").setValue("");
      },

      onCreate: function () {
        let oModel = this.getView().getModel(); // 모델 가져오기
        var oData = {
          // OData 엔티티에 필요한 데이터를 JSON 형식으로 생성
          Rbukrs: this.getView().byId("Rbukrs").getValue(), // 필드에서 값 가져오기
          Ryear: this.getView().byId("Ryear").getValue(),
          Belnr: this.getView().byId("Belnr").getValue(),
          Racct: this.getView().byId("Racct").getValue(),
          Txt50: this.getView().byId("Txt50").getValue(),
          Remark: this.getView().byId("Remark").getValue(),
          Hsl: this.getView().byId("Hsl").getValue(),
          Rtcur: this.getView().byId("Rtcur").getValue(),
          PostYn: this.getView().byId("PostYn").getValue(),
        };
        oModel.create("/CartSet", oData, {
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
        let oModel = this.getView().getModel(); // 모델 가져오기
        // PK 값 가져오기
        var vRbukrs = this.getView().byId("Rbukrs").getValue(); // Rbukrs 필드에서 값 가져오기
        var vRyear = this.getView().byId("Ryear").getValue();
        var vBelnr = this.getView().byId("Belnr").getValue();

        // UPDATE하기 위한 JSON 데이터 생성
        let oData = {
          Racct: this.getView().byId("Racct").getValue(),
          Txt50: this.getView().byId("Txt50").getValue(),
          Remark: this.getView().byId("Remark").getValue(),
          Hsl: this.getView().byId("Hsl").getValue(),
          Rtcur: this.getView().byId("Rtcur").getValue(),
          PostYn: this.getView().byId("PostYn").getValue(),
        };

        oModel.update(
          "/CartSet(Ryear='" +
            vRyear +
            "',Rbukrs='" +
            vRbukrs +
            "',Belnr='" +
            vBelnr +
            "')",
          oData,
          {
            success: function (oReturn) {
              oModel.refresh(); // 모델 새로고침
              MessageToast.show("Update Success");
            },
            error: function () {
              MessageToast.show("Update Error");
            },
          },
        );
      },
      onDelete: function () {
        let oModel = this.getView().getModel(); // 모델 가져오기
        let aIndex = this.getView().byId("Table").getSelectedIndices(); // 선택된 행의 인덱스 배열 가져오기

        if (aIndex.length < 1) {
          MessageToast.show("Please select a row to delete.");
          return;
        }
        var oData = this.getView()
          .byId("Table")
          .getContextByIndex(aIndex[0])
          .getObject(); // 선택된 행의 데이터 가져오기

        oModel.remove(
          "/CartSet(Ryear='" +
            oData.Ryear +
            "',Rbukrs='" +
            oData.Rbukrs +
            "',Belnr='" +
            oData.Belnr +
            "')",
          {
            success: function () {
              oModel.refresh(); // 모델 새로고침
              MessageToast.show("Delete Success");
            },
            error: function () {
              MessageToast.show("Delete Error");
            },
          },
        );
      },
    });
  },
);
