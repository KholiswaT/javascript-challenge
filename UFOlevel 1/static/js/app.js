// Import data from data.js file
var tableData = data;

//Utilize console log to display data that is contained within the newly created variable
console.log(tableData);

var tbody = d3.select("tbody");

//Create forEach to loop through each object and append values utilzing d3
tableData.forEach((ufoReport) => {
     console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value)});
});

//Define and activate button and form on html file

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {

    //Remove previous information from website
    tbody.html("")

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    //Filter data based on the dates from the data.js file
    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    //Create a new table of just the filtered data
    filteredData.forEach((filterReport) => {
       var row = tbody.append("tr");
       Object.entries(filterReport).forEach(([key,value]) => {
         var cell = row.append("td");
         cell.text(value);
        });
       }); 
    };

