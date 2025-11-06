/*global QUnit*/

sap.ui.define([
	"code/cl3/day11ui5pmexam/controller/Day11_UI5PmExam.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Day11_UI5PmExam Controller");

	QUnit.test("I should test the Day11_UI5PmExam controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
