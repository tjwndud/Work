/*global QUnit*/

sap.ui.define([
	"flight/cl3/zflight15/controller/Zflight15.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Zflight15 Controller");

	QUnit.test("I should test the Zflight15 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
