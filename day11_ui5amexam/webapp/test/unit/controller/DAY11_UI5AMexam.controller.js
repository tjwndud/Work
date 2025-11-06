/*global QUnit*/

sap.ui.define([
	"code/cl3/day11ui5amexam/controller/DAY11_UI5AMexam.controller"
], function (Controller) {
	"use strict";

	QUnit.module("DAY11_UI5AMexam Controller");

	QUnit.test("I should test the DAY11_UI5AMexam controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
