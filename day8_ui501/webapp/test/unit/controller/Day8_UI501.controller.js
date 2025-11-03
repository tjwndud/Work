/*global QUnit*/

sap.ui.define([
	"code/cl3/day8ui501/controller/Day8_UI501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day8_UI501 Controller");

	QUnit.test("I should test the Day8_UI501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
