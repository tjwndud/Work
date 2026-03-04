/*global QUnit*/

sap.ui.define([
	"code/cl3/zexam3cl315/controller/ZExam3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZExam3 Controller");

	QUnit.test("I should test the ZExam3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
