sap.ui.define([
	] , function () {
		"use strict";

		return {

			/**
			 * Rounds the number unit value to 2 digits
			 * @public
			 * @param {string} sValue the number string to be rounded
			 * @returns {string} sValue with 2 digits rounded
			 */
			numberUnit : function (sValue) {
				if (!sValue) {
					return "";
				}
				return parseFloat(sValue).toFixed(2);
			},
			
			formatMapUrl: function(sStreet, sZIP, sCity, sCountry) {
				var sUrl = "https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=640x640&markers=";
				return 	 sUrl + jQuery.sap.encodeURL(sStreet + ", " + sZIP + " " + sCity + ", " + sCountry);
			}

		};

	}
);