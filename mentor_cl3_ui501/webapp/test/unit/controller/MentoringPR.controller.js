/*global QUnit*/

sap.ui.define([
	"cl3mento/mentorcl3ui501/controller/MentoringPR.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MentoringPR Controller");

	QUnit.test("I should test the MentoringPR controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
