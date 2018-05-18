$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        let stationID = citibike.data.stations[641].station_id;
        let lastUpdated = citibike.data.stations[641].last_reported;
        let bikes = citibike.data.stations[641].num_bikes_available;
        let docks = citibike.data.stations[641].num_docks_available;

            console.log(stationID);
            $("#last-updated").html(lastUpdated);
            $("#bikes").html(bikes);
            $("#docks").html(docks);
    })    

});