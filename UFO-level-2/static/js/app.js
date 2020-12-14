// from data.js
var tableData = data;

// Get a reference to the table body along with city, state and country dropdown items
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

// Create Variables for City, state and country to hold data form tableData
var cities = tableData.map(tableData => tableData.city);
var states = tableData.map(tableData => tableData.state);
var countries = tableData.map(tableData => tableData.country);

// Create unique function that will be used to remove duplicates
const unique = (value, index, self) => {
    return self.indexOf(value) === index
};

var unique_states = states.filter(unique);
var unique_cities = cities.filter(unique);
var unique_countries = countries.filter(unique);
console.log(unique_states);
console.log(unique_cities);
console.log(unique_countries);

//unique_states.forEach((state) => {
    //SDropdownItem = stateDropdown.append("ul");
    //SDropdownItem.text(state)
//});

// Select Button and Form

var button = d3.select("#filter-btn");
var dateform = d3.select("#dateform");
var stateform = d3.select("#stateform")
var cityform = d3.select("#cityform")
var countryform = d3.select("#countryform")
var shapeform = d3.select("#shapeform")

// Turn events on and base off runEnter function
button.on("click", runEnter);
dateform.on("submit",runEnter);
stateform.on("submit",runEnter);
cityform.on("submit",runEnter);

// runEnter function that will run when button is clicked or "enter" key pressed
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var stateElement = d3.select("#stateInput");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var stateValue = stateElement.property("value");
  
    // Print the value to the console
    console.log(inputValue);
    console.log(stateValue);

    // Capture the filtered data

    var filteredData = tableData.filter(UFOsighting => UFOsighting.datetime === inputValue || UFOsighting.state === stateValue);
    console.log(filteredData);
    

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