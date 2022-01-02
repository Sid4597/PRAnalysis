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
	return Controller.extend("com.sap.build.standard.prMock.controller.View3", {

		onBackHome: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("DetailPage1");
		},
		navToRevenue: function() {
			var oRouter1 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter1.navTo("Revenue");
		},
		navToService: function() {
			var oRouter2 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter2.navTo("Service");
		},
		navToCapSer: function() {
			var oRouter3 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter3.navTo("CapexService");
		},
		navToMonthJan: function() {
			var oRouter7 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter7.navTo("List", {
				weekDetails: "01"
			});
		},
		navToMonthfeb: function() {
			var oRouter8 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter8.navTo("List", {
				weekDetails: "02"
			});
		},
		navToMonthMar: function() {
			var oRouter9 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter9.navTo("List", {
				weekDetails: "03"
			});
		},
		navToMonthApr: function() {
			var oRouter10 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter10.navTo("List", {
				weekDetails: "04"
			});
		},
		navToMonthMay: function() {
			var oRouter11 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter11.navTo("List", {
				weekDetails: "05"
			});
		},
		navToMonthJun: function() {
			var oRouter12 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter12.navTo("List", {
				weekDetails: "06"
			});
		},
		navToMonthJul: function() {
			var oRouter13 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter13.navTo("List", {
				weekDetails: "07"
			});
		},
		navToMonthAug: function() {
			var oRouter14 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter14.navTo("List", {
				weekDetails: "08"
			});
		},
		navToMonthSep: function() {
			var oRouter15 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter15.navTo("List", {
				weekDetails: "09"
			});
		},
		navToMonthOct: function() {
			var oRouter4 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter4.navTo("List", {
				weekDetails: "10"
			});
		},
		navToMonthNov: function() {
			var oRouter16 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter16.navTo("List", {
				weekDetails: "11"
			});
		},
		navToMonthDec: function() {
			var oRouter17 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter17.navTo("List", {
				weekDetails: "12"
			});
		},
		navToYear: function() {
			var year = new Date().getFullYear();
			var oRouter17 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter17.navTo("List", {
				weekDetails: year
			});
		},
	navToWeek1: function() {
			var oRouter21 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter21.navTo("List", {
				weekDetails: "week:1"
			});
		},
		navToWeek2: function() {
			var oRouter22 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter22.navTo("List", {
				weekDetails: "week:2"
			});
		},
		navToWeek3: function() {
			var oRouter23 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter23.navTo("List", {
				weekDetails: "week:3"
			});
		},
		navToWeek4: function() {
			var oRouter24 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter24.navTo("List", {
				weekDetails: "week:4"
			});
		},
		navToWeek5: function() {
			var oRouter25 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter25.navTo("List", {
				weekDetails: "week:5"
			});
		},
		navToWeek6: function() {
			var oRouter26 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter26.navTo("List", {
				weekDetails: "week:6"
			});
		},
		navToWeek7: function() {
			var oRouter27 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter27.navTo("List", {
				weekDetails: "week:7"
			});
		},
		navToWeek8: function() {
			var oRouter28 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter28.navTo("List", {
				weekDetails: "week:8"
			});
		},
		navToWeek9: function() {
			var oRouter29 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter29.navTo("List", {
				weekDetails: "week:9"
			});
		},
		navToWeek10: function() {
			var oRouter30 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter30.navTo("List", {
				weekDetails: "week:10"
			});
		},
		
		navToWeek11: function() {
			var oRouter31 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter31.navTo("List", {
				weekDetails: "week:11"
			});
		},
		navToWeek12: function() {
			var oRouter32 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter32.navTo("List", {
				weekDetails: "week:12"
			});
		},
		navToWeek13: function() {
			var oRouter33 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter33.navTo("List", {
				weekDetails: "week:13"
			});
		},
		navToWeek14: function() {
			var oRouter34 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter34.navTo("List", {
				weekDetails: "week:14"
			});
		},
		navToWeek15: function() {
			var oRouter35 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter35.navTo("List", {
				weekDetails: "week:15"
			});
		},
		navToWeek16: function() {
			var oRouter36 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter36.navTo("List", {
				weekDetails: "week:16"
			});
		},
		navToWeek17: function() {
			var oRouter37 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter37.navTo("List", {
				weekDetails: "week:17"
			});
		},
		navToWeek18: function() {
			var oRouter38 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter38.navTo("List", {
				weekDetails: "week:18"
			});
		},
		navToWeek19: function() {
			var oRouter39 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter39.navTo("List", {
				weekDetails: "week:19"
			});
		},
		navToWeek20: function() {
			var oRouter40 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter40.navTo("List", {
				weekDetails: "week:20"
			});
		},
		navToWeek21: function() {
			var oRouter41 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter41.navTo("List", {
				weekDetails: "week:21"
			});
		},
		navToWeek22: function() {
			var oRouter42 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter42.navTo("List", {
				weekDetails: "week:22"
			});
		},
		navToWeek23: function() {
			var oRouter43 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter43.navTo("List", {
				weekDetails: "week:23"
			});
		},
		navToWeek24: function() {
			var oRouter44 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter44.navTo("List", {
				weekDetails: "week:24"
			});
		},
		navToWeek25: function() {
			var oRouter45 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter45.navTo("List", {
				weekDetails: "week:25"
			});
		},
		navToWeek26: function() {
			var oRouter46 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter46.navTo("List", {
				weekDetails: "week:26"
			});
		},
		navToWeek27: function() {
			var oRouter47 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter47.navTo("List", {
				weekDetails: "week:27"
			});
		},
		navToWeek28: function() {
			var oRouter48 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter48.navTo("List", {
				weekDetails: "week:28"
			});
		},
		navToWeek29: function() {
			var oRouter49 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter49.navTo("List", {
				weekDetails: "week:29"
			});
		},
		navToWeek30: function() {
			var oRouter50 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter50.navTo("List", {
				weekDetails: "week:30"
			});
		},
		navToWeek31: function() {
			var oRouter51 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter51.navTo("List", {
				weekDetails: "week:31"
			});
		},
		navToWeek32: function() {
			var oRouter52 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter52.navTo("List", {
				weekDetails: "week:32"
			});
		},
		navToWeek33: function() {
			var oRouter53 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter53.navTo("List", {
				weekDetails: "week:33"
			});
		},
		navToWeek34: function() {
			var oRouter54 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter54.navTo("List", {
				weekDetails: "week:34"
			});
		},
		navToWeek35: function() {
			var oRouter55 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter55.navTo("List", {
				weekDetails: "week:35"
			});
		},
		navToWeek36: function() {
			var oRouter56 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter56.navTo("List", {
				weekDetails: "week:36"
			});
		},
		navToWeek37: function() {
			var oRouter57 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter57.navTo("List", {
				weekDetails: "week:37"
			});
		},
		navToWeek38: function() {
			var oRouter58 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter58.navTo("List", {
				weekDetails: "week:38"
			});
		},
		navToWeek39: function() {
			var oRouter59 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter59.navTo("List", {
				weekDetails: "week:39"
			});
		},
		navToWeek40: function() {
			var oRouter60 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter60.navTo("List", {
				weekDetails: "week:40"
			});
		},
		navToWeek41: function() {
			var oRouter61 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter61.navTo("List", {
				weekDetails: "week:41"
			});
		},
		navToWeek42: function() {
			var oRouter62 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter62.navTo("List", {
				weekDetails: "week:42"
			});
		},
		navToWeek43: function() {
			var oRouter63 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter63.navTo("List", {
				weekDetails: "week:43"
			});
		},
		navToWeek44: function() {
			var oRouter64 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter64.navTo("List", {
				weekDetails: "week:44"
			});
		},
		navToWeek45: function() {
			var oRouter65 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter65.navTo("List", {
				weekDetails: "week:45"
			});
		},
		navToWeek46: function() {
			var oRouter66 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter66.navTo("List", {
				weekDetails: "week:46"
			});
		},
		navToWeek47: function() {
			var oRouter67 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter67.navTo("List", {
				weekDetails: "week:47"
			});
		},
		navToWeek48: function() {
			var oRouter68 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter68.navTo("List", {
				weekDetails: "week:48"
			});
		},
		navToWeek49: function() {
			var oRouter69 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter69.navTo("List", {
				weekDetails: "week:49"
			});
		},
		navToWeek50: function() {
			var oRouter70 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter70.navTo("List", {
				weekDetails: "week:50"
			});
		},
		navToWeek51: function() {
			var oRouter71 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter71.navTo("List", {
				weekDetails: "week:51"
			});
		},
		navToWeek52: function() {
			var oRouter72 = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter72.navTo("List", {
				weekDetails: "week:52"
			});
		},
		onInit: function() {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getRoute("View3").attachPatternMatched(this._onObjectMethod, this);
		},
		download: function() {
			//this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);

		},
		_onObjectMethod: function(oEvent) {
			/* For Week */
			self = this;
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};

			var functionWithsFilterWeek = "/PrListWeekSet";
			oDataModel.read(functionWithsFilterWeek, {
				header: oHeaders,
				success: function(oData, response) {

					if (oData.results !== "undefined" || oData.results !== null) {
						var count;
						var countPR1I04  = 0, countPR1I05  = 0, countPR1I06 = 0;  
						var countPR2I04  = 0, countPR2I05  = 0, countPR2I06 = 0;  
						var countPR3I04  = 0, countPR3I05  = 0, countPR3I06 = 0;  
						var countPR4I04  = 0, countPR4I05  = 0, countPR4I06 = 0;  
						var countPR5I04  = 0, countPR5I05  = 0, countPR5I06 = 0;  
						var countPR6I04  = 0, countPR6I05  = 0, countPR6I06 = 0;  
						var countPR7I04  = 0, countPR7I05  = 0, countPR7I06 = 0;  
						var countPR8I04  = 0, countPR8I05  = 0, countPR8I06 = 0;  
						var countPR9I04  = 0, countPR9I05  = 0, countPR9I06 = 0;  
						var countPR10I04 = 0, countPR10I05 = 0, countPR10I06 = 0; 
						var countPR11I04 = 0, countPR11I05 = 0, countPR11I06 = 0; 
						var countPR12I04 = 0, countPR12I05 = 0, countPR12I06 = 0; 
						var countPR13I04 = 0, countPR13I05 = 0, countPR13I06 = 0; 
						var countPR14I04 = 0, countPR14I05 = 0, countPR14I06 = 0; 
						var countPR15I04 = 0, countPR15I05 = 0, countPR15I06 = 0; 
						var countPR16I04 = 0, countPR16I05 = 0, countPR16I06 = 0; 
						var countPR17I04 = 0, countPR17I05 = 0, countPR17I06 = 0; 
						var countPR18I04 = 0, countPR18I05 = 0, countPR18I06 = 0; 
						var countPR19I04 = 0, countPR19I05 = 0, countPR19I06 = 0; 
						var countPR20I04 = 0, countPR20I05 = 0, countPR20I06 = 0; 
						var countPR21I04 = 0, countPR21I05 = 0, countPR21I06 = 0; 
						var countPR22I04 = 0, countPR22I05 = 0, countPR22I06 = 0; 
						var countPR23I04 = 0, countPR23I05 = 0, countPR23I06 = 0; 
						var countPR24I04 = 0, countPR24I05 = 0, countPR24I06 = 0; 
						var countPR25I04 = 0, countPR25I05 = 0, countPR25I06 = 0; 
						var countPR26I04 = 0, countPR26I05 = 0, countPR26I06 = 0; 
						var countPR27I04 = 0, countPR27I05 = 0, countPR27I06 = 0; 
						var countPR28I04 = 0, countPR28I05 = 0, countPR28I06 = 0; 
						var countPR29I04 = 0, countPR29I05 = 0, countPR29I06 = 0; 
						var countPR30I04 = 0, countPR30I05 = 0, countPR30I06 = 0; 
						var countPR31I04 = 0, countPR31I05 = 0, countPR31I06 = 0; 
						var countPR32I04 = 0, countPR32I05 = 0, countPR32I06 = 0; 
						var countPR33I04 = 0, countPR33I05 = 0, countPR33I06 = 0; 
						var countPR34I04 = 0, countPR34I05 = 0, countPR34I06 = 0; 
						var countPR35I04 = 0, countPR35I05 = 0, countPR35I06 = 0; 
						var countPR36I04 = 0, countPR36I05 = 0, countPR36I06 = 0; 
						var countPR37I04 = 0, countPR37I05 = 0, countPR37I06 = 0; 
						var countPR38I04 = 0, countPR38I05 = 0, countPR38I06 = 0; 
						var countPR39I04 = 0, countPR39I05 = 0, countPR39I06 = 0; 
						var countPR40I04 = 0, countPR40I05 = 0, countPR40I06 = 0; 
						var countPR41I04 = 0, countPR41I05 = 0, countPR41I06 = 0; 
						var countPR42I04 = 0, countPR42I05 = 0, countPR42I06 = 0; 
						var countPR43I04 = 0, countPR43I05 = 0, countPR43I06 = 0; 
						var countPR44I04 = 0, countPR44I05 = 0, countPR44I06 = 0; 
						var countPR45I04 = 0, countPR45I05 = 0, countPR45I06 = 0; 
						var countPR46I04 = 0, countPR46I05 = 0, countPR46I06 = 0; 
						var countPR47I04 = 0, countPR47I05 = 0, countPR47I06 = 0; 
						var countPR48I04 = 0, countPR48I05 = 0, countPR48I06 = 0; 
						var countPR49I04 = 0, countPR49I05 = 0, countPR49I06 = 0; 
						var countPR50I04 = 0, countPR50I05 = 0, countPR50I06 = 0; 
						var countPR51I04 = 0, countPR51I05 = 0, countPR51I06 = 0; 
						var countPR52I04 = 0, countPR52I05 = 0, countPR52I06 = 0;  
						for (count = 0; count < oData.results.length; count++) {
							var group = oData.results[count].EKGRP;
							var yearWeek = oData.results[count].WEEK;
							var year = yearWeek.slice(0, 4);
							var week = yearWeek.slice(4, 6);
						if (group === "I04") {
							if (week === "01" && oData.results[count].CNT_W !== "undefined") {
								countPR1I04 = countPR1I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "02" && oData.results[count].CNT_W !== "undefined") {
								countPR2I04 = countPR2I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "03" && oData.results[count].CNT_W !== "undefined") {
								countPR3I04 = countPR3I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "04" && oData.results[count].CNT_W !== "undefined") {
								countPR4I04 = countPR4I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "05" && oData.results[count].CNT_W !== "undefined") {
								countPR5I04 = countPR5I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "06" && oData.results[count].CNT_W !== "undefined") {
								countPR6I04 = countPR6I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "07" && oData.results[count].CNT_W !== "undefined") {
								countPR7I04 = countPR7I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "08" && oData.results[count].CNT_W !== "undefined") {
								countPR8I04 = countPR8I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "09" && oData.results[count].CNT_W !== "undefined") {
								countPR9I04 = countPR9I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "10" && oData.results[count].CNT_W !== "undefined") {
								countPR10I04 = countPR10I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "11" && oData.results[count].CNT_W !== "undefined") {
								countPR11I04 = countPR11I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "12" && oData.results[count].CNT_W !== "undefined") {
								countPR12I04 = countPR12I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "13" && oData.results[count].CNT_W !== "undefined") {
								countPR13I04 = countPR13I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "14" && oData.results[count].CNT_W !== "undefined") {
								countPR14I04 = countPR14I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "15" && oData.results[count].CNT_W !== "undefined") {
								countPR15I04 = countPR15I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "16" && oData.results[count].CNT_W !== "undefined") {
								countPR16I04 = countPR16I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "17" && oData.results[count].CNT_W !== "undefined") {
								countPR17I04 = countPR17I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "18" && oData.results[count].CNT_W !== "undefined") {
								countPR18I04 = countPR18I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "19" && oData.results[count].CNT_W !== "undefined") {
								countPR19I04 = countPR19I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "20" && oData.results[count].CNT_W !== "undefined") {
								countPR20I04 = countPR20I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "21" && oData.results[count].CNT_W !== "undefined") {
								countPR21I04 = countPR21I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "22" && oData.results[count].CNT_W !== "undefined") {
								countPR22I04 = countPR22I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "23" && oData.results[count].CNT_W !== "undefined") {
								countPR23I04 = countPR23I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "24" && oData.results[count].CNT_W !== "undefined") {
								countPR24I04 = countPR24I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "25" && oData.results[count].CNT_W !== "undefined") {
								countPR25I04 = countPR25I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "26" && oData.results[count].CNT_W !== "undefined") {
								countPR26I04 = countPR26I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "27" && oData.results[count].CNT_W !== "undefined") {
								countPR27I04 = countPR27I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "28" && oData.results[count].CNT_W !== "undefined") {
								countPR28I04 = countPR28I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "29" && oData.results[count].CNT_W !== "undefined") {
								countPR29I04 = countPR29I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "30" && oData.results[count].CNT_W !== "undefined") {
								countPR30I04 = countPR30I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "31" && oData.results[count].CNT_W !== "undefined") {
								countPR31I04 = countPR31I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "32" && oData.results[count].CNT_W !== "undefined") {
								countPR32I04 = countPR32I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "33" && oData.results[count].CNT_W !== "undefined") {
								countPR33I04 = countPR33I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "34" && oData.results[count].CNT_W !== "undefined") {
								countPR34I04 = countPR34I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "35" && oData.results[count].CNT_W !== "undefined") {
								countPR35I04 = countPR35I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "36" && oData.results[count].CNT_W !== "undefined") {
								countPR36I04 = countPR36I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "37" && oData.results[count].CNT_W !== "undefined") {
								countPR37I04 = countPR37I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "38" && oData.results[count].CNT_W !== "undefined") {
								countPR38I04 = countPR38I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "39" && oData.results[count].CNT_W !== "undefined") {
								countPR39I04 = countPR39I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "40" && oData.results[count].CNT_W !== "undefined") {
								countPR40I04 = countPR40I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "41" && oData.results[count].CNT_W !== "undefined") {
								countPR41I04 = countPR41I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "42" && oData.results[count].CNT_W !== "undefined") {
								countPR42I04 = countPR42I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "43" && oData.results[count].CNT_W !== "undefined") {
								countPR43I04 = countPR43I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "44" && oData.results[count].CNT_W !== "undefined") {
								countPR44I04 = countPR44I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "45" && oData.results[count].CNT_W !== "undefined") {
								countPR45I04 = countPR45I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "46" && oData.results[count].CNT_W !== "undefined") {
								countPR46I04 = countPR46I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "47" && oData.results[count].CNT_W !== "undefined") {
								countPR47I04 = countPR47I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "48" && oData.results[count].CNT_W !== "undefined") {
								countPR48I04 = countPR48I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "49" && oData.results[count].CNT_W !== "undefined") {
								countPR49I04 = countPR49I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "50" && oData.results[count].CNT_W !== "undefined") {
								countPR50I04 = countPR50I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "51" && oData.results[count].CNT_W !== "undefined") {
								countPR51I04 = countPR51I04 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "52" && oData.results[count].CNT_W !== "undefined") {
								countPR52I04 = countPR52I04 + Number(oData.results[count].CNT_W.trim());
							}
						} else if (oData.results[count].EKGRP === "I05") {
							if (week === "01" && oData.results[count].CNT_W !== "undefined") {
								countPR1I05 = countPR1I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "02" && oData.results[count].CNT_W !== "undefined") {
								countPR2I05 = countPR2I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "03" && oData.results[count].CNT_W !== "undefined") {
								countPR3I05 = countPR3I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "04" && oData.results[count].CNT_W !== "undefined") {
								countPR4I05 = countPR4I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "05" && oData.results[count].CNT_W !== "undefined") {
								countPR5I05 = countPR5I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "06" && oData.results[count].CNT_W !== "undefined") {
								countPR6I05 = countPR6I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "07" && oData.results[count].CNT_W !== "undefined") {
								countPR7I05 = countPR7I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "08" && oData.results[count].CNT_W !== "undefined") {
								countPR8I05 = countPR8I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "09" && oData.results[count].CNT_W !== "undefined") {
								countPR9I05 = countPR9I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "10" && oData.results[count].CNT_W !== "undefined") {
								countPR10I05 = countPR10I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "11" && oData.results[count].CNT_W !== "undefined") {
								countPR11I05 = countPR11I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "12" && oData.results[count].CNT_W !== "undefined") {
								countPR12I05 = countPR12I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "13" && oData.results[count].CNT_W !== "undefined") {
								countPR13I05 = countPR13I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "14" && oData.results[count].CNT_W !== "undefined") {
								countPR14I05 = countPR14I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "15" && oData.results[count].CNT_W !== "undefined") {
								countPR15I05 = countPR15I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "16" && oData.results[count].CNT_W !== "undefined") {
								countPR16I05 = countPR16I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "17" && oData.results[count].CNT_W !== "undefined") {
								countPR17I05 = countPR17I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "18" && oData.results[count].CNT_W !== "undefined") {
								countPR18I05 = countPR18I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "19" && oData.results[count].CNT_W !== "undefined") {
								countPR19I05 = countPR19I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "20" && oData.results[count].CNT_W !== "undefined") {
								countPR20I05 = countPR20I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "21" && oData.results[count].CNT_W !== "undefined") {
								countPR21I05 = countPR21I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "22" && oData.results[count].CNT_W !== "undefined") {
								countPR22I05 = countPR22I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "23" && oData.results[count].CNT_W !== "undefined") {
								countPR23I05 = countPR23I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "24" && oData.results[count].CNT_W !== "undefined") {
								countPR24I05 = countPR24I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "25" && oData.results[count].CNT_W !== "undefined") {
								countPR25I05 = countPR25I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "26" && oData.results[count].CNT_W !== "undefined") {
								countPR26I05 = countPR26I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "27" && oData.results[count].CNT_W !== "undefined") {
								countPR27I05 = countPR27I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "28" && oData.results[count].CNT_W !== "undefined") {
								countPR28I05 = countPR28I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "29" && oData.results[count].CNT_W !== "undefined") {
								countPR29I05 = countPR29I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "30" && oData.results[count].CNT_W !== "undefined") {
								countPR30I05 = countPR30I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "31" && oData.results[count].CNT_W !== "undefined") {
								countPR31I05 = countPR31I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "32" && oData.results[count].CNT_W !== "undefined") {
								countPR32I05 = countPR32I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "33" && oData.results[count].CNT_W !== "undefined") {
								countPR33I05 = countPR33I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "34" && oData.results[count].CNT_W !== "undefined") {
								countPR34I05 = countPR34I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "35" && oData.results[count].CNT_W !== "undefined") {
								countPR35I05 = countPR35I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "36" && oData.results[count].CNT_W !== "undefined") {
								countPR36I05 = countPR36I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "37" && oData.results[count].CNT_W !== "undefined") {
								countPR37I05 = countPR37I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "38" && oData.results[count].CNT_W !== "undefined") {
								countPR38I05 = countPR38I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "39" && oData.results[count].CNT_W !== "undefined") {
								countPR39I05 = countPR39I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "40" && oData.results[count].CNT_W !== "undefined") {
								countPR40I05 = countPR40I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "41" && oData.results[count].CNT_W !== "undefined") {
								countPR41I05 = countPR41I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "42" && oData.results[count].CNT_W !== "undefined") {
								countPR42I05 = countPR42I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "43" && oData.results[count].CNT_W !== "undefined") {
								countPR43I05 = countPR43I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "44" && oData.results[count].CNT_W !== "undefined") {
								countPR44I05 = countPR44I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "45" && oData.results[count].CNT_W !== "undefined") {
								countPR45I05 = countPR45I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "46" && oData.results[count].CNT_W !== "undefined") {
								countPR46I05 = countPR46I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "47" && oData.results[count].CNT_W !== "undefined") {
								countPR47I05 = countPR47I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "48" && oData.results[count].CNT_W !== "undefined") {
								countPR48I05 = countPR48I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "49" && oData.results[count].CNT_W !== "undefined") {
								countPR49I05 = countPR49I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "50" && oData.results[count].CNT_W !== "undefined") {
								countPR50I05 = countPR50I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "51" && oData.results[count].CNT_W !== "undefined") {
								countPR51I05 = countPR51I05 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "52" && oData.results[count].CNT_W !== "undefined") {
								countPR52I05 = countPR52I05 + Number(oData.results[count].CNT_W.trim());
							}
						} else if (oData.results[count].EKGRP === "I06") {
							if (week === "01" && oData.results[count].CNT_W !== "undefined") {
								countPR1I06 = countPR1I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "02" && oData.results[count].CNT_W !== "undefined") {
								countPR2I06 = countPR2I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "03" && oData.results[count].CNT_W !== "undefined") {
								countPR3I06 = countPR3I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "04" && oData.results[count].CNT_W !== "undefined") {
								countPR4I06 = countPR4I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "05" && oData.results[count].CNT_W !== "undefined") {
								countPR5I06 = countPR5I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "06" && oData.results[count].CNT_W !== "undefined") {
								countPR6I06 = countPR6I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "07" && oData.results[count].CNT_W !== "undefined") {
								countPR7I06 = countPR7I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "08" && oData.results[count].CNT_W !== "undefined") {
								countPR8I06 = countPR8I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "09" && oData.results[count].CNT_W !== "undefined") {
								countPR9I06 = countPR9I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "10" && oData.results[count].CNT_W !== "undefined") {
								countPR10I06 = countPR10I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "11" && oData.results[count].CNT_W !== "undefined") {
								countPR11I06 = countPR11I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "12" && oData.results[count].CNT_W !== "undefined") {
								countPR12I06 = countPR12I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "13" && oData.results[count].CNT_W !== "undefined") {
								countPR13I06 = countPR13I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "14" && oData.results[count].CNT_W !== "undefined") {
								countPR14I06 = countPR14I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "15" && oData.results[count].CNT_W !== "undefined") {
								countPR15I06 = countPR15I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "16" && oData.results[count].CNT_W !== "undefined") {
								countPR16I06 = countPR16I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "17" && oData.results[count].CNT_W !== "undefined") {
								countPR17I06 = countPR17I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "18" && oData.results[count].CNT_W !== "undefined") {
								countPR18I06 = countPR18I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "19" && oData.results[count].CNT_W !== "undefined") {
								countPR19I06 = countPR19I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "20" && oData.results[count].CNT_W !== "undefined") {
								countPR20I06 = countPR20I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "21" && oData.results[count].CNT_W !== "undefined") {
								countPR21I06 = countPR21I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "22" && oData.results[count].CNT_W !== "undefined") {
								countPR22I06 = countPR22I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "23" && oData.results[count].CNT_W !== "undefined") {
								countPR23I06 = countPR23I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "24" && oData.results[count].CNT_W !== "undefined") {
								countPR24I06 = countPR24I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "25" && oData.results[count].CNT_W !== "undefined") {
								countPR25I06 = countPR25I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "26" && oData.results[count].CNT_W !== "undefined") {
								countPR26I06 = countPR26I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "27" && oData.results[count].CNT_W !== "undefined") {
								countPR27I06 = countPR27I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "28" && oData.results[count].CNT_W !== "undefined") {
								countPR28I06 = countPR28I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "29" && oData.results[count].CNT_W !== "undefined") {
								countPR29I06 = countPR29I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "30" && oData.results[count].CNT_W !== "undefined") {
								countPR30I06 = countPR30I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "31" && oData.results[count].CNT_W !== "undefined") {
								countPR31I06 = countPR31I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "32" && oData.results[count].CNT_W !== "undefined") {
								countPR32I06 = countPR32I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "33" && oData.results[count].CNT_W !== "undefined") {
								countPR33I06 = countPR33I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "34" && oData.results[count].CNT_W !== "undefined") {
								countPR34I06 = countPR34I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "35" && oData.results[count].CNT_W !== "undefined") {
								countPR35I06 = countPR35I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "36" && oData.results[count].CNT_W !== "undefined") {
								countPR36I06 = countPR36I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "37" && oData.results[count].CNT_W !== "undefined") {
								countPR37I06 = countPR37I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "38" && oData.results[count].CNT_W !== "undefined") {
								countPR38I06 = countPR38I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "39" && oData.results[count].CNT_W !== "undefined") {
								countPR39I06 = countPR39I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "40" && oData.results[count].CNT_W !== "undefined") {
								countPR40I06 = countPR40I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "41" && oData.results[count].CNT_W !== "undefined") {
								countPR41I06 = countPR41I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "42" && oData.results[count].CNT_W !== "undefined") {
								countPR42I06 = countPR42I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "43" && oData.results[count].CNT_W !== "undefined") {
								countPR43I06 = countPR43I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "44" && oData.results[count].CNT_W !== "undefined") {
								countPR44I06 = countPR44I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "45" && oData.results[count].CNT_W !== "undefined") {
								countPR45I06 = countPR45I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "46" && oData.results[count].CNT_W !== "undefined") {
								countPR46I06 = countPR46I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "47" && oData.results[count].CNT_W !== "undefined") {
								countPR47I06 = countPR47I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "48" && oData.results[count].CNT_W !== "undefined") {
								countPR48I06 = countPR48I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "49" && oData.results[count].CNT_W !== "undefined") {
								countPR49I06 = countPR49I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "50" && oData.results[count].CNT_W !== "undefined") {
								countPR50I06 = countPR50I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "51" && oData.results[count].CNT_W !== "undefined") {
								countPR51I06 = countPR51I06 + Number(oData.results[count].CNT_W.trim());
							}
							if (week === "52" && oData.results[count].CNT_W !== "undefined") {
								countPR52I06 = countPR52I06 + Number(oData.results[count].CNT_W.trim());
							}
							}
						}
						var countWeek1 = countPR1I04 + countPR1I05 + countPR1I06;  
						var countWeek2 = countPR2I04 + countPR2I05 + countPR2I06;  
						var countWeek3 = countPR3I04 + countPR3I05 + countPR3I06;  
						var countWeek4 = countPR4I04 + countPR4I05 + countPR4I06;  
						var countWeek5 = countPR5I04 + countPR5I05 + countPR5I06;  
						var countWeek6 = countPR6I04 + countPR6I05 + countPR6I06;  
						var countWeek7 = countPR7I04 + countPR7I05 + countPR7I06;  
						var countWeek8 = countPR8I04 + countPR8I05 + countPR8I06;  
						var countWeek9 = countPR9I04 + countPR9I05 + countPR9I06;  
						var countWeek10 = countPR10I04 + countPR10I05 + countPR10I06; 
						var countWeek11 = countPR11I04 + countPR11I05 + countPR11I06; 
						var countWeek12 = countPR12I04 + countPR12I05 + countPR12I06; 
						var countWeek13 = countPR13I04 + countPR13I05 + countPR13I06; 
						var countWeek14 = countPR14I04 + countPR14I05 + countPR14I06; 
						var countWeek15 = countPR15I04 + countPR15I05 + countPR15I06; 
						var countWeek16 = countPR16I04 + countPR16I05 + countPR16I06; 
						var countWeek17 = countPR17I04 + countPR17I05 + countPR17I06; 
						var countWeek18 = countPR18I04 + countPR18I05 + countPR18I06; 
						var countWeek19 = countPR19I04 + countPR19I05 + countPR19I06; 
						var countWeek20 = countPR20I04 + countPR20I05 + countPR20I06; 
						var countWeek21 = countPR21I04 + countPR21I05 + countPR21I06; 
						var countWeek22 = countPR22I04 + countPR22I05 + countPR22I06; 
						var countWeek23 = countPR23I04 + countPR23I05 + countPR23I06; 
						var countWeek24 = countPR24I04 + countPR24I05 + countPR24I06; 
						var countWeek25 = countPR25I04 + countPR25I05 + countPR25I06; 
						var countWeek26 = countPR26I04 + countPR26I05 + countPR26I06; 
						var countWeek27 = countPR27I04 + countPR27I05 + countPR27I06; 
						var countWeek28 = countPR28I04 + countPR28I05 + countPR28I06; 
						var countWeek29 = countPR29I04 + countPR29I05 + countPR29I06; 
						var countWeek30 = countPR30I04 + countPR30I05 + countPR30I06; 
						var countWeek31 = countPR31I04 + countPR31I05 + countPR31I06; 
						var countWeek32 = countPR32I04 + countPR32I05 + countPR32I06; 
						var countWeek33 = countPR33I04 + countPR33I05 + countPR33I06; 
						var countWeek34 = countPR34I04 + countPR34I05 + countPR34I06; 
						var countWeek35 = countPR35I04 + countPR35I05 + countPR35I06; 
						var countWeek36 = countPR36I04 + countPR36I05 + countPR36I06; 
						var countWeek37 = countPR37I04 + countPR37I05 + countPR37I06; 
						var countWeek38 = countPR38I04 + countPR38I05 + countPR38I06; 
						var countWeek39 = countPR39I04 + countPR39I05 + countPR39I06; 
						var countWeek40 = countPR40I04 + countPR40I05 + countPR40I06; 
						var countWeek41 = countPR41I04 + countPR41I05 + countPR41I06; 
						var countWeek42 = countPR42I04 + countPR42I05 + countPR42I06; 
						var countWeek43 = countPR43I04 + countPR43I05 + countPR43I06; 
						var countWeek44 = countPR44I04 + countPR44I05 + countPR44I06; 
						var countWeek45 = countPR45I04 + countPR45I05 + countPR45I06; 
						var countWeek46 = countPR46I04 + countPR46I05 + countPR46I06; 
						var countWeek47 = countPR47I04 + countPR47I05 + countPR47I06; 
						var countWeek48 = countPR48I04 + countPR48I05 + countPR48I06; 
						var countWeek49 = countPR49I04 + countPR49I05 + countPR49I06; 
						var countWeek50 = countPR50I04 + countPR50I05 + countPR50I06; 
						var countWeek51 = countPR51I04 + countPR51I05 + countPR51I06; 
						var countWeek52 = countPR52I04 + countPR52I05 + countPR52I06; 
						var rowCountDetails = [{
							"CountPR1I04" : countPR1I04 ,   
							"CountPR2I04" : countPR2I04 ,   
							"CountPR3I04" : countPR3I04 ,   
							"CountPR4I04" : countPR4I04 ,   
							"CountPR5I04" : countPR5I04 ,   
							"CountPR6I04" : countPR6I04 ,   
							"CountPR7I04" : countPR7I04 ,   
							"CountPR8I04" : countPR8I04 ,   
							"CountPR9I04" : countPR9I04 ,   
							"CountPR10I04" : countPR10I04,   
							"CountPR11I04" : countPR11I04,   
							"CountPR12I04" : countPR12I04,   
							"CountPR13I04" : countPR13I04,   
							"CountPR14I04" : countPR14I04,   
							"CountPR15I04" : countPR15I04,   
							"CountPR16I04" : countPR16I04,   
							"CountPR17I04" : countPR17I04,   
							"CountPR18I04" : countPR18I04,   
							"CountPR19I04" : countPR19I04,   
							"CountPR20I04" : countPR20I04,   
							"CountPR21I04" : countPR21I04,   
							"CountPR22I04" : countPR22I04,   
							"CountPR23I04" : countPR23I04,   
							"CountPR24I04" : countPR24I04,   
							"CountPR25I04" : countPR25I04,   
							"CountPR26I04" : countPR26I04,   
							"CountPR27I04" : countPR27I04,   
							"CountPR28I04" : countPR28I04,   
							"CountPR29I04" : countPR29I04,   
							"CountPR30I04" : countPR30I04,   
							"CountPR31I04" : countPR31I04,   
							"CountPR32I04" : countPR32I04,   
							"CountPR33I04" : countPR33I04,   
							"CountPR34I04" : countPR34I04,   
							"CountPR35I04" : countPR35I04,   
							"CountPR36I04" : countPR36I04,   
							"CountPR37I04" : countPR37I04,   
							"CountPR38I04" : countPR38I04,   
							"CountPR39I04" : countPR39I04,   
							"CountPR40I04" : countPR40I04,   
							"CountPR41I04" : countPR41I04,   
							"CountPR42I04" : countPR42I04,   
							"CountPR43I04" : countPR43I04,   
							"CountPR44I04" : countPR44I04,   
							"CountPR45I04" : countPR45I04,   
							"CountPR46I04" : countPR46I04,   
							"CountPR47I04" : countPR47I04,   
							"CountPR48I04" : countPR48I04,   
							"CountPR49I04" : countPR49I04,   
							"CountPR50I04" : countPR50I04,   
							"CountPR51I04" : countPR51I04,   
							"CountPR52I04" : countPR52I04,   
							"CountPR1I05" : countPR1I05 ,
							"CountPR2I05" : countPR2I05 ,
							"CountPR3I05" : countPR3I05 ,
							"CountPR4I05" : countPR4I05 ,
							"CountPR5I05" : countPR5I05 ,
							"CountPR6I05" : countPR6I05 ,
							"CountPR7I05" : countPR7I05 ,
							"CountPR8I05" : countPR8I05 ,
							"CountPR9I05" : countPR9I05 ,
							"CountPR10I05" : countPR10I05,
							"CountPR11I05" : countPR11I05,
							"CountPR12I05" : countPR12I05,
							"CountPR13I05" : countPR13I05,
							"CountPR14I05" : countPR14I05,
							"CountPR15I05" : countPR15I05,
							"CountPR16I05" : countPR16I05,
							"CountPR17I05" : countPR17I05,
							"CountPR18I05" : countPR18I05,
							"CountPR19I05" : countPR19I05,
							"CountPR20I05" : countPR20I05,
							"CountPR21I05" : countPR21I05,
							"CountPR22I05" : countPR22I05,
							"CountPR23I05" : countPR23I05,
							"CountPR24I05" : countPR24I05,
							"CountPR25I05" : countPR25I05,
							"CountPR26I05" : countPR26I05,
							"CountPR27I05" : countPR27I05,
							"CountPR28I05" : countPR28I05,
							"CountPR29I05" : countPR29I05,
							"CountPR30I05" : countPR30I05,
							"CountPR31I05" : countPR31I05,
							"CountPR32I05" : countPR32I05,
							"CountPR33I05" : countPR33I05,
							"CountPR34I05" : countPR34I05,
							"CountPR35I05" : countPR35I05,
							"CountPR36I05" : countPR36I05,
							"CountPR37I05" : countPR37I05,
							"CountPR38I05" : countPR38I05,
							"CountPR39I05" : countPR39I05,
							"CountPR40I05" : countPR40I05,
							"CountPR41I05" : countPR41I05,
							"CountPR42I05" : countPR42I05,
							"CountPR43I05" : countPR43I05,
							"CountPR44I05" : countPR44I05,
							"CountPR45I05" : countPR45I05,
							"CountPR46I05" : countPR46I05,
							"CountPR47I05" : countPR47I05,
							"CountPR48I05" : countPR48I05,
							"CountPR49I05" : countPR49I05,
							"CountPR50I05" : countPR50I05,
							"CountPR51I05" : countPR51I05,
							"CountPR52I05" : countPR52I05,
							"CountPR1I06" : countPR1I06,
							"CountPR2I06" : countPR2I06,
							"CountPR3I06" : countPR3I06,
							"CountPR4I06" : countPR4I06,
							"CountPR5I06" : countPR5I06,
							"CountPR6I06" : countPR6I06,
							"CountPR7I06" : countPR7I06,
							"CountPR8I06" : countPR8I06,
							"CountPR9I06" : countPR9I06,
							"CountPR10I06" : countPR10I06,
							"CountPR11I06" : countPR11I06,
							"CountPR12I06" : countPR12I06,
							"CountPR13I06" : countPR13I06,
							"CountPR14I06" : countPR14I06,
							"CountPR15I06" : countPR15I06,
							"CountPR16I06" : countPR16I06,
							"CountPR17I06" : countPR17I06,
							"CountPR18I06" : countPR18I06,
							"CountPR19I06" : countPR19I06,
							"CountPR20I06" : countPR20I06,
							"CountPR21I06" : countPR21I06,
							"CountPR22I06" : countPR22I06,
							"CountPR23I06" : countPR23I06,
							"CountPR24I06" : countPR24I06,
							"CountPR25I06" : countPR25I06,
							"CountPR26I06" : countPR26I06,
							"CountPR27I06" : countPR27I06,
							"CountPR28I06" : countPR28I06,
							"CountPR29I06" : countPR29I06,
							"CountPR30I06" : countPR30I06,
							"CountPR31I06" : countPR31I06,
							"CountPR32I06" : countPR32I06,
							"CountPR33I06" : countPR33I06,
							"CountPR34I06" : countPR34I06,
							"CountPR35I06" : countPR35I06,
							"CountPR36I06" : countPR36I06,
							"CountPR37I06" : countPR37I06,
							"CountPR38I06" : countPR38I06,
							"CountPR39I06" : countPR39I06,
							"CountPR40I06" : countPR40I06,
							"CountPR41I06" : countPR41I06,
							"CountPR42I06" : countPR42I06,
							"CountPR43I06" : countPR43I06,
							"CountPR44I06" : countPR44I06,
							"CountPR45I06" : countPR45I06,
							"CountPR46I06" : countPR46I06,
							"CountPR47I06" : countPR47I06,
							"CountPR48I06" : countPR48I06,
							"CountPR49I06" : countPR49I06,
							"CountPR50I06" : countPR50I06,
							"CountPR51I06" : countPR51I06,
							"CountPR52I06" : countPR52I06,
							"CountWeek1" : countWeek1,
							"CountWeek2" : countWeek2,
							"CountWeek3" : countWeek3,
							"CountWeek4" : countWeek4,
							"CountWeek5" : countWeek5,
							"CountWeek6" : countWeek6,
							"CountWeek7" : countWeek7,
							"CountWeek8" : countWeek8,
							"CountWeek9" : countWeek9,
							"CountWeek10": countWeek10,
							"CountWeek11": countWeek11,
							"CountWeek12": countWeek12,
							"CountWeek13": countWeek13,
							"CountWeek14": countWeek14,
							"CountWeek15": countWeek15,
							"CountWeek16": countWeek16,
							"CountWeek17": countWeek17,
							"CountWeek18": countWeek18,
							"CountWeek19": countWeek19,
							"CountWeek20": countWeek20,
							"CountWeek21": countWeek21,
							"CountWeek22": countWeek22,
							"CountWeek23": countWeek23,
							"CountWeek24": countWeek24,
							"CountWeek25": countWeek25,
							"CountWeek26": countWeek26,
							"CountWeek27": countWeek27,
							"CountWeek28": countWeek28,
							"CountWeek29": countWeek29,
							"CountWeek30": countWeek30,
							"CountWeek31": countWeek31,
							"CountWeek32": countWeek32,
							"CountWeek33": countWeek33,
							"CountWeek34": countWeek34,
							"CountWeek35": countWeek35,
							"CountWeek36": countWeek36,
							"CountWeek37": countWeek37,
							"CountWeek38": countWeek38,
							"CountWeek39": countWeek39,
							"CountWeek40": countWeek40,
							"CountWeek41": countWeek41,
							"CountWeek42": countWeek42,
							"CountWeek43": countWeek43,
							"CountWeek44": countWeek44,
							"CountWeek45": countWeek45,
							"CountWeek46": countWeek46,
							"CountWeek47": countWeek47,
							"CountWeek48": countWeek48,
							"CountWeek49": countWeek49,
							"CountWeek50": countWeek50,
							"CountWeek51": countWeek51,
							"CountWeek52": countWeek52,
							"Year": year

						}];
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(rowCountDetails[0]);
						self.getView().setModel(oJModel, "data1");
						
						if(oData.results.length === 0){
							self.getView().byId("downloadIdzWeek").setVisible(false);
						}else{
							self.getView().byId("downloadIdzWeek").setVisible(true);
						}

					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Weekly Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});

			/* For Month */
			var functionWithsFilterMonth = "/PrListMonthSet";
			oDataModel.read(functionWithsFilterMonth, {
				header: oHeaders,
				success: function(oData, response) {
					if (oData.results !== "undefined" || oData.results !== null) {
						var count;
						var countPRI0401 = 0,
							countPRI0402 = 0,
							countPRI0403 = 0,
							countPRI0404 = 0,
							countPRI0405 = 0,
							countPRI0406 = 0,
							countPRI0407 = 0,
							countPRI0408 = 0,
							countPRI0409 = 0,
							countPRI0410 = 0,
							countPRI0411 = 0,
							countPRI0412 = 0;
						var countPRI0501 = 0,
							countPRI0502 = 0,
							countPRI0503 = 0,
							countPRI0504 = 0,
							countPRI0505 = 0,
							countPRI0506 = 0,
							countPRI0507 = 0,
							countPRI0508 = 0,
							countPRI0509 = 0,
							countPRI0510 = 0,
							countPRI0511 = 0,
							countPRI0512 = 0;
						var countPRI0601 = 0,
							countPRI0602 = 0,
							countPRI0603 = 0,
							countPRI0604 = 0,
							countPRI0605 = 0,
							countPRI0606 = 0,
							countPRI0607 = 0,
							countPRI0608 = 0,
							countPRI0609 = 0,
							countPRI0610 = 0,
							countPRI0611 = 0,
							countPRI0612 = 0;
						for (count = 0; count < oData.results.length; count++) {
							var group = oData.results[count].EKGRP;
							var yearMonth = oData.results[count].MONTH;
							var year = yearMonth.slice(0, 4);
							var month = yearMonth.slice(4, 6);
							if (group === "I04") {
								if (month === "01" && oData.results[count].CNT_M !== "undefined") {
									countPRI0401 = countPRI0401 + Number(oData.results[count].CNT_M);
								} else if (month === "02" && oData.results[count].CNT_M !== "undefined") {
									countPRI0402 = countPRI0402 + Number(oData.results[count].CNT_M);
								} else if (month === "03" && oData.results[count].CNT_M !== "undefined") {
									countPRI0403 = countPRI0403 + Number(oData.results[count].CNT_M);
								} else if (month === "04" && oData.results[count].CNT_M !== "undefined") {
									countPRI0404 = countPRI0404 + Number(oData.results[count].CNT_M);
								} else if (month === "05" && oData.results[count].CNT_M !== "undefined") {
									countPRI0405 = countPRI0405 + Number(oData.results[count].CNT_M);
								} else if (month === "06" && oData.results[count].CNT_M !== "undefined") {
									countPRI0406 = countPRI0406 + Number(oData.results[count].CNT_M);
								} else if (month === "07" && oData.results[count].CNT_M !== "undefined") {
									countPRI0407 = countPRI0407 + Number(oData.results[count].CNT_M);
								} else if (month === "08" && oData.results[count].CNT_M !== "undefined") {
									countPRI0408 = countPRI0408 + Number(oData.results[count].CNT_M);
								} else if (month === "09" && oData.results[count].CNT_M !== "undefined") {
									countPRI0409 = countPRI0409 + Number(oData.results[count].CNT_M);
								} else if (month === "10" && oData.results[count].CNT_M !== "undefined") {
									countPRI0410 = countPRI0410 + Number(oData.results[count].CNT_M);
								} else if (month === "11" && oData.results[count].CNT_M !== "undefined") {
									countPRI0411 = countPRI0411 + Number(oData.results[count].CNT_M);
								} else if (month === "12" && oData.results[count].CNT_M !== "undefined") {
									countPRI0412 = countPRI0412 + Number(oData.results[count].CNT_M);
								}
							} else if (oData.results[count].EKGRP === "I05") {
								if (month === "01" && oData.results[count].CNT_M !== "undefined") {
									countPRI0501 = countPRI0501 + Number(oData.results[count].CNT_M);
								} else if (month === "02" && oData.results[count].CNT_M !== "undefined") {
									countPRI0502 = countPRI0502 + Number(oData.results[count].CNT_M);
								} else if (month === "03" && oData.results[count].CNT_M !== "undefined") {
									countPRI0503 = countPRI0503 + Number(oData.results[count].CNT_M);
								} else if (month === "04" && oData.results[count].CNT_M !== "undefined") {
									countPRI0504 = countPRI0504 + Number(oData.results[count].CNT_M);
								} else if (month === "05" && oData.results[count].CNT_M !== "undefined") {
									countPRI0505 = countPRI0505 + Number(oData.results[count].CNT_M);
								} else if (month === "06" && oData.results[count].CNT_M !== "undefined") {
									countPRI0506 = countPRI0506 + Number(oData.results[count].CNT_M);
								} else if (month === "07" && oData.results[count].CNT_M !== "undefined") {
									countPRI0507 = countPRI0507 + Number(oData.results[count].CNT_M);
								} else if (month === "08" && oData.results[count].CNT_M !== "undefined") {
									countPRI0508 = countPRI0508 + Number(oData.results[count].CNT_M);
								} else if (month === "09" && oData.results[count].CNT_M !== "undefined") {
									countPRI0509 = countPRI0509 + Number(oData.results[count].CNT_M);
								} else if (month === "10" && oData.results[count].CNT_M !== "undefined") {
									countPRI0510 = countPRI0510 + Number(oData.results[count].CNT_M);
								} else if (month === "11" && oData.results[count].CNT_M !== "undefined") {
									countPRI0511 = countPRI0511 + Number(oData.results[count].CNT_M);
								} else if (month === "12" && oData.results[count].CNT_M !== "undefined") {
									countPRI0512 = countPRI0512 + Number(oData.results[count].CNT_M);
								}
							} else if (oData.results[count].EKGRP === "I06") {
								if (month === "01" && oData.results[count].CNT_M !== "undefined") {
									countPRI0601 = countPRI0601 + Number(oData.results[count].CNT_M);
								} else if (month === "02" && oData.results[count].CNT_M !== "undefined") {
									countPRI0602 = countPRI0602 + Number(oData.results[count].CNT_M);
								} else if (month === "03" && oData.results[count].CNT_M !== "undefined") {
									countPRI0603 = countPRI0603 + Number(oData.results[count].CNT_M);
								} else if (month === "04" && oData.results[count].CNT_M !== "undefined") {
									countPRI0604 = countPRI0604 + Number(oData.results[count].CNT_M);
								} else if (month === "05" && oData.results[count].CNT_M !== "undefined") {
									countPRI0605 = countPRI0605 + Number(oData.results[count].CNT_M);
								} else if (month === "06" && oData.results[count].CNT_M !== "undefined") {
									countPRI0606 = countPRI0606 + Number(oData.results[count].CNT_M);
								} else if (month === "07" && oData.results[count].CNT_M !== "undefined") {
									countPRI0607 = countPRI0607 + Number(oData.results[count].CNT_M);
								} else if (month === "08" && oData.results[count].CNT_M !== "undefined") {
									countPRI0608 = countPRI0608 + Number(oData.results[count].CNT_M);
								} else if (month === "09" && oData.results[count].CNT_M !== "undefined") {
									countPRI0609 = countPRI0609 + Number(oData.results[count].CNT_M);
								} else if (month === "10" && oData.results[count].CNT_M !== "undefined") {
									countPRI0610 = countPRI0610 + Number(oData.results[count].CNT_M);
								} else if (month === "11" && oData.results[count].CNT_M !== "undefined") {
									countPRI0611 = countPRI0611 + Number(oData.results[count].CNT_M);
								} else if (month === "12" && oData.results[count].CNT_M !== "undefined") {
									countPRI0612 = countPRI0612 + Number(oData.results[count].CNT_M);
								}
							}
						}
						var countJan = countPRI0401 + countPRI0501 + countPRI0601;
						var countFeb = countPRI0402 + countPRI0502 + countPRI0602;
						var countMar = countPRI0403 + countPRI0503 + countPRI0603;
						var countApr = countPRI0404 + countPRI0504 + countPRI0604;
						var countMay = countPRI0405 + countPRI0505 + countPRI0605;
						var countJun = countPRI0406 + countPRI0506 + countPRI0606;
						var countJul = countPRI0407 + countPRI0507 + countPRI0607;
						var countAug = countPRI0408 + countPRI0508 + countPRI0608;
						var countSep = countPRI0409 + countPRI0509 + countPRI0609;
						var countOct = countPRI0410 + countPRI0510 + countPRI0610;
						var countNov = countPRI0411 + countPRI0511 + countPRI0611;
						var countDec = countPRI0412 + countPRI0512 + countPRI0612;
						var rowCountDetailsMonth = [{
							"I04Jan": countPRI0401,
							"I04Feb": countPRI0402,
							"I04Mar": countPRI0403,
							"I04Apr": countPRI0404,
							"I04May": countPRI0405,
							"I04Jun": countPRI0406,
							"I04Jul": countPRI0407,
							"I04Aug": countPRI0408,
							"I04Sep": countPRI0409,
							"I04Oct": countPRI0410,
							"I04Nov": countPRI0411,
							"I04Dec": countPRI0412,
							"I05Jan": countPRI0501,
							"I05Feb": countPRI0502,
							"I05Mar": countPRI0503,
							"I05Apr": countPRI0504,
							"I05May": countPRI0505,
							"I05Jun": countPRI0506,
							"I05Jul": countPRI0507,
							"I05Aug": countPRI0508,
							"I05Sep": countPRI0509,
							"I05Oct": countPRI0510,
							"I05Nov": countPRI0511,
							"I05Dec": countPRI0512,
							"I06Jan": countPRI0601,
							"I06Feb": countPRI0602,
							"I06Mar": countPRI0603,
							"I06Apr": countPRI0604,
							"I06May": countPRI0605,
							"I06Jun": countPRI0606,
							"I06Jul": countPRI0607,
							"I06Aug": countPRI0608,
							"I06Sep": countPRI0609,
							"I06Oct": countPRI0610,
							"I06Nov": countPRI0611,
							"I06Dec": countPRI0612,
							"CountJan": countJan,
							"CountFeb": countFeb,
							"CountMar": countMar,
							"CountApr": countApr,
							"CountMay": countMay,
							"CountJun": countJun,
							"CountJul": countJul,
							"CountAug": countAug,
							"CountSep": countSep,
							"CountOct": countOct,
							"CountNov": countNov,
							"CountDec": countDec,
							"Year": year

						}];
						var oJModel = new sap.ui.model.json.JSONModel();
						oJModel.setData(rowCountDetailsMonth[0]);
						self.getView().setModel(oJModel, "data2");
						
						if(oData.results.length === 0){
							self.getView().byId("downloadIdzMonth").setVisible(false);
						}else{
							self.getView().byId("downloadIdzMonth").setVisible(true);
						}

					}
				},
				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Week Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}
			});

			/*For Year*/
			var functionWithsFilterYear = "/PrListYearSet";
			oDataModel.read(functionWithsFilterYear, {
				header: oHeaders,
				success: function(oData, response) {

					if (oData.results !== "undefined" || oData.results !== null) {
						var count;
						var currYear = "" + new Date().getFullYear() + "";
						var countPRI04 = 0,
							countPRI05 = 0,
							countPRI06 = 0;
						for (count = 0; count < oData.results.length; count++) {
							var group = oData.results[count].EKGRP;
							var year1 = oData.results[count].YEAR;
							var year = year1.slice(0, 4);
							//var month = yearMonth.slice(4, 6);
							if (group === "I04") {
								if (year === currYear) {
									countPRI04 = countPRI04 + Number(oData.results[count].CNT_Y);
								}
							} else if (oData.results[count].EKGRP === "I05") {
								if (year === currYear) {
									countPRI05 = countPRI05 + Number(oData.results[count].CNT_Y);
								}
							} else if (oData.results[count].EKGRP === "I06") {
								if (year === currYear) {
									countPRI06 = countPRI06 + Number(oData.results[count].CNT_Y);
								}
							}
						}
					}
					var tcount = countPRI04 + countPRI05 + countPRI06;

					var rowCountDetailsYear = [{
						"I04Year": countPRI04,
						"I05Year": countPRI05,
						"I06Year": countPRI06,
						"CountYear": tcount,
						"Year": year

					}];
					var oJModel = new sap.ui.model.json.JSONModel();
					oJModel.setData(rowCountDetailsYear[0]);
					self.getView().setModel(oJModel, "data3");
					
					if(oData.results.length === 0){
							self.getView().byId("downloadIdzYear").setVisible(false);
						}else{
							self.getView().byId("downloadIdzYear").setVisible(true);
						}

				},

				error: function(error) {
					MessageBox.show("Backend connection service data issue while getting Year Data", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
					});
				}

			});

		},

		downloadWeekly: function() {
			/* For Week */
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};
			var dataResultsweek = [];
			var currYear = new Date().getFullYear();
			var abc;
			for (abc = 1; abc <= 52; abc++) {
				var zeroadd = ('0' + abc).slice(-2);
				var param = currYear + zeroadd;
				var functionWithsFilterWeek17 = "/PrListWeekSet('" + param + "')/PRListSet";
				oDataModel.read(functionWithsFilterWeek17, {
					header: oHeaders,
					async: false,
					success: function(oData, response) {
						if (oData.results !== "undefined" || oData.results !== null) {
							var count;
							for (count = 0; count < oData.results.length; count++) {
								var group = oData.results[count].EKGRP;
								var yearWeek = oData.results[count].WEEK;
								//var week = yearWeek.slice(4, 6);
								if (group === "I04") {
									dataResultsweek.push(oData.results[count]);
									/*if (week <= 17) {
										dataResultsweek.push(oData.results[count]);
									}*/
								} else if (group === "I05") {
									dataResultsweek.push(oData.results[count]);
									/*if (week <= 17) {
										dataResultsweek.push(oData.results[count]);
									}*/
								} else if (group === "I06") {
									dataResultsweek.push(oData.results[count]);
									/*if (week <= 17) {
										dataResultsweek.push(oData.results[count]);
									}*/
								}
							}

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
			var oModel = new sap.ui.model.json.JSONModel(dataResultsweek);
			var oExport = new Export({
				exportType: new ExportCSV({

					separatorChar: "\t",

					mimeType: "application/vnd.ms-excel",

					charset: "utf-8",

					fileExtension: "xls"

				}),
				models: oModel,

				rows: {
					path: "/"
				},
				columns: [{
					name: "PR No",
					template: {
						content: "{BANFN}"
					}
				}, {
					name: "Creation Date",
					template: {
						content: "{ERDAT}"
					}
				}, {
					name: "Created by",
					template: {
						content: "{ERNAM}"
					}
				}, {
					name: "Category Name",
					template: {
						content: "{EKNAM}"
					}
				},{
					name: "Category",
					template: {
						content: "{EKGRP}"
					}
				}, {
					name: "Description",
					template: {
						content: "{TXZ01}"
					}
				}, {
					name: "Quantity",
					template: {
						content: "{MENGE}"
					}
				}, {
					name: "Total Price",
					template: {
						content: "{VALUE}"
					}
				}]
			});
			oExport.saveFile().catch(function(oError) {
				MessageBox.show("Generate is not possible beause no model was set in PR List", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error",
					details: oError
				});
			}).then(function() {
				oExport.destroy();
			});
		},
		downloadMonthly: function() {
			/* For Week */
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};
			var dataResultsweek = [];
			var currYear = new Date().getFullYear();
			var abc;
			for (abc = 1; abc <= 12; abc++) {
				var zeroadd = ('0' + abc).slice(-2);
				var param = currYear + zeroadd;
				var functionWithsFilterMonth = "/PrListMonthSet('" + param + "')/PRListSet";
				oDataModel.read(functionWithsFilterMonth, {
					header: oHeaders,
					async: false,
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
					},
					error: function(error) {
						MessageBox.show("Generate is not possible beause no model was set ", {
						icon: sap.m.MessageBox.Icon.ERROR,
						title: "Error",
						details: error
				});
					}
				});

			}
			var oModelMonthly = new sap.ui.model.json.JSONModel(dataResultsweek);
			var oExport = new Export({
				exportType: new ExportCSV({

					separatorChar: "\t",

					mimeType: "application/vnd.ms-excel",

					charset: "utf-8",

					fileExtension: "xls"

				}),
				models: oModelMonthly,

				rows: {
					path: "/"
				},
				columns: [{
					name: "PR No",
					template: {
						content: "{BANFN}"
					}
				}, {
					name: "Creation Date",
					template: {
						content: "{ERDAT}"
					}
				}, {
					name: "Created by",
					template: {
						content: "{ERNAM}"
					}
				}, {
					name: "Category Name",
					template: {
						content: "{EKNAM}"
					}
				},{
					name: "Category",
					template: {
						content: "{EKGRP}"
					}
				}, {
					name: "Description",
					template: {
						content: "{TXZ01}"
					}
				}, {
					name: "Quantity",
					template: {
						content: "{MENGE}"
					}
				}, {
					name: "Total Price",
					template: {
						content: "{VALUE}"
					}
				}]
			});
			oExport.saveFile().catch(function(oError) {
				MessageBox.show("Generate is not possible beause no model was set", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error",
					details: oError
				});
			}).then(function() {
				oExport.destroy();
			});
		},
		downloadYearly: function() {
			/* For Week */
			var sURI = "/sap/opu/odata/AAG362/MM_PR_ANALYSIS_01_SRV/";
			var oDataModel = new sap.ui.model.odata.ODataModel(sURI, false);

			var oHeaders = {
				'Accept': 'application/json',
				"X-Requested-With": "XMLHttpRequest",
				"Access-Control-Allow-Origin": "*"
			};
			var dataResultsweek = [];
			var currYear = new Date().getFullYear();
			var param = currYear;
			var functionWithsFilterMonth = "/PrListYearSet('" + param + "')/PRListSet";
			oDataModel.read(functionWithsFilterMonth, {
				header: oHeaders,
				async: false,
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
				},
				error: function(error) {
					MessageBox.show("Generate is not possible beause no model was set", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error",
					details: error
					});
				}
			});
			var oModelYearly = new sap.ui.model.json.JSONModel(dataResultsweek);
			var oExport = new Export({
				exportType: new ExportCSV({

					separatorChar: "\t",

					mimeType: "application/vnd.ms-excel",

					charset: "utf-8",

					fileExtension: "xls"

				}),
				models: oModelYearly,

				rows: {
					path: "/"
				},
				columns: [{
					name: "PR No",
					template: {
						content: "{BANFN}"
					}
				}, {
					name: "Creation Date",
					template: {
						content: "{ERDAT}"
					}
				}, {
					name: "Created by",
					template: {
						content: "{ERNAM}"
					}
				}, {
					name: "Category Name",
					template: {
						content: "{EKNAM}"
					}
				},{
					name: "Category",
					template: {
						content: "{EKGRP}"
					}
				}, {
					name: "Description",
					template: {
						content: "{TXZ01}"
					}
				}, {
					name: "Quantity",
					template: {
						content: "{MENGE}"
					}
				}, {
					name: "Total Price",
					template: {
						content: "{VALUE}"
					}
				}]
			});
			oExport.saveFile().catch(function(oError) {
				MessageBox.show("Generate is not possible beause no model was set", {
					icon: sap.m.MessageBox.Icon.ERROR,
					title: "Error",
					details: oError
				});
			}).then(function() {
				oExport.destroy();
			});
		}

	});

});