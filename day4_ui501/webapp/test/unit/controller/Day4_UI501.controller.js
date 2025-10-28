/*global QUnit*/

sap.ui.define([
	"code/cl3/day4ui501/controller/Day4_UI501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day4_UI501 Controller");

	QUnit.test("I should test the Day4_UI501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
