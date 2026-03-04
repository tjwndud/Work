/*global QUnit*/

sap.ui.define([
	"code/cl3/zexamcl315/controller/ZExam.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZExam Controller");

	QUnit.test("I should test the ZExam controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
