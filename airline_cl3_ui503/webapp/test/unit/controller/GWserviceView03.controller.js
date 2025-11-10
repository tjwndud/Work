/*global QUnit*/

sap.ui.define([
	"code/cl3/airlinecl3ui503/controller/GWserviceView03.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GWserviceView03 Controller");

	QUnit.test("I should test the GWserviceView03 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
