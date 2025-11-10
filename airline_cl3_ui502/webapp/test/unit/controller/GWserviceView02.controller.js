/*global QUnit*/

sap.ui.define([
	"code/cl3/airlinecl3ui502/controller/GWserviceView02.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GWserviceView02 Controller");

	QUnit.test("I should test the GWserviceView02 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
