/*global QUnit*/

sap.ui.define([
	"code/cl3/day12ui501/controller/Day12_UI501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day12_UI501 Controller");

	QUnit.test("I should test the Day12_UI501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
