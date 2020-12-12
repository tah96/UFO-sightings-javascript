// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 1: Loop Through `tableData` for each UFOsighting object
tableData.forEach((UFOsighting) => {
    //console.log(UFOsighting)

    // Step 2: Create row variable to append each row of table in html
    var row = tbody.append("tr")

    // Step 3: Use 'Object.entries' to capture each UFO sighting key and value
    Object.entries(UFOsighting).forEach(([key, value]) => {

        // Step 4: Use d3 to append 1 cell per UFO sighting value (date/time, country, state...etc)
        var cell = row.append("td")
        cell.text(value)
    });    
});

// Select Button and Form

var button = d3.select("#filter-btn");
var form = d3.select("form");

// Turn events on and base off runEnter function
button.on("click", runEnter);
form.on("submit",runEnter);

// runEnter function that will run when button is clicked or "enter" key pressed
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);

    // Capture the filtered data

    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue);

    // Remove previous data in HTML table so when code is run it only returns data for filteredData
    tbody.html("");

    // filteredData for loop to table only those for filtered dates
    
    filteredData.forEach((UFOsightingfiltered) => {
        var row = tbody.append("tr");
        Object.entries(UFOsightingfiltered).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });    
    });

  };