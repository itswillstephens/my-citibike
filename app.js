$(document).ready(function() { 

    let api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

    $.getJSON(api, function(citibike) {
        
        let now = new Date();
        let unixSeconds = now.getTime();
        let citibikeSeconds = citibike.data.stations[641].last_reported;
        let lastUpdated = unixSeconds - citibikeSeconds;
        
        console.log("Citibike: " + citibikeLastUpdateTime);
        console.log("Unix: " + secondsUnix);

        let stationID = citibike.data.stations[641].station_id;
        let bikes = citibike.data.stations[641].num_bikes_available;
        let docks = citibike.data.stations[641].num_docks_available;

            $("#last-updated").html(lastUpdated + " seconds ago");
            $("#bikes").html(bikes + " bikes");
            $("#docks").html(docks + " docks");
    })    

});