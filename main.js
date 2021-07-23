$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data){
        //log all data
        console.log(data);

        // ************CODE WORKS UNTIL HERE*****************
        // NEED TO FIGURE OUT WHETHER FOREACH IS BETTER THAN FOR LOOP FOR BELOW, AND WHETHER ALL THE SUBSEQUENT CODE SHOULD BE INCLUDED IN THE LOOP


        //create loop to iterate through each obj in array
        data.forEach(populateGrid() => {
            
        });

        let table = document.getElementById('table');

        populateGrid() {
            //create new table row
            let newRow = table.insertRow(1);
        }

        //grab name from obj and add to first td cell
        //grab description to add to second td cell

        //grab long & lat, storing them in variables 'long' and 'lat'
        
        //create link to location using template literal

        //display link in third td cell
    });
});
