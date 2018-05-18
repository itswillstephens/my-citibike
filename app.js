$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        let stationID = citibike.data.stations[640].station_id;
        let lastUpdated = citibike.data.stations[640].last_reported;
        let bikes = citibike.data.stations[640].num_bikes_available;
        let docks = citibike.data.stations[640].num_docks_available;

            $("#station-id").html(stationID);
            $("#last-updated").html(lastUpdated);
            $("#bikes").html(bikes);
            $("#docks").html(docks);
    })    

});