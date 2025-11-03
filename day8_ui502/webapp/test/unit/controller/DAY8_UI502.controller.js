/*global QUnit*/

sap.ui.define([
	"code/cl3/day8ui502/controller/DAY8_UI502.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DAY8_UI502 Controller");

	QUnit.test("I should test the DAY8_UI502 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
