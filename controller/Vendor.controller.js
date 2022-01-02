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
	return Controller.extend("com.sap.build.standard.prMock.controller.Vendor", {
		
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Vendor").attachPatternMatched(this._onObjectMethod, this);
		},

		_onObjectMethod: function() {
			self = this;
			this.getView().byId("Vendor").setVisible(false);
			this.getView().byId("downloadIdz").setVisible(false);
			self.getView().byId("fromDate").setValue(null);
			self.getView().byId("toDate").setValue(null);
			self.getView().byId("vendorNumber").setValue(null);
			
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};

			var functionWithsFilter = "/F4_VENDOR_BY_COMPSet";
			//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
			oDataModel.read(functionWithsFilter, {
				header: oHeaders,
				async: false,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(oData);
						self.getView().setModel(oJModel, "data1");
					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Vendor Number Data", {
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
		onSearch: function(oEvent) {

			var fromdate = this.getView().byId("fromDate")._lastValue;
			var todate = this.getView().byId("toDate")._lastValue;

			var vendorNumber = self.getView().byId("vendorNumber")._lastValue;

			if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
				MessageBox.alert("Please Enter From Date and To Date");
				return;
			}
			if (vendorNumber === null || vendorNumber === "" || vendorNumber === undefined) {
				MessageBox.alert("Please select Vendor Number");
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
			    var fromDateValue = arr1[1] + "/" + arr1[0] + "/" + "20" + arr1[2];
			    var arr2 = todate.split('/');
			    var toDateValue = arr2[0] + "/" + arr2[1] + "/" + "20" + arr2[2];			
			    var todt = new Date(toDateValue);
			
			    var fromdt = new Date(fromDateValue);
				*/
				/* End */

				/*for date Example :  Dec 18, 2018 --local and webide */
				/* start */

				var todt = new Date(todate);

				var fromdt = new Date(fromdate);

				/* End */

				var timeDiff = Math.abs(todt.getTime() - fromdt.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
				if (diffDays < 182) {
					MessageBox.alert("Date range should be minimum six months, Please check From Date and To Date");
					return;
				}

				if (todt < fromdt) {
					MessageBox.alert("From Date can not be greater than To Date");
					self.getView().setModel("", "data");
					self.getView().byId("history").setVisible(false);
					self.getView().byId("downloadIdz").setVisible(false);

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

					var functionWithsFilter = "/VendorHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and LIFNR eq '" +
						vendorNumber + "'";
					//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
					oDataModel.read(functionWithsFilter, {
						header: oHeaders,
						async: false,
						success: function(oData, response) {
							if (oData.results !== "undefined" || oData.results !== null	) {
								var oJModel = new sap.ui.model.json.JSONModel();
								oJModel.setData(oData);
								oJModel.setSizeLimit(oData.results.length);
								self.getView().setModel(oJModel, "data");

								var oJModel1 = new sap.ui.model.json.JSONModel();
								oJModel1.setData(oData.results.length);
								self.getView().setModel(oJModel1, "data2");

								if (oData.results.length === 0) {
									self.getView().byId("downloadIdz").setVisible(false);
								} else {
									self.getView().byId("downloadIdz").setVisible(true);
								}

							}
						},
						error: function(error) {
							MessageBox.show("Backend connection service data issue while getting Vendor no. Data", {
								icon: sap.m.MessageBox.Icon.ERROR,
								title: "Error",
								details: error
							});
						}
					});
					self.getView().byId("Vendor").setVisible(true);
					self.getView().byId("downloadIdz").setVisible(true);
					// self.getView().byId("dualline").setVisible(true);
				}
			}

		},

		download: function() {

			var fromdate = this.getView().byId("fromDate")._lastValue;
			var todate = this.getView().byId("toDate")._lastValue;

			if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
				MessageBox.alert("Please Enter From Date and To Date");
				return;
			} else {

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
			    var fromDateValue = arr1[1] + "/" + arr1[0] + "/" + "20" + arr1[2];
			    var arr2 = todate.split('/');
			    var toDateValue = arr2[0] + "/" + arr2[1] + "/" + "20" + arr2[2];			
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
				var vendorNumber = this.getView().byId("vendorNumber")._lastValue;

				var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
				var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

				var oHeaders = {
					'Accept': 'application/json',
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Origin": "*"
				};

				var functionWithsFilter = "/VendorHistorySet?$filter=FROMDATE eq " + from + " and TODATE eq " + to + " and LIFNR eq '" +
					vendorNumber + "'";
				//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
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
									name: "Material Number",
									template: {
										content: "{MATNR}"
									}
								}, {
									name: "Description",
									template: {
										content: "{MAKTX}"
									}
								}, {
									name: "Month",
									template: {
										content: "{PO_MONTH}"
									}
								}, {
									name: "Average Price",
									template: {
										content: "{NETPR}"
									}
								}]
							});
							oExport.saveFile().catch(function(oError) {
								MessageBox.show("Generate is not possible because no model was set in Material History", {
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