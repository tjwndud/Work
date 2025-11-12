/*global QUnit*/

sap.ui.define([
	"code/cl3/curriculumpage/controller/Curriculum.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Curriculum Controller");

	QUnit.test("I should test the Curriculum controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
