sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV",
	'sap/viz/ui5/data/FlattenedDataset',
	'sap/viz/ui5/api/env/Format',
	'sap/viz/ui5/format/ChartFormatter',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/routing/History"
], function(Controller, JSONModel, MessageToast, MessageBox, Export, ExportCSV, FlattenedDataset, Format, ChartFormatter, Filter,
	FilterOperator, History) {
	"use strict";

	var self;
	return Controller.extend("com.sap.build.standard.prMock.controller.View5", {
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

		},
		onInit: function() {

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("View5").attachPatternMatched(this._onObjectMethod, this);
		},

		_onObjectMethod: function() {
			self = this;
			self.getView().byId("history").setVisible(false);
			self.getView().byId("downloadIdz").setVisible(false);
			// self.getView().byId("idVizFrame").setVisible(false);

			self.getView().byId("fromDate").setValue(null);
			self.getView().byId("toDate").setValue(null);
			self.getView().byId("plantId").setValue(null);
			self.getView().byId("materialGroup").setValue(null);
			self.getView().byId("material").setValue(null);
			self.getView().byId("vendorId").setValue(null);
			/*Initial render for Materialand Material Group*/

			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			//var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false, "x362ben001", "Onama@123");
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);
			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};
			var functionWithsFilter = "/F4_PlantSet";
			//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
			oDataModel.read(functionWithsFilter, {
				header: oHeaders,
				async: true,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel4 = new sap.ui.model.json.JSONModel();
						oJModel4.setData(oData);
						oJModel4.setSizeLimit(oData.results.length);
						self.getView().setModel(oJModel4, "data7");
					}
				},

				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Plant data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});
			var functionWithsFilterGrpSet = "/F4_MATERIAL_GROUPSet"; //	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
			oDataModel.read(functionWithsFilterGrpSet, {
				header: oHeaders,
				async: false,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						oJModel.setSizeLimit(oData.results.length);
						self.getView().setModel(oJModel, "data1");
					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Material Group Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});
			var functionWithsFilterVendor = "/F4_VENDOR_BY_COMPSet";
			oDataModel.read(functionWithsFilterVendor, {
				header: oHeaders,
				async: false,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						oJModel.setSizeLimit(oData.results.length);
						self.getView().setModel(oJModel, "data6");
					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Vendor Data", {
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

		getMaterialList: function(event) {
			//var self = this;
			self.getView().setModel("", "data2");
			var materialGroup = event.getParameter("value");

			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};

			var functionWithsFilter = "/F4_MAT_BY_GRPSet?$filter=Matkl eq '" + materialGroup + "'";

			oDataModel.read(functionWithsFilter, {
				header: oHeaders,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						self.getView().setModel(oJModel, "data2");
					}
				},
				error: function(error) {
					// MessageToast.alert("backend service data issue");

					MessageBox.show("Backend connection service data issue while getting the Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});
		},
		onSearch: function(oEvent) {
			var fromdate = self.getView().byId("fromDate")._lastValue;
			var todate = self.getView().byId("toDate")._lastValue;

			var plant = self.getView().byId("plantId")._lastValue;
			var materialGroup = self.getView().byId("materialGroup")._lastValue;

			var material = self.getView().byId("material")._lastValue;
			var vendor = self.getView().byId("vendorId")._lastValue;

			if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
				MessageBox.alert("Please Enter From Date and To Date");
				return;
			}

			if (materialGroup === null || materialGroup === "" || materialGroup === undefined || material === null || material === "" ||
				material === undefined || plant === null || plant === "" || plant === undefined) {
				MessageBox.alert("Please select Plant, Material and Material Group");
				return;
			} else {
				if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
					MessageBox.alert("Please Enter From Date and To Date");
					return;
				}
				var todt = new Date(todate);
				var fromdt = new Date(fromdate);

				/* End */

				var timeDiff = Math.abs(todt.getTime() - fromdt.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
				if (diffDays < 182) {
					MessageBox.alert("Date Range should be minimun six months, Please check From Date and To Date");
					return;
				}

				if (todt < fromdt) {
					MessageBox.alert("From Date can not be greater than To Date");
					self.getView().setModel("", "data");
					self.getView().byId("materialTable").setVisible(false);
					self.getView().byId("downloadIdz").setVisible(false);
					// self.getView().byId("idVizFrame").setVisible(false);
					return;
				} else {
					var year = todt.getFullYear();
					var month = todt.getMonth() + 1;
					var date1 = todt.getDate();
					var hour = "00";
					var min = "00";
					var to = "datetime" + "'" + year + "-" + month + "-" + date1 + "T" + hour + ":" + min + "'";

					var year1 = fromdt.getFullYear();
					var month1 = fromdt.getMonth() + 1;
					var date2 = fromdt.getDate();
					var hour1 = "00";
					var min1 = "00";
					var from = "datetime" + "'" + year1 + "-" + month1 + "-" + date2 + "T" + hour1 + ":" + min1 + "'";

					var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
					var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

					var oHeaders = {
						'Accept': 'application/json',
						"X-Requested-With": "XMLHttpRequest",
						"Access-Control-Allow-Origin": "*"
					};

					var functionWithsFilter;

					if (vendor !== null || vendor !== "") {
						functionWithsFilter = "/MaterialHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and WERKS eq '" + plant +
							"' and MATNR eq '" + material + "' and LIFNR eq '" + vendor + "'";
					} else {
						functionWithsFilter = "/MaterialHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and WERKS eq '" + plant +
							"' and MATNR eq '" + material + "'";
					}

					//var functionWithsFilter = "/MaterialHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and WERKS eq '" + plant + "' and MATNR eq '" + material + "'";
					oDataModel.read(functionWithsFilter, {
						header: oHeaders,
						async: false,
						success: function(oData, response) {
							if (oData.results !== "undefined" || oData.results !== null) {
								var oJModel = new sap.ui.model.json.JSONModel();
								oJModel.setData(oData);
								oJModel.setSizeLimit(oData.results.length);
								self.getView().setModel(oJModel, "data");

								var oJModel1 = new sap.ui.model.json.JSONModel();
								oJModel1.setData(oData.results.length);
								self.getView().setModel(oJModel1, "data3");

								if (oData.results.length === 0) {
									self.getView().byId("downloadIdz").setVisible(false);
								} else {
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
					self.getView().byId("history").setVisible(true);
					// self.getView().byId("idVizFrame").setVisible(true);
				}
			}
		},
		parthFloatQty: function(value) {

			if (value === null) {
				return "";
			}

			var qty = parseFloat(value);
			return qty;
		},

		download: function() {
			var fromdate = self.getView().byId("fromDate")._lastValue;
			var todate = self.getView().byId("toDate")._lastValue;

			if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
				MessageBox.alert("Please Enter From Date and To Date");
				return;
			}
			var plant = self.getView().byId("plantId")._lastValue;
			var materialGroup = self.getView().byId("materialGroup")._lastValue;
			var material = self.getView().byId("material")._lastValue;
			var vendor = self.getView().byId("vendorId")._lastValue;

			if (materialGroup === null || materialGroup === "" || materialGroup === undefined || material === null || material === "" ||
				material === undefined) {
				MessageBox.alert("Please select Material and Material Group");
				return;
			} else {
				if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
					MessageBox.alert("Please Enter From Date and To Date");
					return;
				}

				/* for date Example :  18.11.2018 */
				/* start */
				/*
				var arr1 = fromdate.split('.');
				var fromDateValue = arr1[1] + "/" + arr1[0] + "/" + arr1[2];
				var arr2 = todate.split('.');
				var toDateValue = arr2[1] + "/" + arr2[0] + "/" + arr2[2];
			
				var todt = new Date(toDateValue);

				var fromdt = new Date(fromDateValue);
				*/
				/* End */

				/*for date Example :  18/11/2018 */
				/* start */
				/*
				var arr1 = fromdate.split('/');
				var fromDateValue = arr1[1] + "/" + arr1[0] + "/" + arr1[2];
				var arr2 = todate.split('.');
				var toDateValue = arr2[1] + "/" + arr2[0] + "/" + arr2[2];
			
				var todt = new Date(toDateValue);

				var fromdt = new Date(fromDateValue);
				*/
				/* End */

				/*for date Example :  Dec 18, 2018 --local and webide */
				/* start */

				var todt = new Date(todate);

				var fromdt = new Date(fromdate);

				/* End */

				var year = todt.getFullYear();
				var month = todt.getMonth() + 1;
				var date1 = todt.getDate();
				var hour = "00";
				var min = "00";
				var to = "datetime" + "'" + year + "-" + month + "-" + date1 + "T" + hour + ":" + min + "'";

				var year1 = fromdt.getFullYear();
				var month1 = fromdt.getMonth() + 1;
				var date2 = fromdt.getDate();
				var hour1 = "00";
				var min1 = "00";
				var from = "datetime" + "'" + year1 + "-" + month1 + "-" + date2 + "T" + hour1 + ":" + min1 + "'";

				var sURI = "/sap/opu/odata/AAG362/MM_PO_ANALYSIS_01_SRV/";
				var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

				var oHeaders = {
					'Accept': 'application/json',
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Origin": "*"
				};

				// var functionWithsFilter = "/MaterialHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and WERKS eq '" + plant +
				// 	"' and MATNR eq '" + material + "'";
					var functionWithsFilter;

					if (vendor !== null || vendor !== "") {
						functionWithsFilter = "/MaterialHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and WERKS eq '" + plant +
							"' and MATNR eq '" + material + "' and LIFNR eq '" + vendor + "'";
					} else {
						functionWithsFilter = "/MaterialHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and WERKS eq '" + plant +
							"' and MATNR eq '" + material + "'";
					}	
					
					
				oDataModel.read(functionWithsFilter, {
					header: oHeaders,
					async: false,
					//async: true,
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
									name: "Vendor No",
									template: {
										content: "{LIFNR}"
									}
								}, {
									name: "Vender name",
									template: {
										content: "{NAME1}"
									}
								}, {
									name: "Month",
									template: {
										content: "{MONTH}"
									}
								},
								{
									name: "Average Price",
									template: {
										content: "{AVGNETPR}"
									}
								}]
							});
							oExport.saveFile().catch(function(oError) {
								MessageBox.show("Generate is not possible beause no model was set in Material History", {
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

		}
	});

});