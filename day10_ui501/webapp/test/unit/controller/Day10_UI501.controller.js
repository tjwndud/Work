/*global QUnit*/

sap.ui.define([
	"code/cl3/day10ui501/controller/Day10_UI501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day10_UI501 Controller");

	QUnit.test("I should test the Day10_UI501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
