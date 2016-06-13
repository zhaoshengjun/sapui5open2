sap.ui.define([
		"au/com/zencode/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("au.com.zencode.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);