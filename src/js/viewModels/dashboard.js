define([
  'knockout',
  '../accUtils',
  'ojs/ojmutablearraydataprovider',
  'ojs/ojselectsingle',
  'ojs/ojlabel',
  'ojs/ojchart',
  'ojs/ojlistview',
  'text!../store_data.json'
], function (
  ko,
  AccUtils,
  MutableArrayDataProvider,
  ojselectsingle,
  ojlabel,
  ojchart,
  ojlistview,
  storeData
) {
  function DashboardViewModel() {
    var self = this;

    self.val = ko.observable("pie");

    self.activityDataProvider = new MutableArrayDataProvider(JSON.parse(storeData), {
      keyAttributes: "id"
    });

    self.chartData = [
      { id: 0, series: "Baseball", group: "Group A", value: 42 },
      { id: 1, series: "Baseball", group: "Group B", value: 34 },
      { id: 2, series: "Bicycling", group: "Group A", value: 55 },
      { id: 3, series: "Bicycling", group: "Group B", value: 30 },
      { id: 4, series: "Skiing", group: "Group A", value: 36 },
      { id: 5, series: "Skiing", group: "Group B", value: 50 },
      { id: 6, series: "Soccer", group: "Group A", value: 22 },
      { id: 7, series: "Soccer", group: "Group B", value: 46 }
    ];

    self.chartDataProvider = new MutableArrayDataProvider(self.chartData, {
      keyAttributes: "id"
    });

    self.chartTypes = [
      { value: "pie", label: "Pie" },
      { value: "bar", label: "Bar" }
    ];

    self.chartTypesDP = new MutableArrayDataProvider(self.chartTypes, {
      keyAttributes: "value"
    });

    self.connected = function () {
      AccUtils.announce("Dashboard page loaded.");
      document.title = "Dashboard";
    };

    self.disconnected = function () {
      // Implement if needed
    };

    self.transitionCompleted = function () {
      // Implement if needed
    };
  }

  return DashboardViewModel;
});
