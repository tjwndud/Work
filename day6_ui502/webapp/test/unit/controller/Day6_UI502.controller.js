/*global QUnit*/

sap.ui.define([
	"code/cl3/day6ui502/controller/Day6_UI502.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day6_UI502 Controller");

	QUnit.test("I should test the Day6_UI502 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
