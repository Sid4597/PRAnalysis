sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/ui/core/util/Export",
	"sap/ui/core/util/ExportTypeCSV",
	'sap/m/MessageBox'

], function(Controller, JSONModel, MessageToast, Export, ExportCSV, MessageBox) {
	"use strict";
	
	var self;
	return Controller.extend("com.sap.build.standard.prMock.controller.List", {
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("List").attachPatternMatched(this._onObjectMethod, this);
		},
		_onObjectMethod: function(oEvent) {
			/* For Week */
			self = this;
			var weekDetails = oEvent.getParameter("arguments").weekDetails;
			var details = weekDetails.split(":");
			var wk = details[0];
			var wknumber = details[1];
			var wknumberdetails = wk + wknumber;
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};

			var dataResultsweek = [];
			var currYear = new Date().getFullYear();
			if (wknumberdetails === "week1"|| wknumberdetails === "week2" || wknumberdetails === "week3"|| wknumberdetails === "week4" ||
				wknumberdetails === "week5"|| wknumberdetails === "week6" || wknumberdetails === "week7"|| wknumberdetails === "week8" ||
				wknumberdetails === "week9"|| wknumberdetails === "week10" || wknumberdetails === "week11"|| wknumberdetails === "week12" ||
				wknumberdetails === "week13"|| wknumberdetails === "week14" || wknumberdetails === "week15"|| wknumberdetails === "week16" ||
				wknumberdetails === "week17"|| wknumberdetails === "week18" || wknumberdetails === "week19"|| wknumberdetails === "week20" ||
				wknumberdetails === "week21"|| wknumberdetails === "week22" || wknumberdetails === "week23"|| wknumberdetails === "week24" ||
				wknumberdetails === "week25"|| wknumberdetails === "week26" || wknumberdetails === "week27"|| wknumberdetails === "week28" ||
				wknumberdetails === "week29"|| wknumberdetails === "week30" || wknumberdetails === "week31"|| wknumberdetails === "week32" ||
				wknumberdetails === "week33"|| wknumberdetails === "week34" || wknumberdetails === "week35"|| wknumberdetails === "week36" ||
				wknumberdetails === "week37"|| wknumberdetails === "week38" || wknumberdetails === "week39"|| wknumberdetails === "week40" ||
				wknumberdetails === "week41"|| wknumberdetails === "week42" || wknumberdetails === "week43"|| wknumberdetails === "week44" ||
				wknumberdetails === "week45"|| wknumberdetails === "week46" || wknumberdetails === "week47"|| wknumberdetails === "week48" ||
				wknumberdetails === "week49"|| wknumberdetails === "week50" || wknumberdetails === "week51"|| wknumberdetails === "week52"
				) {
					var zeroadd = ('0' + wknumber).slice(-2);
					var param = currYear + zeroadd;
					var functionWithsFilterWeek17 = "/PrListWeekSet('" + param + "')/PRListSet";
					oDataModel.read(functionWithsFilterWeek17, {
						header: oHeaders,
						success: function(oData, response) {
							if (oData.results !== "undefined" || oData.results !== null) {
								var count;
								for (count = 0; count < oData.results.length; count++) {
									var group = oData.results[count].EKGRP;
									if (group === "I04") {
										dataResultsweek.push(oData.results[count]);
									} else if (group === "I05") {
										dataResultsweek.push(oData.results[count]);
									} else if (group === "I06") {
										dataResultsweek.push(oData.results[count]);
									}
								}

							}
							//dataResultsweek.push(weekDetails);
							var oJModel = new sap.ui.model.json.JSONModel();
							oJModel.setData(dataResultsweek);
							oJModel.setSizeLimit(dataResultsweek.length);
							self.getView().setModel(oJModel, "data1");
							
							var oJModel1 = new sap.ui.model.json.JSONModel();
							oJModel1.setData(weekDetails);
							self.getView().setModel(oJModel1, "weekDetails");
							
							var oJModel2 = new sap.ui.model.json.JSONModel();
							oJModel2.setData(dataResultsweek.length);
							self.getView().setModel(oJModel2, "data2");
						},
						error: function(error) {
							MessageBox.show("Backend connection service data issue while getting the Data", {
							icon: sap.m.MessageBox.Icon.ERROR,
							title: "Error",
							details: error
						});
						}
					});
			}  else if (weekDetails === "01" || weekDetails === "02" || weekDetails === "03" || weekDetails === "04" || weekDetails === "05" ||
				weekDetails === "06" ||
				weekDetails === "07" || weekDetails === "08" || weekDetails === "09" || weekDetails === "10" || weekDetails === "11" ||
				weekDetails === "12") {
				param = currYear + weekDetails;
				var functionWithsFilterMonth = "/PrListMonthSet('" + param + "')/PRListSet";
				oDataModel.read(functionWithsFilterMonth, {
					header: oHeaders,
					success: function(oData, response) {
						if (oData.results !== "undefined" || oData.results !== null) {
							var count;
							for (count = 0; count < oData.results.length; count++) {
								var group = oData.results[count].EKGRP;
								if (group === "I04") {
									dataResultsweek.push(oData.results[count]);
								} else if (group === "I05") {
									dataResultsweek.push(oData.results[count]);
								} else if (group === "I06") {
									dataResultsweek.push(oData.results[count]);
								}
							}
						}
						//dataResultsweek.push(weekDetails);
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(dataResultsweek);
						oJModel.setSizeLimit(dataResultsweek.length);
						self.getView().setModel(oJModel, "data1");
						
						var oJModel1 = new sap.ui.model.json.JSONModel();
						oJModel1.setData(weekDetails);
						self.getView().setModel(oJModel1, "weekDetails");
						
						var oJModel2 = new sap.ui.model.json.JSONModel();
						oJModel2.setData(dataResultsweek.length);
						self.getView().setModel(oJModel2, "data2");
					},
					error: function(error) {
						MessageBox.show("Backend connection service data issue while getting the Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
					}
				});
			} else if (weekDetails === "" + currYear + "") {
				var functionWithsFilterYear = "/PrListYearSet('" + weekDetails + "')/PRListSet";
				oDataModel.read(functionWithsFilterYear, {
					header: oHeaders,
					success: function(oData, response) {
						if (oData.results !== "undefined" || oData.results !== null) {
							var count;
							for (count = 0; count < oData.results.length; count++) {
								var group = oData.results[count].EKGRP;
								if (group === "I04") {
									dataResultsweek.push(oData.results[count]);
								} else if (group === "I05") {
									dataResultsweek.push(oData.results[count]);
								} else if (group === "I06") {
									dataResultsweek.push(oData.results[count]);
								}
							}
						}
						//dataResultsweek.push(weekDetails);
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(dataResultsweek);
						oJModel.setSizeLimit(dataResultsweek.length);
						self.getView().setModel(oJModel, "data1");
						
						var oJModel1 = new sap.ui.model.json.JSONModel();
						oJModel1.setData(weekDetails);
						self.getView().setModel(oJModel1, "weekDetails");
						
						var oJModel2 = new sap.ui.model.json.JSONModel();
						oJModel2.setData(dataResultsweek.length);
						self.getView().setModel(oJModel2, "data2");
					},
					error: function(error) {
						MessageBox.show("Backend connection service data issue while getting the Data", {
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
		onBackHome: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View3");
		},
		navToItem: function(oEvent) {
			//var self = this;
			var weekdetails = self.getView().getModel("weekDetails").getData();
			var rowDetailsValues = oEvent.getSource().getBindingContext("data1").getObject();
			var oJModel = new sap.ui.model.json.JSONModel();
			oJModel.setData(rowDetailsValues);
			sap.ui.getCore().setModel(oJModel, "rowDetails");
			var array = [];
			var obj = {
				"TXZ01": rowDetailsValues.TXZ01,
				"MENGE": Math.trunc(rowDetailsValues.MENGE),
				"VALUE": rowDetailsValues.VALUE,
				"BANFN": rowDetailsValues.BANFN,
				"CURRENCY": rowDetailsValues.CURRENCY,
				"weekdetails": weekdetails
			};
			array.push(obj);
			var oRouter4 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter4.navTo("Item", {
				rowDetails: JSON.stringify(array)
			});
		}

	});

});