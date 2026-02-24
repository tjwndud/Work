/*global QUnit*/

sap.ui.define([
	"airline/cl3/airlinemaster15/controller/ZFCL315_01.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ZFCL315_01 Controller");

	QUnit.test("I should test the ZFCL315_01 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
