$(document).ready(function() { 

    let api;
    $.getJSON(api, function(citibike) {
        
        api = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";
        let lastUpdated = citibike.data.stations[10].station_id;
            // let bike = citibike;
            // let stations = citibike;
                
            $("#last-updated").html(lastupdated);
            // $("#bikes").html(bikes);
            // $("#stations").html(stations);
    })    

});