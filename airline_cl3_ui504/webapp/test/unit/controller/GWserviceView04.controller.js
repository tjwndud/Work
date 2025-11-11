/*global QUnit*/

sap.ui.define([
	"code/cl3/airlinecl3ui504/controller/GWserviceView04.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GWserviceView04 Controller");

	QUnit.test("I should test the GWserviceView04 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
