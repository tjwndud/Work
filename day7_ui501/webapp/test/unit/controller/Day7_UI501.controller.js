/*global QUnit*/

sap.ui.define([
	"code/cl3/day7ui501/controller/Day7_UI501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day7_UI501 Controller");

	QUnit.test("I should test the Day7_UI501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
