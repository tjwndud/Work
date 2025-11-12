/*global QUnit*/

sap.ui.define([
	"code/cl3/airlinecl3ui505/controller/GWserviceView05.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GWserviceView05 Controller");

	QUnit.test("I should test the GWserviceView05 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
