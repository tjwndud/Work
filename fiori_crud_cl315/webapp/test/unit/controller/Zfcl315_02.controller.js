/*global QUnit*/

sap.ui.define([
	"fiori/cl3/fioricrudcl315/controller/Zfcl315_02.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Zfcl315_02 Controller");

	QUnit.test("I should test the Zfcl315_02 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
