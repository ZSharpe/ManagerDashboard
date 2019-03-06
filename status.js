// var maintenanceHistory = $.getJSON("https://4lzycl8t1x0c.statuspage.io/api/v2/scheduled-maintenances.json",
//     function () {
//         console.log("Maintenance history retrieved successfully!")
//     }
// );

var maintData = fetch('https://4lzycl8t1x0c.statuspage.io/api/v2/scheduled-maintenances.json')
    .then(function(response){
        return response.json();
    })
    .then(function(myJson){
        JSON.stringify(myJson);
        return myJson;
    });

// JSON.parse(maintData);

var statusWindow = document.querySelectorAll("#statusHistory")[0];
var statusMaintenance = document.querySelectorAll("#statusMaintenance")[0];

// statusWindow.textContent = maintenancesData;