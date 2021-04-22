// Portions of the code are taken directly from instructor's office hours guidance

console.log("app.js loaded successfully!");

// Bar Graph

function drawBarGraph(sampleId) {
    console.log(`drawBarGraph(${sampleId})`);

    // Read JSON to extract data to plot
    d3.json("data/samples.json").then(data => {
        var sampleNames = data.names;
        // Use findIndex to look for the sample id index 
        var index = sampleNames.findIndex(id => id === sampleId);

        // Extract data to graph using the index
        var otuIds = data.samples[index].otu_ids;
        var sampleValues = data.samples[index].sample_values;
        var otuLabels = data.samples[index].otu_labels;

        // Filter top 10 values, ID's and Labels
        var top10Ids = otuIds.slice(0, 10).map(otu => `OTU ${otu}`);
        var top10Values = sampleValues.slice(0, 10);
        var top10Labels = otuLabels.slice(0, 10);

        // Sort in descending order
        var sortedIds = top10Ids.reverse();
        var sortedValues = top10Values.reverse();
        var sortedLabels = top10Labels.reverse();

        // Trace for Plotly
        var barData = [{
            x: top10Values,
            y: top10Ids,
            text: top10Labels,
            type: "bar",
            orientation: "h"
        }];

        // Draw plot
        Plotly.newPlot("bar", barData);
    });
}

// Bubble Chart

function drawBubbleChart(sampleId) {
    console.log(`drawBubbleChart(${sampleId})`);
}

function showSubjectInfo(sampleId) {
    console.log(`showSubjectInfo(${sampleId})`);
}

// Initialize webpage with default dataset

function init() {
    
    // Populate dropdown in html

    var dropdownMenu = d3.select("#selDataset");
    d3.json("data/samples.json").then(data => {

        var sampleNames = data.names;

        sampleNames.forEach(sampleId => {
            dropdownMenu.append("option")
                .text(sampleId)
                .property("value", sampleId)
        });

        var id = sampleNames[0];

        // Update bar graph
        drawBarGraph(id);
    
        // Update bubble chart
        drawBubbleChart(id);
    
        // Update demographic information
        showSubjectInfo(id);

    });

}

// Horizontal bar chart



// Function that refreshes horizontal bar plot on change

function optionChanged(newSampleId) {
    
    // Refresh graphs using new sample ID
    console.log(`User selected ${newSampleId}`)
    drawBarGraph(newSampleId);
    drawBubbleChart(newSampleId);
    showSubjectInfo(newSampleId);

};

init();