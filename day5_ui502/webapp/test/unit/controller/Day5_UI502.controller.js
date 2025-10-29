/*global QUnit*/

sap.ui.define([
	"code/cl3/day5ui502/controller/Day5_UI502.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day5_UI502 Controller");

	QUnit.test("I should test the Day5_UI502 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
