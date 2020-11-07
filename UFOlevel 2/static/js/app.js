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
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
  
    // Get the value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value");
    var inputStateValue = inputState.property("value");
    var inputCountryValue = inputCountry.property("value");
    var inputShapeValue = inputShape.property("value");


    //Filter data based on the the following criteria from the data.js file

    var filteredDate = tableData.filter(date => date.datetime === inputDateValue);
    var filteredCity = tableData.filter(place => place.city === inputCityValue);
    var filteredState = tableData.filter(location => location.state === inputStateValue);
    var filteredCountry = tableData.filter(nation => nation.country === inputCountryValue);
    var filteredShape = tableData.filter(item => item.shape === inputShapeValue);


    //Create a new table of just the filtered data
    
    filteredDate.forEach((dateReport) => {
       var row = tbody.append("tr");
       Object.entries(dateReport).forEach(([key,value]) => {
         var cell = row.append("td");
         cell.text(value);
        });
       }); 

    

    filteredCity.forEach((cityReport) => {
      var row = tbody.append("tr");
       Object.entries(cityReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    }); 
       
   
    filteredState.forEach((stateReport) => {
      var row = tbody.append("tr");
      Object.entries(stateReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 
        
    
    filteredCountry.forEach((countryReport) => {
      var row = tbody.append("tr");
      Object.entries(countryReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 

  
    filteredShape.forEach((shapeReport) => {
      var row = tbody.append("tr");
      Object.entries(shapeReport).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    }); 
  };

