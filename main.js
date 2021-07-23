$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(data){
        //log all data
        console.log(data);


        let table = document.getElementById('table');

        //create loop to iterate through each obj in array
        for (i=0; i<data.length; i++){
            //create new table row
            let newRow = table.insertRow(i+1);
        }    
        // ************CODE WORKS UNTIL HERE*****************


        
        //grab name from obj and add to first td cell
        //grab description to add to second td cell

        //grab long & lat, storing them in variables 'long' and 'lat'
        
        //create link to location using template literal

        //display link in third td cell
    });
});
