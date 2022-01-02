sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV",
	"sap/ui/core/routing/History"
], function(Controller, JSONModel, MessageToast, MessageBox, Export, ExportCSV) {
	"use strict";

	var self;
	return Controller.extend("com.sap.build.standard.prMock.controller.View2", {

		handleRouteMatched: function(oEvent) {
			var oParams = {};

			if (oEvent.mParameters.data.context) {
				this.sContext = oEvent.mParameters.data.context;
				var oPath;
				if (this.sContext) {
					oPath = {
						path: "/" + this.sContext,
						parameters: oParams
					};
					this.getView().bindObject(oPath);
				}
			}

			self = this;
			self.chartData();

			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};

			var functionWithsFilter = "/PendingPRSet";
			//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
			oDataModel.read(functionWithsFilter, {
				header: oHeaders,

				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						self.getView().setModel(oJModel, "data1");

						if (oData.results.length === 0) {
							self.getView().byId("downloadIdz").setVisible(false);
						} else {
							self.getView().byId("downloadIdz").setVisible(true);
						}

					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting the Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});

			var functionWithsFilterGRP = "/PendingPRByPurchGroupSet";
			oDataModel.read(functionWithsFilterGRP, {
				header: oHeaders,

				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						self.getView().setModel(oJModel, "data3");
					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting the Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});

		},

		onBackHome: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("DetailPage1");
		},
		applyFiltersAndSorters: function(sControlId, sAggregationName) {
			var oBindingInfo = this.getView().byId(sControlId).getBindingInfo(sAggregationName);
			var oBindingOptions = this.updateBindingOptions(sControlId);
			this.getView().byId(sControlId).bindAggregation(sAggregationName, {
				model: oBindingInfo.model,
				path: oBindingInfo.path,
				parameters: oBindingInfo.parameters,
				template: oBindingInfo.template,
				templateShareable: true,
				sorter: oBindingOptions.sorters,
				filters: oBindingOptions.filters
			});

		},

		updateBindingOptions: function(sCollectionId, oBindingData, sSourceId) {
			this.mBindingOptions = this.mBindingOptions || {};
			this.mBindingOptions[sCollectionId] = this.mBindingOptions[sCollectionId] || {};

			var aSorters = this.mBindingOptions[sCollectionId].sorters;
			var aGroupby = this.mBindingOptions[sCollectionId].groupby;

			// If there is no oBindingData parameter, we just need the processed filters and sorters from this function
			if (oBindingData) {
				if (oBindingData.sorters) {
					aSorters = oBindingData.sorters;
				}
				if (oBindingData.groupby) {
					aGroupby = oBindingData.groupby;
				}
				// 1) Update the filters map for the given collection and source
				this.mBindingOptions[sCollectionId].sorters = aSorters;
				this.mBindingOptions[sCollectionId].groupby = aGroupby;
				this.mBindingOptions[sCollectionId].filters = this.mBindingOptions[sCollectionId].filters || {};
				this.mBindingOptions[sCollectionId].filters[sSourceId] = oBindingData.filters || [];
			}
			var aFilters = [];
			for (var key in this.mBindingOptions[sCollectionId].filters) {
				aFilters = aFilters.concat(this.mBindingOptions[sCollectionId].filters[key]);
			}

			// Add the groupby first in the sorters array
			if (aGroupby) {
				aSorters = aSorters ? aGroupby.concat(aSorters) : aGroupby;
			}

			var aFinalFilters = aFilters.length > 0 ? [new sap.ui.model.Filter(aFilters, true)] : undefined;
			return {
				filters: aFinalFilters,
				sorters: aSorters
			};

		},

		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("View2").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

		},

		chartData: function() {
			var oVizFrame = this.getView().byId("idVizFrame");

			oVizFrame.setVizProperties({
				legend: {
					title: {
						visible: true
					}
				},
				interaction: {
					behaviorType: null
				},
				title: {
					visible: true,
					text: "Pending PR"
				},
				valueAxis: {
					label: {

					},
					title: {
						visible: false
					}
				},
				categoryAxis: {
					title: {
						visible: true
					}
				}

			});

			var sServiceUrl = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV";
			var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
			oModel.setUseBatch(false);
			oModel.read("/PendingPRByPurchGroupSet", {
				success: function(oData, response) {
					var oJModel = new sap.ui.model.json.JSONModel();
					oJModel.setData(oData);
					var UsageModel = new JSONModel({
						"chartValue": oData.results
					});
					oVizFrame.setModel(UsageModel, "stackedChart");
				},
				error: function(error) {

					MessageBox.show("Backend connection service data issue while getting the Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});

		},

		download: function() {

			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};

			var functionWithsFilter = "/PendingPRSet";

			oDataModel.read(functionWithsFilter, {
				header: oHeaders,
				async: false,
				//async: true,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						self.getView().setModel(oData, "data2");
						//var oModel = self.getView().getModel("data1");
						var oModel = new sap.ui.model.json.JSONModel(oData);
						var oExport = new Export({
							//exportType: new sap.ui.core.util.ExportTypeCSV({
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
								name: "Purchase Group",
								template: {
									content: "{EKGRP}",
									width: "25"
								}
							}, {
								name: "Categories",
								template: {
									content: "{EKNAM}",
									width: "25"
								}
							}, {
								name: "User",
								template: {
									content: "{NAME_TEXT}",
									width: "25"
								}
							}, {
								name: "0-15 days",
								template: {
									content: "{P0_15}"
								}
							}, {
								name: "16-30 days",
								template: {
									content: "{P16_30}"
								}
							}, {
								name: ">30 days",
								template: {
									content: "{P30_GT}"
								}
							}]
						});
						oExport.saveFile().catch(function(oError) {
							MessageBox.show("Generate is not possible beause no model was set in Pending PR", {
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
					MessageBox.show("Backend connection service data issue while downoading", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});
		},
		onAfterRendering: function() {

		}

	});

});