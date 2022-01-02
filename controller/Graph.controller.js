sap.ui.define([
		"sap/ui/core/mvc/Controller"
		// "sap/ui/core/routing/History"
		// 	"sap/m/MessageBox"
		// "./utilities"
		

		
], function (BaseController, MessageBox, Utilities, History) {
	"use strict";

	return BaseController.extend("com.sap.build.standard.prMock.controller.Graph", {
		
		handleRouteMatched: function (oEvent) {
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

		onBack: function () {
			// this.getOwnerComponent().getTargets().display("page1");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("View2");

		},
		applyFiltersAndSorters: function (sControlId, sAggregationName) {
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

		updateBindingOptions: function (sCollectionId, oBindingData, sSourceId) {
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

		onInit: function () {
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.getTarget("View4").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));

			var oView = this.getView(),
				oData = {},
				self = this;
			var oModel = new sap.ui.model.json.JSONModel();
			oView.setModel(oModel, "staticDataModel");
			self.oBindingParameters = {};

			oData["StackedColumnChart"] = {};

			oData["StackedColumnChart"]["data"] = [{
				"dim0": "0-15",
				"mea0": 24800.63,
				"mea1": 205199.37,
				"c": "5",
				"r": "2",
				"s": "1",
				"__id": 0
			}, 
			{
				"dim0": "16-30",
				"mea0": 99200.39,
				"mea1": 138799.61,
				"c": "2",
				"r": "6",
				"s": "3",
				"__id": 1
			}, 
			{
				"dim0": ">30",
				"mea0": 70200.54,
				"mea1": 150799.46,
				"c": "6",
				"r": "4",
				"s": "0",
				"__id": 2
			}
			// , {
			// 	"dim0": "Week 4",
			// 	"mea0": 158800.73,
			// 	"mea1": 121199.27,
			// 	"pr": "18",
			// 	"po": "6",
			// 	"__id": 3
			// }, {
			// 	"dim0": "Week 5",
			// 	"mea0": 140000.91,
			// 	"mea1": 89999.09,
			// 	"pr": "12",
			// 	"po": "20",
			// 	"__id": 4
			// }, {
			// 	"dim0": "Week 6",
			// 	"mea0": 172800.15,
			// 	"mea1": 77199.85,
			// 	"pr": "25",
			// 	"po": "14",
			// 	"__id": 5
			// }, {
			// 	"dim0": "Week 7",
			// 	"mea0": 237200.74,
			// 	"mea1": 87799.26,
			// 	"pr": "10",
			// 	"po": "13",
			// 	"__id": 6
			// }, {
			// 	"dim0": "Week 8",
			// 	"mea0": 243200.18,
			// 	"mea1": 106799.82,
			// 	"pr": "8",
			// 	"po": "9",
			// 	"__id": 7
			// }, {
			// 	"dim0": "Week 9",
			// 	"mea0": 280800.24,
			// 	"mea1": 109199.76,
			// 	"pr": "20",
			// 	"po": "6",
			// 	"__id": 8
			// }, {
			// 	"dim0": "Week 10",
			// 	"mea0": 320000.08,
			// 	"mea1": 129999.92,
			// 	"pr": "16",
			// 	"po": "9",
			// 	"__id": 9
			// }, {
			// 	"dim0": "Week 11",
			// 	"mea0": 360800.09,
			// 	"mea1": 119199.91,
			// 	"pr": "9",
			// 	"po": "3",
			// 	"__id": 10
			// }, {
			// 	"dim0": "Week 12",
			// 	"mea0": 403200.08,
			// 	"mea1": 156799.92,
			// 	"pr": "9",
			// 	"po": "5",
			// 	"__id": 11
			// }
			];

			self.oBindingParameters['StackedColumnChart'] = {
				"path": "/StackedColumnChart/data",
				"model": "staticDataModel",
				"parameters": {}
			};

			oView.getModel("staticDataModel").setData(oData, true);

			function dateDimensionFormatter(oDimensionValue, sTextValue) {
				var oValueToFormat = sTextValue !== undefined ? sTextValue : oDimensionValue;
				if (oValueToFormat instanceof Date) {
					var oFormat = sap.ui.core.format.DateFormat.getDateInstance({
						style: "short"
					});
					return oFormat.format(oValueToFormat);
				}
				return oValueToFormat;
			}

			// var aDimensions = oView.byId("sap_Responsive_Page_0-content-sap_chart_LineChart-1535623422001").getDimensions();
			// aDimensions.forEach(function(oDimension) {
			// 	oDimension.setTextFormatter(dateDimensionFormatter);
			// });

			var aDimensions = oView.byId("StackedColumnChart").getDimensions();
			aDimensions.forEach(function (oDimension) {
				oDimension.setTextFormatter(dateDimensionFormatter);
			});

		},
		onAfterRendering: function () {

				var oChart,
					self = this,
					oBindingParameters = this.oBindingParameters,
					oView = this.getView();

				// oChart = oView.byId("sap_Responsive_Page_0-content-sap_chart_LineChart-1535623422001");
				// oChart.bindData(oBindingParameters['sap_Responsive_Page_0-content-sap_chart_LineChart-1535623422001']);

				oChart = oView.byId("StackedColumnChart");
				oChart.bindData(oBindingParameters['StackedColumnChart']);

			}

	
	});
}, /* bExport= */ true);
// sap.ui.define([
// 	"sap/ui/core/mvc/Controller"
// ], function (Controller) {
// 	"use strict";

// 	return Controller.extend("com.sap.build.standard.prMock.controller.Graph", {
// onBackHome: function(){
// 		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
// 			oRouter.navTo("View2");
// },
// 		onAfterRendering: function () {
		

// 			var a1a2m1m2m3Model = {
// 				data: [{
// 						Day: "Day1",
// 						PR: "Capex",
// 						Revenue: 10
// 					}, {
// 						Day: "Day1",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day1",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day2",
// 						PR: "Capex",
// 						Revenue: 8
// 					}, {
// 						Day: "Day2",
// 						PR: "Revenue",
// 						Revenue: 3
// 					},
// 					// {
// 					// 	Day: "Day2",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					// // {Day: "Day5-8", PR: "M3", Revenue: 20},
// 					{
// 						Day: "Day3",
// 						PR: "Capex",
// 						Revenue: 6
// 					},
// 					{
// 						Day: "Day3",
// 						PR: "Revenue",
// 						Revenue: 9
// 					},
// 					// {
// 					// 	Day: "Day3",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day4",
// 						PR: "Capex",
// 						Revenue: 12
// 					},
// 					{
// 						Day: "Day4",
// 						PR: "Revenue",
// 						Revenue: 4
// 					},
// 					// {
// 					// 	Day: "Day4",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					// {Day: "Day13-16", PR: "M1", Revenue: 90,Capex:"20"},
// 					{
// 						Day: "Day5",
// 						PR: "Capex",
// 						Revenue: 3
					
// 					},
// 					{
// 						Day: "Day5",
// 						PR: "Revenue",
// 						Revenue: 5
// 					},
// 					// {
// 					// 	Day: "Day5",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },

// 					{
// 						Day: "Day6",
// 						PR: "Capex",
// 						Revenue: 6
// 					},
// 					{
// 						Day: "Day6",
// 						PR: "Revenue",
// 						Revenue: 18
// 					},
// 					// {
// 					// 	Day: "Day6",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day7",
// 						PR: "Capex",
// 						Revenue: 13
// 					}, 
// 					{
// 						Day: "Day7",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day7",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },

// 					{
// 						Day: "Day8",
// 						PR: "Capex",
// 						Revenue: 7
// 					}, 
// 					{
// 						Day: "Day8",
// 						PR: "Revenue",
// 						Revenue: 17
// 					},
// 					// {
// 					// 	Day: "Day8",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },

// 					{
// 						Day: "Day9",
// 						PR: "Capex",
// 						Revenue: 5
// 					}, 
// 					{
// 						Day: "Day9",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day9",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },

// 					{
// 						Day: "Day10",
// 						PR: "Capex",
// 						Revenue: 8
// 					},
// 					{
// 						Day: "Day10",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day10",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },

// 					{
// 						Day: "Day11",
// 						PR: "Capex",
// 						Revenue: 12
// 					}, {
// 						Day: "Day11",
// 						PR: "Revenue",
// 						Revenue: 11
// 					},
// 					// {
// 					// 	Day: "Day11",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day12",
// 						PR: "Capex",
// 						Revenue: 15
// 					}, {
// 						Day: "Day12",
// 						PR: "Revenue",
// 						Revenue: 5
// 					},
// 					// {
// 					// 	Day: "Day12",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day13",
// 						PR: "Capex",
// 						Revenue: 9
// 					}, {
// 						Day: "Day13",
// 						PR: "Revenue",
// 						Revenue: 15
// 					},
// 					// {
// 					// 	Day: "Day13",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// }, 
// 					{
// 						Day: "Day14",
// 						PR: "Capex",
// 						Revenue: 11
// 					}, {
// 						Day: "Day14",
// 						PR: "Revenue",
// 						Revenue: 8
// 					},
// 					// {
// 					// 	Day: "Day14",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// } ,
// 					{
// 						Day: "Day15",
// 						PR: "Capex",
// 						Revenue: 9
// 					}, {
// 						Day: "Day15",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day15",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day16",
// 						PR: "Capex",
// 						Revenue: 8
// 					}, {
// 						Day: "Day16",
// 						PR: "Revenue",
// 						Revenue: 10
// 					},
// 					// {
// 					// 	Day: "Day16",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day17",
// 						PR: "Capex",
// 						Revenue: 10
// 					}, {
// 						Day: "Day17",
// 						PR: "Revenue",
// 						Revenue: 2
// 					},
// 					// {
// 					// 	Day: "Day17",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day18",
// 						PR: "Capex",
// 						Revenue: 20
// 					},
// 					{
// 						Day: "Day18",
// 						PR: "Revenue",
// 						Revenue: 4
// 					},
// 					// {
// 					// 	Day: "Day18",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					// {Day: "Day5-8", PR: "M3", Revenue: 20},
// 					{
// 						Day: "Day19",
// 						PR: "Capex",
// 						Revenue: 3
// 					}, {
// 						Day: "Day19",
// 						PR: "Revenue",
// 						Revenue: 8
// 					},
// 					// {
// 					// 	Day: "Day19",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day20",
// 						PR: "Capex",
// 						Revenue: 3
// 					}, {
// 						Day: "Day20",
// 						PR: "Revenue",
// 						Revenue: 8
// 					},
// 					// {
// 					// 	Day: "Day20",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					// {Day: "Day13-16", PR: "M1", Revenue: 90,Capex:"20"},
// 					{
// 						Day: "Day21",
// 						PR: "Capex",
// 						Revenue: 2
					
// 					}, {
// 						Day: "Day21",
// 						PR: "Revenue",
// 						Revenue: 5
// 					},
// 					// {
// 					// 	Day: "Day21",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day22",
// 						PR: "Capex",
// 						Revenue: 6
// 					}, {
// 						Day: "Day22",
// 						PR: "Revenue",
// 						Revenue: 3
// 					},
// 					// {
// 					// 	Day: "Day22",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day23",
// 						PR: "Capex",
// 						Revenue: 4
// 					}, {
// 						Day: "Day23",
// 						PR: "Revenue",
// 						Revenue: 9
// 					},
// 					// {
// 					// 	Day: "Day23",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day24",
// 						PR: "Capex",
// 						Revenue: 7
					
// 					}, {
// 						Day: "Day24",
// 						PR: "Revenue",
// 						Revenue: 7
// 					},
// 					// {
// 					// 	Day: "Day24",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day25",
// 						PR: "Capex",
// 						Revenue: 5
// 					},{
// 						Day: "Day25",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day25",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day26",
// 						PR: "Capex",
// 						Revenue: 8
// 					},{
// 						Day: "Day26",
// 						PR: "Revenue",
// 						Revenue: 6
// 					},
// 					// {
// 					// 	Day: "Day26",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day27",
// 						PR: "Capex",
// 						Revenue: 12
// 					}, {
// 						Day: "Day27",
// 						PR: "Revenue",
// 						Revenue: 11
// 					},
// 					// {
// 					// 	Day: "Day27",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day28",
// 						PR: "Capex",
// 						Revenue: 15
// 					}, {
// 						Day: "Day28",
// 						PR: "Revenue",
// 						Revenue: 17
// 					},
// 					// {
// 					// 	Day: "Day28",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day29",
// 						PR: "Capex",
// 						Revenue: 9
// 					}, {
// 						Day: "Day29",
// 						PR: "Revenue",
// 						Revenue: 15
// 					},
// 					// {
// 					// 	Day: "Day29",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// },
// 					{
// 						Day: "Day30",
// 						PR: "Capex",
// 						Revenue: 9
// 					}, {
// 						Day: "Day30",
// 						PR: "Revenue",
// 						Revenue: 3
// 					}
// 					// ,{
// 					// 	Day: "Day30",
// 					// 	PR: "M3",
// 					// 	Revenue: 15
// 					// }
// 				]
// 			};

// 			var a1a2m1m2Data = {
// 				dimensions: [{
// 					axis: 1,
// 					name: "Day",
// 					value: "{Day}"
// 				}, {
// 					axis: 2,
// 					name: "PR",
// 					value: "{PR}"
// 				}, ],
// 				measures: [{
// 					group: 1,
// 					name: "Revenue",
// 					value: "{Revenue}"
// 				}, {
// 					group: 2,
// 					name: "Capex",
// 					value: "{Capex}"
// 				}],
// 				data: {
// 					path: "/data"
// 				}
// 			};

// 			var oDataset = new sap.viz.core.FlattenedDataset(a1a2m1m2Data);
// 			var oModel = new sap.ui.model.json.JSONModel(a1a2m1m2m3Model);
// 			oDataset.setModel(oModel);
// 			this.getView().byId("dualline").setDataset(oDataset);

// 			//var a1a2m1m2m3Model = {
// 			//             data:[
// 			//                 {Region: "Day 1", PR: "FJ", Revenue: 10, Measure: 110, Population: 1200},
// 			//                 // {Region: "Asia", PR: "KI", Revenue: 5, Measure: 180, Population: 1900},
// 			//                 {Region: "Day1", PR: "LA", Revenue: 17, Measure: 105, Population: 1680},
// 			//                 {Region: "Day2", PR: "FJ", Revenue: 2, Measure: 130, Population: 1003},
// 			//                 {Region: "Day2", PR: "KI", Revenue: 22, Measure: 80, Population: 1312},
// 			//                 {Region: "Day2", PR: "LA", Revenue: 24, Measure: 40, Population: 1453},
// 			//                 // {Region: "Africa", PR: "FJ", Revenue: 37, Measure:88, Population: 1335},
// 			//                 {Region: "Day3", PR: "KI", Revenue: 15, Measure: 55, Population: 1859},
// 			//                 {Region: "Day3", PR: "LA", Revenue: 44, Measure:140, Population: 1879}
// 			//             ]
// 			//           };

// 			//           var a1a2m1m2Data = {
// 			//               dimensions : [
// 			//                   {axis : 1, name: "Region", value: "{Region}"},
// 			//                   {axis : 2, name: "PR", value: "{PR}"},
// 			//               ],
// 			//               measures : [
// 			//                   {group: 1, name : "Revenue", value : "{Revenue}"},
// 			//                   {group: 2, name : "Measure", value : "{Measure}"}
// 			//               ],
// 			//               data : {
// 			//                 path : "/data"
// 			//               }
// 			//             };

// 			//     var oDataset = new sap.viz.core.FlattenedDataset(a1a2m1m2Data);
// 			//     var oModel = new sap.ui.model.json.JSONModel(a1a2m1m2m3Model);
// 			//     oDataset.setModel(oModel);
// 			//     this.getView().byId("dualline").setDataset(oDataset);
// 			//var oDualChart = new sap.viz.ui5.DualLine(
// 			// 	  {
// 			//             id: "dualline",
// 			// 		  width : "80%",
// 			//             height : "400px",
// 			//             title: {
// 			//               visible : true,
// 			//               text : 'Profit & Measure By Region & PR'
// 			//             },
// 			//             dataset: oDataset
// 			//           }

// 			// );

// 		}

// 	});

// });