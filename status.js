var statusWindow = document.querySelectorAll("#statusHistory")[0];
var statusMaintenance = document.querySelectorAll("#statusMaintenance")[0];

fetch('https://4lzycl8t1x0c.statuspage.io/api/v2/scheduled-maintenances.json')
    .then(function(response){ 
        return response.json();
    }).then(function(myJson){
        JSON.stringify(myJson);
        var maintJSON = document.querySelectorAll("#statusMaintenance")[0]
        myJson.scheduled_maintenances.forEach(element => {
            
            console.log(element.scheduled_for);
            maintJSON.textContent = element.scheduled_for;
        });
    })