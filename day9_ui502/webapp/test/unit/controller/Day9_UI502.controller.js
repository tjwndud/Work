/*global QUnit*/

sap.ui.define([
	"code/cl3/day9ui502/controller/Day9_UI502.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day9_UI502 Controller");

	QUnit.test("I should test the Day9_UI502 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
