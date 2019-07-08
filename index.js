var statusWindow = document.querySelectorAll("#statusHistory")[0];
var statusMaintenance = document.querySelectorAll("#statusMaintenance")[0];
var schedule = document.querySelectorAll("#scheduleBlock");
$.get("/api/v1/my/roster" , function(rosters){ console.log("My Rosters" , rosters);})


fetch('https://4lzycl8t1x0c.statuspage.io/api/v2/scheduled-maintenances/upcoming.json')
    .then(function(response){ 
        return response.json();
    }).then(function(myJson){
        JSON.stringify(myJson);
        var maintJSON = document.querySelectorAll("#statusMaintenance")[0];
        maintJSON.innerHTML = "<br>";
    })

fetch('https://4lzycl8t1x0c.statuspage.io/api/v2/incidents.json')
    .then(function(response){ 
        return response.json();
    }).then(function(myJson){
        JSON.stringify(myJson);
        
        var maintJSON = document.querySelectorAll("#statusHistory")[0];
        for(var element=0; element<10; element++ ){
            console.log(myJson);
            maintJSON.innerHTML += myJson.incidents[element].created_at.substr(0,10) + " <br><a href=" + myJson.incidents[element].shortlink +">" + myJson.incidents[element].name + "</a><br><br>";
        };
    })

    // schedule.textcontent($.get("2390fa18082540.na.deputy.com/api/v1/my/roster" , function(rosters){ console.log("My Rosters" , rosters);}));    