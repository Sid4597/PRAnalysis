sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("com.sap.build.standard.prMock.controller.Item", {

		onBackHome: function() {
			var self = this;
			var dataModel = self.getView().getModel("rowPR").getData();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("List", {weekDetails: dataModel.weekdetails});
		},
		navToCapSer: function() {
			var oRouter3 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter3.navTo("Page1");
		},
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Item").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function(oEvent) {
			debugger;
			var self = this;
			var rowDetails = oEvent.getParameter("arguments").rowDetails;
			var details = JSON.parse(rowDetails);
			var oJModel = new sap.ui.model.json.JSONModel();
			oJModel.setData(details[0]);
			self.getView().setModel(oJModel, "rowPR");
			var abc = self.getView().getModel("rowPR");
			self.getView().byId("itemDetailsId").setModel(abc, "data");
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);
			
				var oHeaders = {
				 'Accept' : 'application/json',
				 "X-Requested-With" : "XMLHttpRequest",
				 "Access-Control-Allow-Origin" : "*"
			};
			var functionWithsFilter = "/PRListSet('" + details[0].BANFN + "')/ItemDetailsSet";
			
			oDataModel.read(functionWithsFilter, {
					header : oHeaders,
				success: function(oData, response) {
					if(oData.results !== "undefined" || oData.results !== null){
						var oJModel1 = new sap.ui.model.json.JSONModel();
					oJModel1.setData(oData);
					self.getView().setModel(oJModel1, "data2");
					// var oJModel2 = new sap.ui.model.json.JSONModel();
					// oJModel2.setData(Number.parseFloat(oData.results[0].Plant));
					// self.getView().setModel(oJModel2, "data3");
					// var oJModel2 = new sap.ui.model.json.JSONModel();
					// if(oData.results.length === 0){
					// 		oJModel2.setData("Items");
					// }else{
					// 	oJModel2.setData("Items (" + oData.results.length + ")");
					// }
					// self.getView().setModel(oJModel2, "data4");
					}
				},
				error: function(error) {
					MessageToast.alert("backend service data issue");
				}
			});
			
		}
	});

});