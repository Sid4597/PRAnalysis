sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.sap.build.standard.poMockScreen.controller.CapexService", {
		
	onBackHome: function(){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View3");
	}	

	});

});