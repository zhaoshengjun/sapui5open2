jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"au/com/zencode/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"au/com/zencode/test/integration/pages/Worklist",
		"au/com/zencode/test/integration/pages/Object",
		"au/com/zencode/test/integration/pages/NotFound",
		"au/com/zencode/test/integration/pages/Browser",
		"au/com/zencode/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "au.com.zencode.view."
	});

	sap.ui.require([
		"au/com/zencode/test/integration/WorklistJourney",
		"au/com/zencode/test/integration/ObjectJourney",
		"au/com/zencode/test/integration/NavigationJourney",
		"au/com/zencode/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
