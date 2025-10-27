/*global QUnit*/

sap.ui.define([
	"code/cl3/day3ui501/controller/DAY3_UI501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DAY3_UI501 Controller");

	QUnit.test("I should test the DAY3_UI501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
