console.log("app.js loaded successfully!");

// Read samples.json

var jsonPath = "./samples.json";
var bellyButtonData = d3.json(jsonPath);

// Horizontal bar chart

// Function that refreshes horizontal bar plot on change

function optionChanged() {
    var dropdownMenu = d3.select("#selDataset");

    var dataset = dropdownMenu.property("value");
};