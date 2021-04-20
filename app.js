// Portions of the code come from instructor's office hours guidance

console.log("app.js loaded successfully!");


// Initialize webpage with default dataset

function init() {
    
    // Populate dropdown in html

    var dropdownMenu = d3.select("#selDataset");
    d3.json("data/samples.json").then(function(data) {
        console.log(data);
    })

    // Update bargraph

    // Update bubblechart

    // Update demographic information
};

// Horizontal bar chart

// Function that refreshes horizontal bar plot on change

function optionChanged() {
    var dropdownMenu = d3.select("#selDataset");

    var dataset = dropdownMenu.property("value");
};

init();