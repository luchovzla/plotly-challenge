// Portions of the code come from instructor's office hours guidance

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
        var otu_ids = data.samples[index].otu_ids;
        var sample_values = data.samples[index].sample_values;
        var otu_labels = data.samples[index].otu_labels;

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