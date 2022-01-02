sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.build.standard.prMock.controller.Aging", {
		
		onBackHome: function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("Service");
		},
		// navToItem: function(){
		// 	var oRouter4 = sap.ui.core.UIComponent.getRouterFor(this);
		// 	oRouter4.navTo("Item");
		// }	

	});

});