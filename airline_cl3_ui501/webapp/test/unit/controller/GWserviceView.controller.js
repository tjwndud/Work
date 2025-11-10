/*global QUnit*/

sap.ui.define([
	"code/cl3/airlinecl3ui501/controller/GWserviceView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GWserviceView Controller");

	QUnit.test("I should test the GWserviceView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
