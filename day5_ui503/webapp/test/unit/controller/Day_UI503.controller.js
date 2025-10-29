/*global QUnit*/

sap.ui.define([
	"code/cl3/day5ui503/controller/Day_UI503.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day_UI503 Controller");

	QUnit.test("I should test the Day_UI503 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
