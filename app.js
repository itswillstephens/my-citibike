$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        console.log(api);
        let lastUpdated = citibike.data.stations[640].last_reported;
        let bike = citibike.data.stations[640].num_bikes_available;
        let docks = citibike.data.stations[640].num_docks_available;
                
            $("#last-updated").html(lastUpdated);
            $("#bikes").html(bikes);
            $("#docks").html(docks);
    })    

});