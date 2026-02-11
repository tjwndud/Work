/*global QUnit*/

sap.ui.define([
	"cl3/purch/purchcl3ui501/controller/Purch_ck3_ui501.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Purch_ck3_ui501 Controller");

	QUnit.test("I should test the Purch_ck3_ui501 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
