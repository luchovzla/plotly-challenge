// Portions of the code come from instructor's office hours guidance

console.log("app.js loaded successfully!");

// Bar Graph

function drawBarGraph(sampleId) {
    console.log(`drawBarGraph(${sampleId})`);
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
    
    console.log(`User selected ${newSampleId}`)
    drawBarGraph(newSampleId);
    drawBubbleChart(newSampleId);
    showSubjectInfo(newSampleId);

};

init();