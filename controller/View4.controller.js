sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageBox',
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, MessageBox, MessageToast, JSONModel, Export, ExportCSV, Filter, FilterOperator) {
	"use strict";
	
	var self;
	return Controller.extend("com.sap.build.standard.prMock.controller.View4", {
		
	onBackHome: function(){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("DetailPage1");
	},
		onInit: function() {
			
		this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		this.oRouter.getRoute("View4").attachPatternMatched(this._onObjectMethod, this);
	},
		_onObjectMethod: function(oEvent) {
		self = this;
		var date = new Date();
		var currentYear = date.getFullYear();
		var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
		//	var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false,"x362ben001", "Onama@123");
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);
				var oHeaders = {
				 "Accept" : "application/json",
				 "X-Requested-With" : "XMLHttpRequest",
				 "Access-Control-Allow-Origin" : "*"
			};
			var functionWithsFilter = "/BudgetSet";
			oDataModel.read(functionWithsFilter, {
					header : oHeaders,
					async: false,
				success: function(oData, response) {
					if(oData.results !== "undefined" || oData.results !== null){
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						oJModel.setSizeLimit(oData.results.length);
						self.getView().setModel(oJModel, "data");
						
						var oJModel1 = new sap.ui.model.json.JSONModel();
						oJModel1.setData(oData.results.length);
						self.getView().setModel(oJModel1, "data1");
						
						var oJModel2 = new sap.ui.model.json.JSONModel();
						oJModel2.setData(currentYear);
						self.getView().setModel(oJModel2, "data2");
						
						if(oData.results.length === 0){
							self.getView().byId("downloadIdz").setVisible(false);
						}else{
							self.getView().byId("downloadIdz").setVisible(true);
						}
					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while searching", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error",
					details: error
					});
				}
			});
	},
	filterGlobally: function(oEvent) {
		var sQuery = oEvent.getParameter("query");
		var oFilter1 = new Filter("CostCenter", FilterOperator.Contains, sQuery);
		// for multiple search
	/*	var oFilter2 = new Filter("CostCenterName", FilterOperator.Contains, sQuery);
        var arrFilter = new Filter([oFilter1, oFilter2], false); */
    	var arrFilter = new Filter([oFilter1], false);	
    	
    	// filter binding
	    var oList = this.byId("budgetList");
	    var oBinding = oList.getBinding("items");
	    oBinding.filter(arrFilter);
		
	},
			
	download: function(){
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

				var oHeaders = {
				 'Accept' : 'application/json',
				 "X-Requested-With" : "XMLHttpRequest",
				 "Access-Control-Allow-Origin" : "*"
			};

			var functionWithsFilter = "/BudgetSet";
			oDataModel.read(functionWithsFilter, {
				header: oHeaders,
				async: false,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {

						var oModel = new sap.ui.model.json.JSONModel(oData);
						var oExport = new Export({
							exportType: new ExportCSV({

								separatorChar: "\t",

								mimeType: "application/vnd.ms-excel",

								charset: "utf-8",

								fileExtension: "xls"

							}),
							models: oModel,

							rows: {
								path: "/results"
							},
							columns: [{
								name: "Cost Center No.",
								template: {
									content: "{CostCenter}"
								}
							}, {
								name: "Description",
								template: {
									content: "{CostCenterName}"
								}
							}, {
								name: "Budget",
								template: {
									content: "{BudgetVal}"
								}
							}, {
								name: "Actual",
								template: {
									content: "{Actual}"
								}
							}, {
								name: "Committed",
								template: {
									content: "{Committed}"
								}
							}, {
								name: "Balance",
								template: {
									content: "{Balance}"
								}
							}]
						});
						oExport.saveFile().catch(function(oError) {
							MessageBox.show("Generate is not possible beause no model was set in Budget View", {
								icon: sap.m.MessageBox.Icon.ERROR,
								title: "Error",
								details: oError
							});
						}).then(function() {
							oExport.destroy();
						});
					}

				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while downloading", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});
	}
	});

});