/*global QUnit*/

sap.ui.define([
	"mentoringcl3/zmentorcl315/controller/ZMentor15_cl3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZMentor15_cl3 Controller");

	QUnit.test("I should test the ZMentor15_cl3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
