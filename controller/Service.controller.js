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
	return Controller.extend("com.sap.build.standard.prMock.controller.Service", {
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("Service").attachPatternMatched(this._onObjectMethod, this);
		},
		_onObjectMethod: function() {
			self = this;
			self.getView().byId("prTable").setVisible(false);
			self.getView().byId("downloadIdz").setVisible(false);
			self.getView().byId("fromDate").setValue(null);
			self.getView().byId("toDate").setValue(null);
			var oJModel1 = new sap.ui.model.json.JSONModel();
			oJModel1.setData("");
			self.getView().setModel(oJModel1, "rowCountPO");
			var abc = self.getView().getModel("rowCountPO");
			self.getView().byId("prTitle").setModel(abc, "data1");
		},

		onBackHome: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("DetailPage1");
		},
		onDetail: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Aging");
		},

		download: function(oEvent) {
			var fromdate = self.getView().byId("fromDate")._lastValue;
			var todate = self.getView().byId("toDate")._lastValue;

			if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
				MessageBox.show("Please Enter From Date and To Date", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error"
				});
				MessageBox.show("");
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
			
				   var fromdt = new Date(fromDateValue);*/
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

				var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
				var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

				var oHeaders = {
					'Accept': 'application/json',
					"X-Requested-With": "XMLHttpRequest",
					"Access-Control-Allow-Origin": "*"
				};

				var functionWithsFilter = "/praginglistSet?$filter=FROMDATE eq " + from + " and TODATE eq " + to;
				//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
				oDataModel.read(functionWithsFilter, {
					header: oHeaders,
					async: false,
					success: function(oData, response) {
						if (oData.results !== "undefined" || oData.results !== null) {
							self.getView().setModel(oData, "data1");
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
									name: "PO Number",
									template: {
										content: "{BANFN}",
										width: "25"
									}
								}, {
									name: "Created Date",
									template: {
										content: "{ERDAT}"
									}
								}, {
									name: "1st Approver",
									template: {
										content: "{NAME1}"
									}
								}, {
									name: "Approved On",
									template: {
										content: "{DATE1}"
									}
								}, {
									name: "2nd Approver",
									template: {
										content: "{NAME2}"
									}
								}, {
									name: "Approved On",
									template: {
										content: "{DATE2}"
									}
								}, {
									name: "3rd Approver",
									template: {
										content: "{NAME3}"
									}
								}, {
									name: "Approved On",
									template: {
										content: "{DATE3}"
									}
								}, {
									name: "3rd Approver",
									template: {
										content: "{NAME4}"
									}
								}, {
									name: "Approved On",
									template: {
										content: "{DATE4}"
									}
								}, {
									name: "3rd Approver",
									template: {
										content: "{NAME5}"
									}
								}, {
									name: "Approved On",
									template: {
										content: "{DATE5}"
									}
								}, {
									name: "Net Aging Days",
									template: {
										content: "{NETDAYS}"
									}
								}]
							});
							oExport.saveFile().catch(function(oError) {
								MessageBox.show("Generate is not possible beause no model was set in Aging List", {
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
			}
		},

		formatDate: function(date) {
			if (date === null) {
				return "";
			}

			var month_names = ["Jan", "Feb", "Mar",
				"Apr", "May", "Jun",
				"Jul", "Aug", "Sep",
				"Oct", "Nov", "Dec"
			];
			var dateValue = new Date(date);
			var actualDate = (month_names[dateValue.getMonth()]) + ' ' + dateValue.getDate() + ', ' + dateValue.getFullYear();
			return actualDate;
		},

		onSearch: function(oEvent) {
			var fromdate = self.getView().byId("fromDate")._lastValue;
			var todate = self.getView().byId("toDate")._lastValue;
			if (fromdate === null || fromdate === "" || fromdate === undefined || todate === null || todate === "" || todate === undefined) {
				MessageBox.show("Please Enter From Date and To Date", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error"
				});
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

				/* for date Example :  18.11.2018 */
				/* start */
				/*	var arr1 = fromdate.split('/');
					var fromDateValue = arr1[0] + "/" + arr1[1] + "/" + "20" + arr1[2];
					var arr2 = todate.split('/');
					var toDateValue = arr2[0] + "/" + arr2[1] + "/" + "20" + arr2[2];
					var todt = new Date(toDateValue);

					var fromdt = new Date(fromDateValue);  */
				/* End */

				/*for date Example :  Dec 18, 2018 --local and webide */
				/* start */

				var todt = new Date(todate);

				var fromdt = new Date(fromdate);

				/* End */

				var timeDiff = Math.abs(todt.getTime() - fromdt.getTime());
				var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
				if (diffDays > 365) {
					MessageBox.alert("Only 1 Year data available, Please check From Date and To Date");
					return;
				}

				if (todt < fromdt) {
					MessageToast.show("From Date can not be greater than To Date");
					self.getView().setModel("", "data");
					this.getView().byId("prTable").setVisible(false);
					this.getView().byId("downloadIdz").setVisible(false);
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

					var functionWithsFilter = "/praginglistSet?$filter=FROMDATE eq " + from + " and TODATE eq " + to;
					//	oDataModel.read("/AginglistSet?$filter=FROMDATE eq datetime'2018-09-01T00:00' and TODATE eq datetime'2018-10-10T00:00'", {
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
								oJModel1.setData("PR Aging List (" + oData.results.length + ")");
								self.getView().setModel(oJModel1, "rowCountPO");
								var abc = self.getView().getModel("rowCountPO");
								self.getView().byId("prTitle").setModel(abc, "data1");

								var oJModel2 = new sap.ui.model.json.JSONModel();
								oJModel2.setData(oData.results.length);
								self.getView().setModel(oJModel2, "data2");

								if (oData.results.length === 0) {
									self.getView().byId("downloadIdz").setVisible(false);
								} else {
									self.getView().byId("downloadIdz").setVisible(true);
								}
							}
						},
						error: function(error) {
							MessageToast.show("backend service data issue", {
								icon: sap.m.MessageBox.Icon.ERROR,
								title: "Error",
								details: error
							});
						}
					});
					self.getView().byId("prTable").setVisible(true);
					//	self.getView().byId("downloadIdz").setVisible(true);
				}
			}
		}

	});

});