/*global QUnit*/

sap.ui.define([
	"code/cl3/zgateway15/controller/zgw_cl3_ui501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("zgw_cl3_ui501 Controller");

	QUnit.test("I should test the zgw_cl3_ui501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
