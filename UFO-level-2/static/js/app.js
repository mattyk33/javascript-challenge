// from data.js
var tableData = data;

// Write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each ufo object in the data array
tableData.forEach((ufoObject) => {

	// Append one table row for each ufo object
	var row = tbody.append("tr");

	// Use `Object.entries` and forEach to iterate through keys and values of ufo object
	Object.entries(ufoObject).forEach(([key, value]) => {

		// Append one cell per ufo object value 
		var cell = row.append("td");
        cell.text(value);
    });
});

// Use a date form in your HTML document and write JavaScript code that will listen
// for events and search through the date/time column to find rows that match user input.

// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // // Select the input element and get the raw HTML node

    // //Option 2 Harder to figure Out
    // var elementChanged =d3.select("#input")
    // var inputValue= elementChanged.property("value")
    // var filterId = elementChanged.attr("id")

    // Option 1 If Statements Long
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

    // Filter Data with datetime equal to input value
    var filteredData = tableData;
    
    if (inputDateValue != "") {
        var filterData = filteredData.filter(ufoObject => ufoObject.datetime === inputDateValue);
        		
		if (filterData.length !== 0) {
			    // Clear out current contents in the table
                tbody.html("");

                // Loop through each ufo object in the data array
                filterData.forEach((ufoObject) => {
            
                // Append one table row for each ufo object
                var row = tbody.append("tr");
            
                // Use `Object.entries` and forEach to iterate through keys and values of ufo object
                Object.entries(ufoObject).forEach(([key, value]) => {
            
                    // Append one cell per ufo object value 
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
		}
		else {
			// Clear out the previously loaded HTML:
			tbody.html("");
			
			// Tell them "No rows match"
			tbody.append("tr").append("td").text("No sightings on this date.");
		}
    }
    else if (inputCityValue != "") {
        var filterData = filteredData.filter(ufoObject => ufoObject.city === inputCityValue);
        
        if (filterData.length !== 0) {
            // Clear out current contents in the table
            tbody.html("");

            // Loop through each ufo object in the data array
            filterData.forEach((ufoObject) => {
        
            // Append one table row for each ufo object
            var row = tbody.append("tr");
        
            // Use `Object.entries` and forEach to iterate through keys and values of ufo object
            Object.entries(ufoObject).forEach(([key, value]) => {
        
                // Append one cell per ufo object value 
                var cell = row.append("td");
                cell.text(value);
                });
            });
        }
        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
            // Tell them "No rows match"
            tbody.append("tr").append("td").text("No sightings in this city.");
        }
    }
    else if (inputStateValue != "") {
        var filterData = filteredData.filter(ufoObject => ufoObject.state === inputStateValue);

        if (filterData.length !== 0) {
            // Clear out current contents in the table
            tbody.html("");

            // Loop through each ufo object in the data array
            filterData.forEach((ufoObject) => {
        
            // Append one table row for each ufo object
            var row = tbody.append("tr");
        
            // Use `Object.entries` and forEach to iterate through keys and values of ufo object
            Object.entries(ufoObject).forEach(([key, value]) => {
        
                // Append one cell per ufo object value 
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
            // Tell them "No rows match"
            tbody.append("tr").append("td").text("No sightings in this state.");
        }
    }
    else if (inputCountryValue != "") {
        var filterData = filteredData.filter(ufoObject => ufoObject.country === inputCountryValue);

        if (filterData.length !== 0) {
            // Clear out current contents in the table
            tbody.html("");

            // Loop through each ufo object in the data array
            filterData.forEach((ufoObject) => {
        
            // Append one table row for each ufo object
            var row = tbody.append("tr");
        
            // Use `Object.entries` and forEach to iterate through keys and values of ufo object
            Object.entries(ufoObject).forEach(([key, value]) => {
        
                // Append one cell per ufo object value 
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
            // Tell them "No rows match"
            tbody.append("tr").append("td").text("No sightings in this country.");
        }
    }
    else {
        var filterData = filteredData.filter(ufoObject => ufoObject.shape === inputShapeValue);

        if (filterData.length !== 0) {
            // Clear out current contents in the table
            tbody.html("");

            // Loop through each ufo object in the data array
            filterData.forEach((ufoObject) => {
        
            // Append one table row for each ufo object
            var row = tbody.append("tr");
        
            // Use `Object.entries` and forEach to iterate through keys and values of ufo object
            Object.entries(ufoObject).forEach(([key, value]) => {
        
                // Append one cell per ufo object value 
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }
        else {
            // Clear out the previously loaded HTML:
            tbody.html("");
        
            // Tell them "No rows match"
            tbody.append("tr").append("td").text("No sightings for this shape");
        }
    }
}
