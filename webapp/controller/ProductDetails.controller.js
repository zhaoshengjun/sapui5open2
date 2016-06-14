sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"au/com/zencode/model/formatter"
], function(Controller, formatter) {
	"use strict";
	return Controller.extend("au.com.zencode.controller.ProductDetails", {
		formatter: formatter,
		onInit: function() {
			this.byId("categoryLabel").setVisible(false);
			this.byId("category").setVisible(false);
		}
	});
})