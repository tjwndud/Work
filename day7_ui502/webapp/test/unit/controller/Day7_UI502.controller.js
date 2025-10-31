/*global QUnit*/

sap.ui.define([
	"code/cl3/day7ui502/controller/Day7_UI502.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day7_UI502 Controller");

	QUnit.test("I should test the Day7_UI502 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
